import React from "react";
import { useNavigate } from "react-router-dom";
import my from './assets/image.jpg';

export default function Organization(){
    const Navigate = useNavigate();
    return(
        <>
        <div className="relative flex justify-center items-center h-screen w-screen">
        <div className="absolute">
        <img src={my} className="h-screen w-screen relative" alt=""/>
         
        </div>
   

        <div className="absolute w-[25%] gap-5 h-[90%] flex flex-col justify-center items-center border-2 border-slate-300 p-4 backdrop-blur-md  rounded-xl">
             <h1 className="text-4xl font-bold text-white font-mono">ORGANIZATION DETAILS</h1>
            <p className="text-1xl text-white text-xl font-mono">ENTER THE REQUIRED INFORMATION</p>
            
            <form action="" className="space-y-6 text-black w-[80%]">
 
                <div className="w-full">
                    <div>
                       
                    </div >
                    <input  type="text" placeholder= "Organization's Name" className="w-full bg-white p-4 rounded-full text-black"/>
                </div>
                <div className="w-full">
                    <div>
                       
                    </div>
                    <input type="text" placeholder="Location" className="w-full bg-white p-4 rounded-full"/>
                </div>
                {/* <div className="w-full">
                    <div>
                       
                    </div>
                    <input type="text" placeholder="No. Of Peoples in Organization" className="w-full bg-white p-4 rounded-full"/>
                </div> */}

                {/* <div className="w-full">
                    <div>

                    </div>
                <select className="w-full bg-white p-4 rounded-full">
                   <option Type ="text">Type of Food Needed</option>
                   <option>Raw Food</option>
                   <option>Ready Made</option>
                   <option>Raw And Ready Made Both</option>
                </select>
                </div> */}
                

                <div className="w-full">
                    <div>
                  
                    </div>
                    <input type="email" placeholder="Email Address" className="w-full bg-white p-4 rounded-full"/>
                </div>
                      
                <div className="w-full">
                    <div>
                       
                    </div>
                    <input type="password" placeholder="Password" className="w-full bg-white p-4 rounded-full"/>
                </div>
            </form>
            <button className="text-slate-200 p-4 rounded-full font-semibold backdrop-blur-md border-slate-300 border-2 text-2xl px-16 hover:text-3xl font-serif"onClick={()=>{Navigate("/orgdet")}}>Sign In</button>
            <div className="flex justify-center items-center h-20">
                <h1 className="text-slate-200 text-lg tracking-wide">Already Have Account? </h1>
                <button className=" text-cyan-700 text-xl font-semibold"onClick={()=>{Navigate("/org")}}>Login</button>
            </div>
 
         </div>
         
     </div>
     
        </>
    )
}
