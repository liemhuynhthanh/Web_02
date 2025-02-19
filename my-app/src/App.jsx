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



function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = (operator) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      alert('Vui lòng nhập số hợp lệ');
      return;
    }

    let calculation;
    switch (operator) {
      case '+':
        calculation = number1 + number2;
        break;
      case '-':
        calculation = number1 - number2;
        break;
      case '*':
        calculation = number1 * number2;
        break;
      case '/':
        if (number2 === 0) {
          alert('Không thể chia cho 0');
          return;
        }
        calculation = number1 / number2;
        break;
      default:
        return;
    }

    setResult(calculation);
  };

  return (
    <div className="p-4 space-y-4 bg-gray-100 rounded-lg shadow-md max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold">Calculator</h2>
      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Nhập số thứ nhất"
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Nhập số thứ hai"
        className="w-full p-2 border rounded"
      />
      <div className="flex space-x-2">
        <button onClick={() => handleCalculate('+')} className="p-2 bg-blue-500 text-white rounded">+</button>
        <button onClick={() => handleCalculate('-')} className="p-2 bg-blue-500 text-white rounded">-</button>
        <button onClick={() => handleCalculate('*')} className="p-2 bg-blue-500 text-white rounded">*</button>
        <button onClick={() => handleCalculate('/')} className="p-2 bg-blue-500 text-white rounded">/</button>
      </div>
      {result !== null && <div className="text-lg font-semibold">Kết quả: {result}</div>}
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

export default function App() {
  return (
    <div>
      <Calculator />
      <TodoApp />
      <Bai01 />
      <Bai02 />
    </div>
  );
}
