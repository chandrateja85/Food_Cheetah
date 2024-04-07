import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";

const Page =()=>(
    <div>
        <Header/>
        <Body/>
    </div>

);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page/>);
