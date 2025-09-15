import React, { useState } from 'react'

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdate = () => {
    // if (!todo.trim()) return;

    if (editId) {
      const updatedTodos = todos.map((item) =>
        item.id === editId ? { ...item, text: todo } : item
      );
      setTodos(updatedTodos);
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: todo }]);
    }
    setTodo('');
  };

  const DeleteTodo =(id)=>{
    const newTodos = todos.filter((todo)=> todo.id !==id);
    setTodos(newTodos);
  }
  


  return (
    
    <div className="app"> 
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>

      <div className="input">
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
          placeholder="Add item..."
        />
        <button onClick={handleAddOrUpdate}>
          {editId ? 'Save' : 'Add'}
        </button>  
      </div>

      <div className="todos">
        {todos.map((value) => (
          <div className="todo" key={value.id}>
            <div className="flex">
              <p>{value.text}</p>
              <div>
                
                <button onClick={()=> DeleteTodo(value.id)}>Delete</button>
                <button>remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
