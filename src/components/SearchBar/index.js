import React, {Component, useEffect, useRef, useState} from 'react';

import searchIcon from '../../images/search-icon.svg'
import {Content, Wrapper} from "./SearchBar.styles";
import PropTypes from "prop-types";

class SearchBar extends Component {

    state = {
        value: ''
    }
    timeout = null;

    componentDidUpdate(_prevProps, prevState) {
        if (this.state.value !== prevState.value) {
            const {setSearchTerm} = this.props;

            clearTimeout(this.timeout)

            const timer = setTimeout(() => {
                const {value} = this.state;
                setSearchTerm(value);
            }, 500)
        }
    }


    // useEffect(() => {
    //     if(initial.current) {
    //         initial.current = false;
    //         return;
    //     }
    //
    //     const timer = setTimeout(() => {
    //         setSearchTerm(state);
    //     }, 500)
    //
    //     return () => clearTimeout(timer)
    // }, [setSearchTerm, state])

    render() {
        const {value} = this.state;
        return (
            <Wrapper>
                <Content>
                    <img src={searchIcon} alt="search-icon"/>
                    <input
                        type="text"
                        placeholder="Search Movie"
                        onChange={event => this.setState({value: event.currentTarget.value})}
                        value={value}
                    />
                </Content>
            </Wrapper>
        );
    };
}

SearchBar.propTypes = {
    setSearchTerm: PropTypes.func
}

export default SearchBar;