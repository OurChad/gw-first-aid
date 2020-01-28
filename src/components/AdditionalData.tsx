import React from 'react';
import { QuestionAdditionalData } from '../types';

type Props = {
    data: QuestionAdditionalData;
}

const AdditionalData: React.FC<Props> = ({ data: { text, youtube, links }}) => {
    return (
        <div>
            <p>{text}</p>
            <div>
                <h3>Video</h3>
                <iframe 
                    key={youtube}
                    title={text}
                    width="560" 
                    height="315" 
                    src={youtube}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>
            <div>
                <h3>Links</h3>
                {
                    links?.map((link) => <div key={link}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></div>)
                }
            </div>
        </div>
    )
}


export default AdditionalData;