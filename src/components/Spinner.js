import React from "react";
import "./Spinner.css"

function Spinner(){
     return (
        <div className="spinner_content">
            <div className="spinner"></div>
            <p>Loading....</p>
        </div>
     )
}

export default Spinner;