import React, { useEffect, useState, useCallback } from "react"
 


const App = () => {
    const [title,setTitle] = useState("");
    const [underscore,setUnderscore] = useState(false);
    let finish = "Hi, I'm Gosha";

    
    useEffect(() => {
        setInterval(() => setUnderscore(underscore=>!underscore),400)       
    },[]); 
    
   useEffect(() => {
       title.length < finish.length && setTimeout(() => setTitle(title+finish[title.length]),300);
   },[title])
    

    
    
    
    
    return (
        <div className=" bg-black-0 h-screen w-screen flex flex-col flex-nowrap justify-self-center items-center content-center">
            <div className="basis-1/12">
            </div>
            <div className="border-2 rounded-lg border-lavender basis-3/4 align-center  text-center h-96 w-4/12 flex flex-col items-center content-center">
                <h1 className="text-teal text-6xl pt-4 basis-4/12 ">{title+(underscore ? "_" : "")}</h1>
                <h2 className="text-teal text-3xl pt-4 basis-8/12"></h2>
            </div>
            <div className=" basis-2/12">

            </div>


        </div>
        
    )
}

export default App;

