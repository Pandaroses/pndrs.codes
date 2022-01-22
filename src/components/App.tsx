import React, { useState } from "react"
 


const App = () => {
    const [title,setTitle] = useState("");
    const [underscore,setUnderscore] = useState(false);
    setInterval(() => setUnderscore(!underscore),40)
    let finish = "Hi, I'm Gosha";
    
    const addletter = setTimeout(() => {
        setTitle(finish[title.length]);
        
    }, Math.floor(Math.random()*175)+175)   ;
    
    
    
    return (
        <div className=" bg-black-0 h-screen w-screen flex flex-col flex-nowrap justify-self-center items-center content-center">
            <div className="basis-1/12">

            </div>
            <div className="border-2 rounded-lg border-lavender basis-3/4 align-center  text-center h-96 w-4/12">
                <h1 className="text-teal text-6xl pt-4 ">{title+(underscore ? "_" : "")}</h1>
            </div>
            <div className=" basis-2/12">

            </div>


        </div>
        
    )
}

export default App;