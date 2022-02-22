import React from 'react'
import "./view.css";

export const View = ({ tasks, deletetask }) => {

    function truncateString(str) {
        return str.length >= 23 ? str.substring(0, 22) + "..." : str;
      }

    return tasks.map((task,key) => (
        <>

                        <div className="tsk" >
                            <p className="one">{key+1}. {truncateString(task.title)}
                                <div className="btns">
                                    <button className="btn1" onClick={() => deletetask(task.date)}>Completed</button>
                                    <button className="btn2" onClick={() => deletetask(task.date)}>Delete</button>
                                </div>
                            </p>
                        </div>


        </>
    ))
}
