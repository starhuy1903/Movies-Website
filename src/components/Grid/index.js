import React from 'react';
import {Content, Wrapper} from "./Grid.styles";
import PropTypes from "prop-types";

const Grid = ({header, children}) => {
    return (
        <Wrapper>
            <h1>{header}</h1>
            <Content>{children}</Content>
        </Wrapper>
    );
};

Grid.proTypes = {
    header: PropTypes.string,
    children: PropTypes
}

export default Grid;