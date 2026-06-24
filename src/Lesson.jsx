import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { lessons } from '../data/lessons';
import { loadPyodide } from '../utils/pyodideLoader';

export default function Lesson() {
  const { id } = useParams();
  const lesson = lessons.find(l => l.id === parseInt(id));

  const [code, setCode] = useState(lesson?.starterCode || '');
  const [output, setOutput] = useState('');
  const [hint, setHint] = useState('');
  const [pyodide, setPyodide] = useState(null);

  // Загружаем Pyodide при монтировании
  useEffect(() => {
    loadPyodide().then(setPyodide);
  }, []);

  const runCode = async () => {
    if (!pyodide) {
      setOutput('Загрузка Python...');
      return;
    }
    try {
      // Перенаправляем вывод print() в переменную
      pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
      `);
      pyodide.runPython(code);
      const result = pyodide.runPython('sys.stdout.getvalue()');
      setOutput(result || '✅ Код выполнен без ошибок (вывод пуст)');
      setHint('');

      // Простая проверка: сравниваем вывод с ожидаемым
      if (lesson.tests && lesson.tests.length > 0) {
        const expected = lesson.tests[0].expected;
        if (result === expected) {
          setOutput(prev => prev + '\n🎉 Задание выполнено верно!');
        } else if (result.trim() !== '') {
          setHint(`🔍 Попробуй еще раз. Ожидалось: "${expected.trim()}"`);
        }
      }
    } catch (err) {
      setOutput(`❌ Ошибка: ${err.message}`);
      // Подсказки на основе ошибки
      if (err.message.includes('NameError')) {
        setHint('💡 Похоже, ты используешь переменную, которую не объявил. Проверь имя.');
      } else if (err.message.includes('SyntaxError')) {
        setHint('💡 Проверь синтаксис: возможно, забыл двоеточие или кавычки.');
      }
    }
  };

  return (
    <div className="lesson-container">
      <div className="theory-panel">
        <h2>{lesson?.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: lesson?.theory || '' }} />
      </div>
      <div className="editor-panel">
        <CodeMirror
          value={code}
          onChange={setCode}
          extensions={[python()]}
          theme="dark"
          height="300px"
        />
        <button onClick={runCode}>▶ Проверить</button>
        {output && <pre className="output">{output}</pre>}
        {hint && <div className="hint">{hint}</div>}
      </div>
    </div>
  );
}