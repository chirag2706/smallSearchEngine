import React from 'react';
import './style.css';
class VideoItem extends React.Component{
    constructor(props){
        super(props);
        }
    
    onPlayVideo = ()=>{
        this.props.onselectedVideo(this.props.video);
    }    
    
    render = ()=>{
        return (
            <div className = "video-item item" onClick = {this.onPlayVideo}>
                <img src = {this.props.video.snippet.thumbnails.medium.url} alt = "not loaded properly"/>
                <div className = "content">
                    <div className = "header">
                        {this.props.video.snippet.title}
                    </div>
                </div>
            </div>
        );
    }
}
export default VideoItem;