export const lessons = [
  {
    id: 1,
    title: 'Переменные и вывод данных',
    theory: `
      <h3>📦 Что такое переменная?</h3>
      <p>Переменная — это как коробка с ярлыком, в которую можно положить данные. У каждой переменной есть <strong>имя</strong> и <strong>значение</strong>.</p>
      <pre style="background:#f5ede4;padding:12px;border-radius:8px;border-left:4px solid #b3815a;">
city = "Москва"   # city — имя, "Москва" — значение
age = 16          # age — имя, 16 — значение</pre>
      <p>В Python не нужно указывать тип данных — интерпретатор сам понимает, что это число или текст.</p>

      <h3>📤 Вывод данных: print()</h3>
      <p>Функция <code>print()</code> выводит информацию на экран. В скобках через запятую можно указать несколько значений.</p>
      <pre style="background:#f5ede4;padding:12px;border-radius:8px;border-left:4px solid #b3815a;">
print("Привет!")
print("Мне", 16, "лет")</pre>
      <p>Текст всегда пишется в кавычках (" " или ' '), а числа — без.</p>

      <p><strong>📌 Задание:</strong> Создай переменную <code>city</code>, запиши в неё название своего города, а затем выведи на экран фразу <code>"Я живу в [город]"</code>.</p>
      <p><em>Подсказка: используй <code>print("Я живу в", city)</code></em></p>
    `,
    starterCode: ``,
    tests: [{ expected: 'Я живу в Москва\n' }],
  },

  {
    id: 2,
    title: 'Арифметические операции',
    theory: `
      <h3>➕ Базовые операции</h3>
      <p>Python поддерживает все основные математические действия:</p>
      <table style="border-collapse:collapse;width:100%;margin:10px 0;">
        <tr style="background:#e8dccc;">
          <th style="border:1px solid #c9ad93;padding:8px;text-align:center;">Оператор</th>
          <th style="border:1px solid #c9ad93;padding:8px;text-align:center;">Название</th>
          <th style="border:1px solid #c9ad93;padding:8px;text-align:center;">Пример</th>
          <th style="border:1px solid #c9ad93;padding:8px;text-align:center;">Результат</th>
        </tr>
        <tr>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;"><code>+</code></td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;">Сложение</td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;"><code>5 + 3</code></td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;">8</td>
        </tr>
        <tr>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;"><code>-</code></td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;">Вычитание</td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;"><code>10 - 4</code></td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;">6</td>
        </tr>
        <tr>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;"><code>*</code></td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;">Умножение</td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;"><code>4 * 3</code></td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;">12</td>
        </tr>
        <tr>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;"><code>/</code></td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;">Деление</td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;"><code>15 / 4</code></td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;">3.75</td>
        </tr>
        <tr>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;"><code>//</code></td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;">Целочисленное деление</td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;"><code>15 // 4</code></td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;">3</td>
        </tr>
        <tr>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;"><code>%</code></td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;">Остаток от деления</td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;"><code>15 % 4</code></td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;">3</td>
        </tr>
        <tr>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;"><code>**</code></td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;">Возведение в степень</td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;"><code>2 ** 3</code></td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;">8</td>
        </tr>
      </table>

      <h3>🔑 Особенно важно: оператор %</h3>
      <p><code>%</code> возвращает <strong>остаток от деления</strong>. Это очень полезно для проверки чётности:</p>
      <pre style="background:#f5ede4;padding:12px;border-radius:8px;border-left:4px solid #b3815a;">
10 % 3  → 1   # 10 делить на 3 = 3, остаток 1
7 % 2   → 1   # 7 — нечётное
8 % 2   → 0   # 8 — чётное</pre>
      <p>Если число делится на 2 без остатка (<code>число % 2 == 0</code>) — оно <strong>чётное</strong>.</p>

      <p><strong>📌 Задание:</strong> Напиши программу, которая вычисляет и выводит на экран:
      <ul style="padding-left:20px;">
        <li>сумму чисел 25 и 18</li>
        <li>остаток от деления 47 на 5</li>
        <li>результат возведения 3 в 4-ю степень</li>
      </ul>
      <p><em>Подсказка: используй <code>print()</code> для каждого результата.</em></p>
    `,
    starterCode: ``,
    tests: [{ expected: '43\n2\n81\n' }],
  },

  {
    id: 3,
    title: 'Условный оператор (if, elif, else)',
    theory: `
      <h3>🤔 Что такое условие?</h3>
      <p>Оператор <code>if</code> позволяет выполнять разные действия в зависимости от условия. Если условие <strong>истинно</strong> (True) — выполняется один код, если <strong>ложно</strong> (False) — другой.</p>

      <h3>📐 Конструкция if-elif-else</h3>
      <p>Python позволяет проверять несколько условий подряд:</p>
      <pre style="background:#f5ede4;padding:12px;border-radius:8px;border-left:4px solid #b3815a;">
score = 85
if score >= 90:
    grade = "Отлично"
elif score >= 70:
    grade = "Хорошо"
elif score >= 50:
    grade = "Удовлетворительно"
else:
    grade = "Неудовлетворительно"
print(grade)</pre>
      <ul style="padding-left:20px;">
        <li><code>if</code> — первое условие (обязательно)</li>
        <li><code>elif</code> — дополнительные условия (можно несколько)</li>
        <li><code>else</code> — если ни одно из условий не подошло (необязательно)</li>
      </ul>
      <p>Важно: после каждого условия ставится <strong>двоеточие</strong> (<code>:</code>), а код внутри пишется с <strong>отступом</strong> (4 пробела).</p>

      <h3>🔢 Операторы сравнения</h3>
      <ul style="padding-left:20px;">
        <li><code>==</code> — равно</li>
        <li><code>!=</code> — не равно</li>
        <li><code>&gt;</code> — больше</li>
        <li><code>&lt;</code> — меньше</li>
        <li><code>&gt;=</code> — больше или равно</li>
        <li><code>&lt;=</code> — меньше или равно</li>
      </ul>

      <p><strong>📌 Задание:</strong> Напиши программу, которая проверяет число <code>num</code>.
      <ul style="padding-left:20px;">
        <li>Если число чётное — выведи <code>"Чётное"</code></li>
        <li>Если число нечётное — выведи <code>"Нечётное"</code></li>
        <li>Если число равно 0 — выведи <code>"Ноль"</code></li>
      </ul>
      <p><em>Подсказка: используй <code>if num == 0</code>, <code>elif num % 2 == 0</code>, <code>else</code>.</em></p>
    `,
    starterCode: ``,
    tests: [{ expected: 'Нечётное\n' }],
  },

  {
    id: 4,
    title: 'Циклы for',
    theory: `
      <h3>🔁 Что такое цикл for?</h3>
      <p>Цикл <code>for</code> выполняет одно и то же действие несколько раз. Он перебирает числа из заданного диапазона.</p>
      <pre style="background:#f5ede4;padding:12px;border-radius:8px;border-left:4px solid #b3815a;">
for i in range(5):
    print(i)</pre>
      <p>Этот код выведет числа от 0 до 4 (всего 5 чисел).</p>

      <h3>📐 Функция range()</h3>
      <p><code>range(старт, стоп, шаг)</code> — генерирует последовательность чисел:</p>
      <ul style="padding-left:20px;">
        <li><strong>старт</strong> — с какого числа начать (по умолчанию 0)</li>
        <li><strong>стоп</strong> — до какого числа идти (не включая это число!)</li>
        <li><strong>шаг</strong> — насколько увеличивать число (по умолчанию 1)</li>
      </ul>
      <pre style="background:#f5ede4;padding:12px;border-radius:8px;border-left:4px solid #b3815a;">
range(1, 6)    → 1, 2, 3, 4, 5   (6 не включается!)
range(1, 10, 2) → 1, 3, 5, 7, 9
range(10, 0, -2) → 10, 8, 6, 4, 2</pre>

      <p><strong>📌 Задание:</strong> Выведи на экран все <strong>чётные</strong> числа от 2 до 10 включительно. Каждое число с новой строки.</p>
      <p><em>Подсказка: используй <code>range(2, 11, 2)</code>.</em></p>
    `,
    starterCode: ``,
    tests: [{ expected: '2\n4\n6\n8\n10\n' }],
  },

  {
    id: 5,
    title: 'Списки',
    theory: `
      <h3>📋 Что такое список?</h3>
      <p>Список — это упорядоченный набор данных. В нём можно хранить числа, текст и даже другие списки. Элементы записываются в квадратных скобках через запятую.</p>
      <pre style="background:#f5ede4;padding:12px;border-radius:8px;border-left:4px solid #b3815a;">
fruits = ["яблоко", "банан", "вишня"]
numbers = [10, 20, 30]
mixed = [42, "привет", 3.14]</pre>

      <h3>🔍 Доступ к элементам по индексу</h3>
      <p>У каждого элемента в списке есть свой <strong>индекс</strong> (номер). Важно: <strong>индексация начинается с 0</strong>!</p>
      <table style="border-collapse:collapse;width:100%;margin:10px 0;">
        <tr style="background:#e8dccc;">
          <th style="border:1px solid #c9ad93;padding:8px;text-align:center;">Индекс</th>
          <th style="border:1px solid #c9ad93;padding:8px;text-align:center;">0</th>
          <th style="border:1px solid #c9ad93;padding:8px;text-align:center;">1</th>
          <th style="border:1px solid #c9ad93;padding:8px;text-align:center;">2</th>
        </tr>
        <tr>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;font-weight:600;">Значение</td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;">"яблоко"</td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;">"банан"</td>
          <td style="border:1px solid #c9ad93;padding:8px;text-align:center;">"вишня"</td>
        </tr>
      </table>
      <pre style="background:#f5ede4;padding:12px;border-radius:8px;border-left:4px solid #b3815a;">
fruits[0]  → "яблоко"   (первый элемент)
fruits[1]  → "банан"    (второй элемент)
fruits[2]  → "вишня"    (третий элемент)</pre>

      <p>Чтобы узнать длину списка (сколько элементов), используй функцию <code>len()</code>:</p>
      <pre style="background:#f5ede4;padding:12px;border-radius:8px;border-left:4px solid #b3815a;">
len(fruits)  → 3</pre>

      <p><strong>📌 Задание:</strong> Создай список <code>books</code>, в котором будут названия трёх твоих любимых книг. Выведи на экран <strong>вторую</strong> книгу из списка.</p>
      <p><em>Подсказка: индекс второй книги — 1 (потому что счёт начинается с 0).</em></p>
    `,
    starterCode: ``,
    tests: [{ expected: 'Книга2\n' }],
  }
];