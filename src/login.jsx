import React from "react";
import  "./login.css";
import { useNavigate } from "react-router-dom";
import background from './assets/background.png';


export default function Login(){
  const Navigate = useNavigate();

    return(
        <div className="relative">
            <div className="absolute">
                <div className="h-screen w-screen  flex flex-col justify-center items-center">
                    <div className="h-[65%] flex flex-col justify-center items-center my-1">
                        <div className="m-4">
                            <h1 className="text-slate-200 font-semibold text-3xl tracking-wide my-10 font-serif ">FOOD'S GOOD</h1>
                        </div>
                        <h1 className="text-slate-200 font-bold text-7xl tracking-wide m-6 font-serif">SAVE FOOD ,</h1>
                        <h1 className="text-slate-200 font-bold text-7xl tracking-wide m-6 font-serif">CHARITY MATTERS </h1>
                    </div>
                    <div className="h-[35%] w-screen flex justify-center items-center">
                        <div className="h-full w-[50%] flex flex-col justify-center items-center">
                            <button className="text-slate-200 p-4 rounded-full font-semibold backdrop-blur-md border-slate-300 border-2 text-2xl px-16 hover:text-3xl font-serif" onClick={()=>{Navigate("/signup")}}> PROVIDER</button>
                            <div className="w-full h-[20%]">

                            </div>
                        </div>
                        <div className="h-full w-[50%] flex  flex-col justify-center items-center">
                            <button className=" text-slate-200 p-4 rounded-full font-semibold backdrop-blur-md border-slate-300 border-2 text-2xl px-16 hover:text-3xl font-serif" onClick={()=>{Navigate("/organization")}}>ORGANIZATION</button>
                            <div className="w-full h-[20%]">

                            </div>
                        </div>
                        
                        
                    </div>
                    
                </div>
            </div>
            <div>
                <img src={background} className="h-screen w-screen "></img>
            </div>
        
        </div>

    )


}