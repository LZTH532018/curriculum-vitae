import React from 'react';
import Social from './Social';
import styled from 'styled-components'

const AboutStyle = styled.div`
    text-align:center;
`;

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #E91E63;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
`;

const AboutName = styled.div`
    text-align: center;
`;

const AboutH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #C2185B;
`;

const AboutProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #C2185B;
`;

const AboutBio = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 300;
`;

const AboutLocation = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 400;
`;

const About = ({ avatar, name, profession, bio, address, social }) => (
    <AboutStyle>
        <div className="About-container">
            <AboutAvatar>
                <figure>
                    <AboutImg src="https://scontent.fmex10-2.fna.fbcdn.net/v/t1.0-9/50411563_1168886059935399_4860145182101733376_o.jpg?_nc_cat=100&_nc_sid=174925&_nc_eui2=AeHEohvU_R85fNYH6WdUjMZ-1N9I14VWF0fU30jXhVYXRyUICqrD47Y7SYPklTm4ykIBATge8HRDNaYxOPoyhMom&_nc_ohc=WaxDpCuLkuQAX9gJYPr&_nc_ht=scontent.fmex10-2.fna&oh=b1a5c5698237e02c2833b448a6764e62&oe=5F9F23BE" alt={name} />
                </figure>
            </AboutAvatar>
            <AboutName>
                <AboutH2>Luis Gerardo Trejo Fernández</AboutH2>
            </AboutName>
            <div className="About-profession">
                <AboutProfession>{profession}</AboutProfession>
            </div>
            <div className="About-desc">
                <AboutBio>Soy un entusiasta de la programacion, me gusta leer, el anime y amo a mi esposa Zena</AboutBio>
            </div>
            <div className="About-location">
                <AboutLocation>Monterrey, Nuevo León, Mexico.</AboutLocation>
            </div>
            <div className="About-social">
                <Social social={social} />
            </div>
        </div>
    </AboutStyle>
);

export default About;
