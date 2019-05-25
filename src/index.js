import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
class Apps extends React.Component{
    constructor(props){
        super(props);
    }
    render = ()=>{
        return (
            <App />
        );
    }
}
ReactDOM.render(<Apps />,document.querySelector("#root"));