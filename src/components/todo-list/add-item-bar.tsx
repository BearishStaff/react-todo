function AddItem() {
  return (<div className="flex justify-between">
    <Bar />
    <Add />
  </div>);

  function Add() {
    return <button className="m-1 px-3 py-2 bg-indigo-600 text-white text-sm rounded">Add</button>
  }

  function Bar() {
    return <input className="m-1 px-2 border-2 border-grey-300 w-full rounded" type="text" />
  }
};

export default AddItem;