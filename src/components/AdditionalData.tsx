import React from 'react';
import styled from 'styled-components';
import { QuestionAdditionalData } from '../types';

const StyledVideoIFrame = styled.iframe`
    width: 90vw;
    max-width: 560px;
    height: 315px;
    max-height: 315px;
`;

type Props = {
    data: QuestionAdditionalData;
}

const AdditionalData: React.FC<Props> = ({ data: { text, youtube, links }}) => {
    return (
        <div>
            <p>{text}</p>
            <div>
                <h3>Video</h3>
                <StyledVideoIFrame 
                    key={youtube}
                    title={text}
                    src={youtube}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></StyledVideoIFrame>
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