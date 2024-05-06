import React from "react";
import { useState } from "react"

function Filter({filterData,category,setCategory}){
    
    //yha se hmne category ki value set kr di, jis bhi button pr click hoga uska title hi uski category hogi
    function filterHandler(title){
           setCategory(title)
    }
    
    

    return (
        <div className="all_filters" >
           { 
            filterData.map((data) => (
                <button
                 className="filter_btn" key={data.id} onClick={() => filterHandler(data.title)} >{data.title}
                 </button>
                )
            )}
        </div>
    )

}

// {`text-lg px-2 py-1 rounded-md font-medium text-white
//                 bg-black hover:bg-opacity-50 border-2 transition-all duration-300 ${category === data.title ? "bg-opacity-60 border-white": 
//                  "bg-opacity-40 border-transparent"}`} 

export default Filter