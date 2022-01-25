import React, { useEffect, useState, useCallback } from "react"
 


const App = () => {
    const [title,setTitle] = useState("");
    const [underscore,setUnderscore] = useState(false);
    let finish = "Hi, I'm Gosha!!!";

    
    useEffect(() => {
        setInterval(() => setUnderscore(underscore=>!underscore),300)       
    },[]); 
    
   useEffect(() => {
       title.length < finish.length && setTimeout(() => setTitle(title+finish[title.length]),Math.floor(Math.random() * 175) + 175);
   },[title])
    

    
    
    
    
    return (
        <div className=" bg-black-0 h-screen w-screen flex flex-col flex-nowrap justify-self-center items-center content-center">
            <div className="basis-1/12"></div>
            <div className="border-4 rounded-lg border-lavender basis-3/4 align-center h-96 w-4/12 flex flex-col items-center content-center">
                <h1 className="text-teal text-6xl pt-4 basis-2/12 hover:animate-pulse self-start pl-4">{title+(underscore ? "|" : "")}</h1>
                <p className="text-lavender text-4xl font-bold hover:animate-spin self-start pl-4">what i do</p>
                <ul className="text-peach text-3xl basis 8/12 align-left pl-12 list-disc self-start animate-fade-1">
                    <li className="animate-fade-2">code dumb ass shit fuc</li>
                    <li className="animate-fade-3">be confused</li>
                    <li className="animate-fade-4">fly</li>
                </ul>
            </div>
            <div className=" basis-2/12">

            </div>


        </div>
        
    )
}

export default App;

