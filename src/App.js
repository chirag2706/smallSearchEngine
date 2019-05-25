import React from 'react';
import SearchBar from './searchBar.js';
import Youtube from './youtube.js';
import Videolist from './videoList.js';
import VideoDetail from './videoDetail.js';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { videos: [],selectedVideo:null};
    }

    componentDidMount(){
        this.onFormSubmit('cars');
    }

    onFormSubmit = async (term)=>{
        var response  = await Youtube.get('/search',{
            params:{
                q:term
            }
        });
        this.setState({videos:response.data.items,
            selectedVideo:response.data.items[0]
        });
    };
    onselectedVideo = (video)=>{
        this.setState({selectedVideo:video})
    }
    render = ()=>{
        return (
            <div className = "ui container">
                <SearchBar onTermSubmit = {this.onFormSubmit} />
                <div className = "ui grid">
                    <div className = "ui row">
                        <div className = "eleven wide column">
                            <VideoDetail video = {this.state.selectedVideo}/>
                        </div>
                        <div className = "five wide column">
                            <Videolist onselectedVideo = {this.onselectedVideo} videos = {this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
export default App;