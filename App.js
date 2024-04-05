import React from "react";
import ReactDOM from "react-dom";


const Message = ()=>(

    <div>
        <center><h2> React Food Ordering App </h2></center>
        <center><h1>Food Cheetah 🐯  </h1></center>
    </div>

);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Message/>);

