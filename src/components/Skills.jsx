import React from 'react';
import styled, { keyframes } from 'styled-components';

const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    grid-row-gap: 0.5em;
    @media only screen and (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 479px) {
        grid-template-columns: 1fr;
    }
`;

const SkillsH5 = styled.h5`
    margin: .5em 0;
`;

const SkillsLine = styled.div`
    height: 8px;
    position: relative;
    border-radius: 50px;
    background: #F8BBD0;
`;

const move = keyframes`
    0%{ background-position: 0 0; }
    100% { background-position: 50px 50px; }
`;

const SkillsSpan = styled.span`
    display: block;
    height: 100%;
    width: ${props => props.width};
    border-radius: 8px;
    background-color: #C2185B;
    overflow: hidden;
    position: relative;
    box-shadow: inset 0 2px 9px rgba(255,255,255,0.3), inset 0 -2px 6px rgba(0,0,0,0.4);
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: linear-gradient(-45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent);
        z-index: 1;
        background-size: 50px 50px;
        animation: ${move} 4s linear infinite;
        overflow: hidden;
    }
`;

const Skills = () => (
    <div className="Skills">
        <SkillsContainer>
            <div className="Skills-item">
                <SkillsH5>HTML</SkillsH5>
                <SkillsLine>
                    <SkillsSpan width="95%" />
                </SkillsLine>
            </div>
            <div className="Skills-item">
                <SkillsH5>CSS</SkillsH5>
                <SkillsLine>
                    <SkillsSpan width="80%" />
                </SkillsLine>
            </div>
            <div className="Skills-item">
                <SkillsH5>PHP</SkillsH5>
                <SkillsLine>
                    <SkillsSpan width="70%" />
                </SkillsLine>
            </div>
            <div className="Skills-item">
                <SkillsH5>SQL</SkillsH5>
                <SkillsLine>
                    <SkillsSpan width="70%" />
                </SkillsLine>
            </div>
            <div className="Skills-item">
                <SkillsH5>JavaScript</SkillsH5>
                <SkillsLine>
                    <SkillsSpan width="70%" />
                </SkillsLine>
            </div>
            <div className="Skills-item">
                <SkillsH5>React</SkillsH5>
                <SkillsLine>
                    <SkillsSpan width="30%" />
                </SkillsLine>
            </div>
            <div className="Skills-item">
                <SkillsH5>Wordpress</SkillsH5>
                <SkillsLine>
                    <SkillsSpan width="30%" />
                </SkillsLine>
            </div>
            <div className="Skills-item">
                <SkillsH5>C#</SkillsH5>
                <SkillsLine>
                    <SkillsSpan width="60%" />
                </SkillsLine>
            </div>
            <div className="Skills-item">
                <SkillsH5>Java</SkillsH5>
                <SkillsLine>
                    <SkillsSpan width="60%" />
                </SkillsLine>
            </div>
        </SkillsContainer>
    </div>
);

export default Skills;