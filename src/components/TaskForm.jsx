import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'


function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)


  const heandleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={heandleSubmit} className="bg-slate-800 p-10 mb-4 flex flex-col items-center mb-2 rounded-[8px]">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <input
        placeholder="escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="bg-slate-300 p-3 w-full mb-2 rounded-[8px]"
        autoFocus
      />
      <textarea
        placeholder="Escribe la descripcion de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        className="bg-slate-300 p-3 w-full mb-2 rounded-[8px]"
        value={description}
      ></textarea>
      <button className="bg-indigo-500 px-3 py-1 text-white rounded-md" >Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
