import AddItem from "./todo-list/add-item-bar";
import ItemList from "./todo-list/item-list";

const TodoListComponent = () => {
  let todoList = [
    'Practice TDD',
    'Practice React',
    'Practice TDD',
    'Practice React'
  ]

  let checkedItems = [
    'Practice TDD'
  ]

  return <>
    <div className="border-2 p-5 self-center rounded-xl w-1/3 min-h-64">
      <div className="flex justify-between text-xl">
        <label className="font-bold">Todo List</label>
        <label>{itemRemaining()}</label>
      </div>
      <AddItem />
      <ItemList items={todoList} />
    </div>
  </>;

  function itemRemaining() {
    return `${checkedItems.length}/${todoList.length}`;
  }
};


export default TodoListComponent;