import { useState } from 'react';




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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Bai 01</h1>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="border border-gray-300 p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300 "
        >
          Submit
        </button>
        {text && <p className="mt-4 text-lg font-medium text-gray-700">{text}</p>}
      </div>
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center w-96">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Bài 02</h1>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            value={num1}
            onChange={handleChange1}
            placeholder="Nhập số thứ nhất"
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            value={num2}
            onChange={handleChange2}
            placeholder="Nhập số thứ hai"
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold transition duration-300"
          >
            Tính Tổng
          </button>
          {result !== null && (
            <p className="mt-4 text-xl font-semibold text-green-700">
              Kết quả: {result}
            </p>
          )}
        </div>
      </div>
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-green-300">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center w-96">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Bài 03 - Phép Tính</h1>
        <div className="space-y-4">
          <input
            type="text"
            value={num1}
            onChange={handleChangeNum1}
            placeholder="Nhập số thứ nhất"
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            value={num2}
            onChange={handleChangeNum2}
            placeholder="Nhập số thứ hai"
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <div className="flex justify-center gap-4">
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                value="+"
                checked={operation === '+'}
                onChange={handleChangeOperation}
              />
              <span>Cộng</span>
            </label>

            <label className="flex items-center space-x-1">
              <input
                type="radio"
                value="-"
                checked={operation === '-'}
                onChange={handleChangeOperation}
              />
              <span>Trừ</span>
            </label>

            <label className="flex items-center space-x-1">
              <input
                type="radio"
                value="*"
                checked={operation === '*'}
                onChange={handleChangeOperation}
              />
              <span>Nhân</span>
            </label>

            <label className="flex items-center space-x-1">
              <input
                type="radio"
                value="/"
                checked={operation === '/'}
                onChange={handleChangeOperation}
              />
              <span>Chia</span>
            </label>
          </div>

          <button
            onClick={handleCalculate}
            className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg text-lg font-semibold transition duration-300 w-full"
          >
            Tính Toán
          </button>

          {result !== null && (
            <p className="mt-4 text-xl font-semibold text-blue-700">
              Kết quả: {result}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}





function TodoItem({ item, onRemove }) {
  return (
    <div className="flex justify-between items-center bg-green-100 p-3 my-2 rounded-lg shadow">
      <span className="text-gray-800 font-medium">{item}</span>
      <button onClick={onRemove} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg">Remove</button>
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
    <div className="max-w-lg mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">To-Do List</h1>
      <div className="flex space-x-3 mb-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border border-gray-300 p-3 flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter a task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg shadow"
        >
          Add
        </button>
      </div>
      <div>
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks added yet.</p>
        ) : (
          tasks.map((item, index) => (
            <TodoItem key={index} item={item} onRemove={() => removeTask(index)} />
          ))
        )}
      </div>
    </div>
  );
}
function TabButton() {
  const obj = {
    JSX: "JSX là một phần mở rộng của ngôn ngữ JavaScript, nó cho phép chúng ta viết HTML trong JavaScript.",
    Props: "Props là một đối tượng chứa các thuộc tính của một component, props giúp chúng ta truyền dữ liệu từ cha component sang con component.",
    State: "State là một đối tượng chứa các thuộc tính của một component, khi state thay đổi, component sẽ render lại."
  };

  const [content, setContent] = useState('');

  function handleClick(key) {
    setContent(obj[key]);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex justify-center gap-x-4 mb-4">
        <button
          onClick={() => handleClick('JSX')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          JSX
        </button>

        <button
          onClick={() => handleClick('Props')}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Props
        </button>

        <button
          onClick={() => handleClick('State')}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          State
        </button>
      </div>

      {content && (
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300 w-96 text-center">
          <p className="text-gray-700">{content}</p>
        </div>
      )}
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
