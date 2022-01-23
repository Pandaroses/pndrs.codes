import React, { useEffect, useState } from "react"
 


const App = () => {
    const [title,setTitle] = useState("");
    const [underscore,setUnderscore] = useState(false);
    setInterval(() => setUnderscore(!underscore),400)
    let finish = "Hi, I'm Gosha";
    
    const addletter = () => setTimeout(() => {
        setTitle(title =>title+finish[title.length]);
        
        title !== finish && addletter(); 
        
    }, 900);
    
    useEffect(() => {
        addletter();
        
    }); 
    
   
    

    
    
    
    
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

