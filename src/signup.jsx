import React from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import images from './assets/brown.jpg';
import background from './assets/seven.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function Signup(){
  const Navigate = useNavigate();

    return (
        <>
  
     <div className="relative flex justify-center items-center h-screen w-screen">
        <div className="absolute">  
          
            <img src={background} className="h-screen w-screen relative" alt=""/>
        </div>
   

        <div className="absolute w-[25%] gap-10 h-[80%] flex flex-col justify-center items-center border-2 border-slate-300 p-4 backdrop-blur-md  rounded-xl">
             <h1 className="text-5xl font-bold text-white font-mono">REGISTER</h1>
            <p className="text-1xl text-white text-xl font-mono font-bold">ENTER THE REQUIRED INFORMATION</p>
            
            <form action="" className="space-y-6 text-black w-[80%]">
 
                <div className="w-full">
                    <div>
                       
                    </div >
                    <input type="text" placeholder= "Provider's Name" className="w-full bg-white p-4 rounded-full"/>
                </div>
                <div className="w-full">
                    <div>
                       
                    </div>
                    <input type="text" placeholder="Location" className="w-full bg-white p-4 rounded-full"/>
                </div>

                <div className="w-full">
                    <div>
                    {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                    </div>
                    <input type="email" placeholder="Email Address" className="w-full bg-white p-4 rounded-full"/>
                </div>
                      
                <div className="w-full">
                    <div>
                       
                    </div>
                    <input type="password" placeholder="Password" className="w-full bg-white p-4 rounded-full"/>
                </div>
            </form>
            <button className="text-slate-200 p-4 rounded-full font-semibold backdrop-blur-md border-slate-300 border-2 text-2xl px-16 hover:text-3xl font-serif" onClick={()=>{Navigate("/provdet")}}>Sign In</button>
            <div className="flex justify-center items-center h-20">
                <h1 className="text-slate-200 text-lg tracking-wide text-white font-bold">Already Have Account? </h1>
                <button className=" text-cyan-700 text-xl font-semibold"onClick={()=>{Navigate("/prov")}}>Login</button>
            </div>
 
         </div>
         
     </div>
     
       </>
    )
}