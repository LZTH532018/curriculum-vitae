import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Certificates = props => (
    <div className="Certificates">
        <H2Styled name="Certificados" />
        <div className="Certificates-container">
            <div className='Certificates-item'>
                <H3Styled>Ingenieria en Tecnologias de la informacion @ Universidad Tecnologica de la Huasteca Hidalguense<span>30/04/2020</span></H3Styled>
                <PStyled name="Titulo universitario." />
            </div>
        </div>
    </div>
);

export default Certificates;