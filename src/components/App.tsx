import React, { useEffect, useState, useCallback } from "react"

 


const App = () => {
    const [title,setTitle] = useState("");
    const [underscore,setUnderscore] = useState(false);
    const [flip,setFlip] = useState(false);
    //flip: true means in flipping, false means not in flipping with delay of 2s
    const [side,setSide] = useState(true);
    // false is up true is down
    let finish = "Hi, I'm Gosher!!!";

    
    useEffect(() => {
        setInterval(() => setUnderscore(underscore=>!underscore),300)       
    },[]); 
    
   useEffect(() => {
       title.length < finish.length && setTimeout(() => setTitle(title+finish[title.length]),Math.floor(Math.random() * 175) + 175);
   },[title])
    

    
    
    
    
    return (
        <div className=" bg-polar-0 h-screen w-screen flex flex-col flex-nowrap justify-self-center items-center content-center  ">
            <div className="basis-1/12"></div>
            <div className={"border-4 rounded-lg border-frost-1 basis-3/4 align-center h-96 w-4/12 flex flex-col items-center content-center " + (flip === true? side === true? "flip-horizontal-bottom-reverse" : "flip-horizontal-bottom" : side === true? "stayup" : "staydown")} onClick={() => {setFlip(flip => !flip);  setTimeout(() => {setFlip(flip =>!flip)},700);  setSide(side => !side)}}>
                <h1 className="text-snow-0 text-6xl pt-4 basis-2/12 hover:animate-pulse self-start pl-4">{title+(underscore ? "|" : "")}</h1>
                <p className="text-snow-0 text-4xl font-bold hover:animate-spin self-start pl-4">what i do</p>
                <ul className="text-snow-0 text-3xl align-left pl-12 list-disc self-start">
                    <li className="animate-fade-1 animate-delay-1">code very dumb stuff</li>
                    <li className="animate-fade-1 animate-delay-3">be confused</li>
                    <li className="animate-fade-1 animate-delay-2">fly</li>
                </ul>
                <p className="text-snow-0 text-4xl font-bold self-start pl-4">My Skills</p>
                <ul className="text-snow-0 text-2xl  align-left pl-12 list-disc self-start">
                    <li className="fab fa-react"> React</li>
                    <li className="fab fa-rust">Rust</li>
                    <li className="fab fa-linux">Linux</li>
                    <li className="fas fa-file-code">Databases</li>
                </ul>
                <h1 className="text-snow-0 text-left align-left items-left">ps. you should press the box</h1>
            </div>
            <div className=" basis-2/12">

            </div>


        </div>
        
    )
}

export default App;

