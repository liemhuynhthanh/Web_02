import { useState } from 'react';
import './App.css';
function Bai01() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleClick() {
    setText(name);
  }

  return (
    <div>
      <h1>Bài 01</h1>
      <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
      <button onClick={handleClick}>Submit</button>
      {text && <p>{text}</p>}
    </div>
  );
}

function Bai02() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  function handleChange1(e) {
    setNum1(e.target.value);
  }

  function handleChange2(e) {
    setNum2(e.target.value);
  }

  function handleClick() {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(isNaN(sum) ? 'Invalid input' : sum);
  }

  return (
    <div>
      <h1>Bài 02 - Tính Tổng</h1>
      <input type="text" value={num1} onChange={handleChange1} placeholder="Nhập số thứ nhất" />
      <input type="text" value={num2} onChange={handleChange2} placeholder="Nhập số thứ hai" />
      <button onClick={handleClick}>Tính Tổng</button>
      {result !== null && <p>Kết quả: {result}</p>}
    </div>
  );
}

function Bai03() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);

  function handleChangeNum1(e) {
    setNum1(e.target.value);
  }

  function handleChangeNum2(e) {
    setNum2(e.target.value);
  }

  function handleChangeOperation(e) {
    setOperation(e.target.value);
  }

  function handleCalculate() {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Invalid input');
      return;
    }

    let res;
    switch (operation) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        res = n2 !== 0 ? n1 / n2 : 'Không thể chia cho 0';
        break;
      default:
        res = 'Phép toán không hợp lệ';
    }
    setResult(res);
  }

  return (
    <div>
      <h1>Bài 03 - Phép Tính</h1>
      <input type="text" value={num1} onChange={handleChangeNum1} placeholder="Nhập số thứ nhất" />
      <input type="text" value={num2} onChange={handleChangeNum2} placeholder="Nhập số thứ hai" />

      <div>
        <label>
          <input type="radio" value="+" checked={operation === '+'} onChange={handleChangeOperation} />
          Cộng
        </label>
        <label>
          <input type="radio" value="-" checked={operation === '-'} onChange={handleChangeOperation} />
          Trừ
        </label>
        <label>
          <input type="radio" value="*" checked={operation === '*'} onChange={handleChangeOperation} />
          Nhân
        </label>
        <label>
          <input type="radio" value="/" checked={operation === '/'} onChange={handleChangeOperation} />
          Chia
        </label>
      </div>

      <button onClick={handleCalculate}>Tính Toán</button>

      {result !== null && <p>Kết quả: {result}</p>}
    </div>
  );
}

function TodoItem({ item, onRemove }) {
  return (
    <div>
      <span>{item}</span>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

function TodoApp() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter a task" />
      <button onClick={addTask}>Add</button>

      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        tasks.map((item, index) => <TodoItem key={index} item={item} onRemove={() => removeTask(index)} />)
      )}
    </div>
  );
}

function TabButton() {
  const obj = {
    JSX: 'JSX là một phần mở rộng của ngôn ngữ JavaScript, nó cho phép chúng ta viết HTML trong JavaScript.',
    Props: 'Props là một đối tượng chứa các thuộc tính của một component, props giúp chúng ta truyền dữ liệu từ cha component sang con component.',
    State: 'State là một đối tượng chứa các thuộc tính của một component, khi state thay đổi, component sẽ render lại.'
  };

  const [content, setContent] = useState('');

  function handleClick(key) {
    setContent(obj[key]);
  }

  return (
    <div>
      <button onClick={() => handleClick('JSX')}>JSX</button>
      <button onClick={() => handleClick('Props')}>Props</button>
      <button onClick={() => handleClick('State')}>State</button>

      {content && <p>{content}</p>}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <TodoApp />
      <Bai01 />
      <Bai02 />
      <Bai03 />
      <TabButton />
    </div>
  );
}
