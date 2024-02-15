import React from "react";
import { useNavigate } from "react-router-dom";
import back from './assets/five.jpg'

const Provdet=()=>{
    const Navigate = useNavigate();
    return(
        <>

<body>
<div class="bg-[#7a3e48] min-h-screen flex items-center justify-center p-4">
  <div class="max-w-4xl w-full grid grid-cols-2 gap-3">   
    <div class="bg-[#a7555c] p-8 rounded-3xl shadow-xl relative z-10 col-span-1">
      <header class="flex justify-between items-center mb-10">
        <div class="flex items-center">
          {/* <img src="/path-to-your-clipboard-icon.png" alt="Clipboard Icon" class="w-6 h-6 mr-2"> */}
          <h2 class="text-2xl font-bold text-yellow-300 uppercase ml-4">Fill Details For Donation</h2>
        </div>
        {/* <img src="/path-to-your-checklist-icon.png" alt="Checklist Icon" class="w-6 h-6"> */}
      </header>
      <form className="flex flex-col gap-1">
        <div class="">
          <label for="typeOfFood" class="block text-xl font-semibold mb-2 text-white">Type of Food</label>
          <select id="typeOfFood" class="w-full px-4 py-3 bg-white rounded-full focus:outline-none">
            <option value="">Select type</option>
            <option value="vegetarian">Raw</option>
            <option value="non-vegetarian">Ready Made</option> 
            <option value="vegan">Both</option>
           
          </select>
        </div>

        <div class=" ">
          <label for="quantityOfFood" class="block text-xl font-semibold mb-2 text-white">Name of Food</label>
          <input type="text" id="quantityOfFood" class="w-full px-4 py-3 bg-white rounded-full focus:outline-none" placeholder="Enter"/>
        </div>

        <div class=" ">
          <label for="quantityOfFood" class="block text-xl font-semibold mb-2 text-white">Quantity of Food</label>
          <input type="text" id="quantityOfFood" class="w-full px-4 py-3 bg-white rounded-full focus:outline-none" placeholder="Enter"/>
        </div>

        
        <div class=" ">
          <label for="pickupTimeSlot" class="block text-xl font-semibold mb-2 text-white">Pick Up Time Slot</label>
          <select id="pickupTimeSlot" class="w-full px-4 py-3 bg-white rounded-full focus:outline-none">
            <option value="">Select time slot</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
           
          </select>
        </div>
        <div class=" ">
          <label for="deliveryAddress" class="block text-xl font-semibold mb-2 text-white">Manifacture Date</label>
          <input type="date" id="deliveryAddress" class="w-full px-4 py-3 bg-white rounded-full focus:outline-none" placeholder="Enter"/>
        </div>
        <div class=" ">
          <label for="mobileNumber" class="block text-xl font-semibold mb-2 text-white">Expiry Date</label>
          <input type="date" id="mobileNumber" class="w-full px-4 py-3 bg-white rounded-full focus:outline-none" placeholder="Enter"/>
        </div>

        <div className="h-full w-[50%] flex flex-col justify-center items-center m-9">
           <button className="text-slate-200 p-4 rounded-full font-semibold backdrop-blur-md border-slate-300 border-4 text-2xl px-16 hover:text-3xl font-serif ml-20 ">Enter</button>
        </div>
      
      </form>   
    </div>
   
    <div class="justify-end items-center">
        <img src={back} alt="" className="h-auto"/>
    </div>
  </div>
</div>
{/* <script src="/path-to-your-tailwindcss-config.js"></script> */}
</body>
        </>
    )
}
export default Provdet;