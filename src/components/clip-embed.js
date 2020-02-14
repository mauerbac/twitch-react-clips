import React from 'react';

export default function ClipEmbed({ id }) {
    return (
        <iframe src={`https://clips.twitch.tv/embed?clip=${encodeURIComponent(id)}`} frameBorder="0" allowFullScreen height="378" width="620" title={id} />  
    );
}