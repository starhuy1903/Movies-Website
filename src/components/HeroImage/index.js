import {Wrapper, Content, Text} from "./HeroImage.styles";


import React from 'react';

const HeroImage = (props) => {
    const {image, title, text} = props;
    return (
        <Wrapper image={image}>
            <Content>
                <Text>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </Text>
            </Content>
        </Wrapper>
    );
};

export default HeroImage;