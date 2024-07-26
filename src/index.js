import React from "react";
import ReactDOM from "react-dom";
import './index.css';

//parent component
function BookList() {
    return (
        <>
            <Book title="Nanna kathe" author="Pavan" age="30" />
            <Book title="Power of subconcious mind" author="Kamal" age="25" />
            <Book title="Perfection"><p>This book is awesome</p></Book>
        </>
    );
}

//child component
function Book({ title, author, age, children }) {

    return (
        <>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <h2>{age}</h2>
            {children}
        </>
    )
}

ReactDOM.render(<BookList />, document.getElementById('root'));
