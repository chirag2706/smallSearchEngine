import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state  ={term:''};
    }
    onTextChange = (event)=>{
        this.setState({term:event.target.value});
        // console.log(event.target.value);
    }
    onSubmitChange = (event)=>{
        event.preventDefault();
        this.props.onTermSubmit(this.state.term);
        // this.setState({flag:true});
    }
    
    render = ()=>{
        return (
            <div className = "search-bar ui segment">
                <form className  = "ui form" onSubmit = {this.onSubmitChange}>
                    <div className = "field">
                        <label>Video Search</label>
                        <input type = "text" onChange ={this.onTextChange} value = {this.state.term} />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;
