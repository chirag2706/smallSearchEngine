import React from 'react';
import VideoItem from './videoItem.js';
class VideoList extends React.Component{
    constructor(props){
        super(props);
    }
    render = ()=>{
        var renderedItems = this.props.videos.map((video)=>{
                if (video.id.video){
                    return <VideoItem onselectedVideo = {this.props.onselectedVideo} video = {video} key = {video.id.videoId}/>;
                }
                else{
                    return <VideoItem onselectedVideo = {this.props.onselectedVideo} video = {video} />;
                }
        });
        return (
            <div className = "ui relaxed divided list" >
                {renderedItems}
            </div>
        );
    }
}
export default VideoList;