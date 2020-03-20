import React, { useState } from "react";

function App() {
  // create a new constant and invoke useState to save and change listItem. Define inital value as empty string since it is blank to begin with.
  const [listItem, setListItem] = useState("");
  // after creating handle function, check dev tools to ensure state is being tracked
  // create new const to hold array of list Items when the add button is clicked. Starting value is an empty array.
  const [addItems, setAddItems] = useState([]);

  function handleListItem(event) {
    //create a constant to hold new value of input
    const newListItem = event.target.value;
    setListItem(newListItem);
  }

  function addListItem() {
    // get hold of previous array
    setAddItems(prevListItems => {
      return [...prevListItems, listItem];
    });
    //clear input field for next item
    setListItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        {/* add value property to keep list value in line with listItem and tie together */}
        {/* add onChange property with handle function */}
        <input onChange={handleListItem} type="text" value={listItem} />
        <button onClick={addListItem}>
          {/* call setAddItems when button is pressed. Create function for reusability */}
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {addItems.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
