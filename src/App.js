
import React, { useState, useEffect } from 'react'
import "./App.css";
import "./components/view.css";
import { View } from './components/View';


const getDatafromLS = () => {
  const data = localStorage.getItem('tasks');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

export const App = () => {

  const [tasks, settasks] = useState(getDatafromLS());

  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  const [date, setdate] = useState('');

  const handleAddtaskSubmit = (e) => {
    e.preventDefault();
    let task = {
      title,
      description,
      date
    }
    settasks([...tasks, task]);
    setTitle('');
    setdescription('');
    setdate('');
  }

  const deletetask = (date) => {
    const filteredtasks = tasks.filter((element, index) => {
      return element.date !== date
    })
    settasks(filteredtasks);
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  return (
    <>
      <div className="box">
        <div className="row">
          <div className="col-lg-8 col-md-7 col-sm-10 col-12 mx-auto">
            <div className="card crd">

              <h3 className="heading">Task Manager</h3>
              <form autoComplete="off"
                onSubmit={handleAddtaskSubmit}>
                <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} value={title} required placeholder="Task Title"/> <br />
                <textarea id="description" onChange={(e) => setdescription(e.target.value)} value={description} rows="4" cols="50" required placeholder="Description" /> <br />
                <input type="date" id="date" onChange={(e) => setdate(e.target.value)} value={date} required /> <br />
                <div className="btn">
                  <button type="submit" className="sub" >Add Task</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

      {tasks.length > 0 && <>

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 col-12 mx-auto">
              <h4 className="tasks">Your Tasks</h4>

              <View tasks={tasks} deletetask={deletetask} />

            </div>
            
          </div>

        </div>
        <button className='btn btn-danger btn-md remove'
          onClick={() => settasks([])}>Remove All</button>

      </>
      }

    </>
  );
}

export default App