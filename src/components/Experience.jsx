import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Experience = () => (
    <div className="Experience">
        <H2Styled name="Experiencia" />
        <div className='Experience-item'>
            <H3Styled>Desarrollador web @ Innomobs
            <span> 30/04/2020 - 14/08/2020</span>
            </H3Styled>
            <PStyled name="Desarrollador web a cargo de hacer modificaciones para mejorar el posicionamiento web y experiencia de usuario." />
        </div>
        <div className='Experience-item'>
            <H3Styled>Desarrollador web @ Icon
            <span> 30/08/2020 - 30/12/2020</span>
            </H3Styled>
            <PStyled name="Desarrollador web de un punto de venta." />
        </div>
    </div>
);

export default Experience;