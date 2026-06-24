import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { lessons } from './data/lessons';
import { loadPyodide } from './utils/pyodideLoader';

function Lesson() {
  const { id } = useParams();
  const lesson = lessons.find((l) => l.id === parseInt(id));
  const [code, setCode] = useState(lesson?.starterCode || '');
  const [output, setOutput] = useState('');
  const [hint, setHint] = useState('');
  const [pyodide, setPyodide] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPyodide().then((py) => {
      setPyodide(py);
      setIsLoading(false);
    });
  }, []);

  const runCode = async () => {
    if (!pyodide) {
      setOutput('⏳ Загрузка Python...');
      return;
    }
    setOutput('⏳ Выполнение...');
    setHint('');

    try {
      pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
      `);

      pyodide.runPython(code);
      const result = pyodide.runPython('sys.stdout.getvalue()');

      if (result.trim() === '') {
        setOutput('✅ Код выполнен! (вывод пуст)');
      } else {
        setOutput(result);
      }

      if (lesson.tests && lesson.tests.length > 0) {
        const expected = lesson.tests[0].expected;
        if (result.trim() === expected.trim()) {
          setOutput((prev) => prev + '\n🎉 Правильно! Задание выполнено!');
        } else if (result.trim() !== '') {
          setHint(`💡 Ожидалось: "${expected.trim()}"`);
        }
      }
    } catch (err) {
      setOutput(`❌ Ошибка: ${err.message}`);
      if (err.message.includes('NameError')) {
        setHint('💡 Похоже, переменная не объявлена. Проверь имя.');
      } else if (err.message.includes('SyntaxError')) {
        setHint('💡 Синтаксическая ошибка. Проверь кавычки и двоеточия.');
      } else if (err.message.includes('TypeError')) {
        setHint('💡 TypeError: проверь типы данных.');
      }
    }
  };

  if (!lesson) {
    return <h2>Урок не найден</h2>;
  }

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 70px)' }}>
      {/* Левая панель: теория */}
      <div className="theory-panel" style={{ flex: 1 }}>
        <h2>{lesson.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: lesson.theory }} />
        {isLoading && <p>⏳ Загрузка Python...</p>}
      </div>

      {/* Правая панель: редактор и вывод */}
      <div className="editor-panel" style={{ flex: 1 }}>
        <CodeMirror
          value={code}
          onChange={setCode}
          extensions={[python()]}
          theme="dark"
          height="280px"
          style={{ borderRadius: '12px', overflow: 'hidden' }}
        />
        <button className="check-btn" onClick={runCode}>
          ▶ Проверить код
        </button>
        {output && <pre className="output-box">{output}</pre>}
        {hint && <div className="hint-box">{hint}</div>}
      </div>
    </div>
  );
}

export default Lesson;