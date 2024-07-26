import React from "react";
import ReactDOM from "react-dom";
import './index.css';

function Greeting(){

  const title = "Pavan";

  return(
    <>
    <Helloworld/>
    <Message />
    <h2>{title}</h2>  
    </>
  )
}

function Helloworld() {
  return (
    <>
      <h1 className="heading">Hello world</h1>
    </>
  )
}

function Message(){
  return(
    <>
    <p style={{color:'red', fontSize:'2rem'}}>Im a react developer</p>
    </>
  )
}



ReactDOM.render(<Greeting />, document.getElementById('root'));
