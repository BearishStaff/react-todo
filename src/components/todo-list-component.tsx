import { useEffect, useState } from "react";
import Trash from "../assets/Trash";
import './style.css'

interface itemCheckList {
  id: number,
  name: string,
  checked: boolean,
}

export default function TodoListComponent() {
  const [todoList, setTodoList] = useState<itemCheckList[]>([]);
  const [runningId, setrunningId] = useState(0);

  useEffect(() => {
  }, [])

  const checkedItems = todoList.filter(item => item.checked);

  return <>
    <div className="border-2 p-5 self-center rounded-xl w-1/3 min-h-64">
      <div className="flex justify-between text-xl">
        <label className="font-bold">Todo List</label>
        <label>{itemRemaining()}</label>
      </div>
      <AddItemBar
        runningId={runningId}
        setrunningId={setrunningId}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <ul className="TodoList">
        {todoList.map((item) => {
          return <Item key={item.id} todoList={todoList} setTodoList={setTodoList} item={item} />;
        })}
      </ul>
    </div>
  </>;

  function itemRemaining() {
    return `${checkedItems.length}/${todoList.length}`;
  }
};

function AddItemBar({ runningId, setrunningId, todoList, setTodoList }: any) {
  function handleAddItem(e: any) {
    e.preventDefault();
    if (!e.target.todoInput.value) return;
    setTodoList([...todoList, { id: runningId, name: e.target.todoInput.value, checked: false }]);
    setrunningId(runningId + 1);
  }

  return (
    <form onSubmit={handleAddItem}>
      <div className="flex justify-between">
        <input name="todoInput" className="m-1 px-2 border-2 border-grey-300 w-full rounded" type="text" />
        <button className="m-1 px-3 py-2 bg-indigo-600 text-white text-sm rounded"
          type="submit">
          Add
        </button>
      </div>
    </form>

  );
};


function Item({ todoList, setTodoList, item }: { todoList: itemCheckList[], setTodoList: any, item: itemCheckList }) {
  return (
    <li className="Todo-item">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <input
            className="mx-2"
            type="checkbox"
            checked={item.checked}
            onChange={() =>
              setTodoList((todoList: itemCheckList[]) =>
                todoList.map((i) => (i.id === item.id ? { ...i, checked: !i.checked } : i))
              )
            }
          />
          <p className={item.checked ? "line-through text-gray-400" : ""}>{item.name}</p>
        </div>
        <Trash
          onClick={() => setTodoList(todoList.filter((i) => i.id !== item.id))}
        />
      </div>
    </li>
  );
}