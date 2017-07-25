import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;

//Function based component is ok to call props
//Class based would be necessary to call this.props