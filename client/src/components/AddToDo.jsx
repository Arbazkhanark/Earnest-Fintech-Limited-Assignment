import axios from "axios";
import { useState } from "react";
import { Toaster, toast } from "sonner";

const AddToDo = ({ show, setShow ,tasks,setTasks }) => {
    const [taskDetails,setTaskDetails]=useState({
        title:"", description:"", completed:0 
    })

    async function handleSubmit(){
        const res=await axios.post("http://localhost:4000/addTask",taskDetails);
        console.log(res)
        if(res.data.success){
            const res=await axios.get("http://localhost:4000/tasks");
            if(res.data.success){
                setTasks(res.data.data)
            }
            toast.success("Task Added")
        }
    }
  return (
    <div
      className={`${
        show ? "block" : "hidden"
      } inset-0 text-white fixed bg-opacity-30 backdrop-blur-sm bg-black`}
    >
    <Toaster />
      <div className="border border-gray-500 rounded-lg transition-shadow shadow-gray-200 w-[30%] p-2 px-6 m-auto my-40">
        <button className="float-right" onClick={() => setShow(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x-circle"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
        </button>
        <h1 className="text-xl text-center my-2">Add Task</h1>
        <input
          type="text"
          onChange={(e)=>setTaskDetails({...taskDetails,title:e.target.value})}
          className="block w-full rounded-md outline-none py-1.5 px-3 shadow-sm ring-gray-300 mb-2 sm:text-sm sm:leading-6 text-teal-500 border bg-black border-teal-500"
          placeholder="Enter Title"
        />
        <input
          type="text"
          onChange={(e)=>setTaskDetails({...taskDetails,description:e.target.value})}
          className="block h-32 w-full rounded-md outline-none py-1.5 px-3 shadow-sm ring-gray-300  sm:text-sm sm:leading-6 border text-teal-500 bg-black border-teal-500 mb-3"
          placeholder="Enter Description"
        />
        <div className="flex justify-around">
            <div className="mx-2">
                    <label>
                        <input
                            type="radio"
                            name="status"
                            value={1}
                            // checked={taskDetails.completed}
                            onChange={(e)=>setTaskDetails({...taskDetails,completed:e.target.value})}
                        />
                        Complete
                    </label>
            </div>
                <div className="mx-2">
                        <label>
                            <input
                                type="radio"
                                name="status"
                                value={0}
                                className="mx-2"
                                // checked={taskDetails.completed}
                                onChange={(e)=>setTaskDetails({...taskDetails,completed:e.target.value})}
                            />
                            Incomplete
                        </label>
                </div>

        </div>
        <button
          type="button"
          className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm mb-2 mt-4  leading-6 shadow-sm bg-teal-500 text-white`}
          onClick={handleSubmit}
        >
          ADD TASK
        </button>
      </div>
    </div>
  );
};

export default AddToDo;
