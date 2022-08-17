import React from 'react';
import {Content, Wrapper} from "./BreadCrumb.styles";
import {Link} from "react-router-dom";

import PropTypes from "prop-types";

const BreadCrumb = ({movieTitle}) => {
    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <span>Home</span>
                </Link>
                <span>|</span>
                <span>{movieTitle}</span>
            </Content>
        </Wrapper>
    );
};

BreadCrumb.protoTypes = {
    movieTitle: PropTypes.string
}

export default BreadCrumb;