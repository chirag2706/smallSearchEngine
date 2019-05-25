import React from 'react';

class VideoDetail extends React.Component{
    constructor(props){
        super(props);
    }
    render = ()=>{
            if (this.props.video === null){
                return (
                    <div></div>
                );
            }else{
                return (
                    <div>
                        <div className = "ui embed">
                            <iframe title = "youTube video player" src = {`https://www.youtube.com/embed/${this.props.video.id.videoId}`}/>
                        </div>
                        <div className = "ui segment">
                            
                            <h3 className = "ui header">
                                {this.props.video.snippet.title}
                            </h3>
                            <p>{this.props.video.snippet.description}</p>
                        </div>
                    </div>
                    
                );
            }
            
    }
}
export default VideoDetail;