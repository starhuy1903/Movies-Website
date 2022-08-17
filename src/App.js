import React from 'react';

//Styles
import {GlobalStyle} from "./GlobalStyle";
import Header from "./components/Header";
import Home from "./components/Home";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

const App = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/:movieId" element={<Movie/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>

            <GlobalStyle/>
        </Router>
    );
}

export default App;
