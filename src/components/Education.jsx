import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Education = () => (
    <div className="Education">
        <H2Styled name="Educación" />
        <div className="Education-container">
            <div className="Education-item">
                <H3Styled>Ing. en TI de la UTHH
                <span> 25/08/2016- 30/04/2020</span>
                </H3Styled>
                    <PStyled name="Concluí mi carrera en Tecnologías de la información con mayor orientación en la parte de desarollo." />
            </div>
        </div>
    </div>
);

export default Education;