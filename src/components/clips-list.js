import React from 'react';
import { Carousel } from 'antd';
import ClipEmbed from './clip-embed';

export default function ClipsList({ clips }) {
    return (
        <Carousel arrows>
            {clips.map((clip) => (
                <ClipEmbed key={clip.id} id={clip.id} />
            ))}
        </Carousel>


    );
}