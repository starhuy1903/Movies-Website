import React, {useEffect, useState} from 'react';

//Config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config'

//Components

//Hook

//API
import API from '../API'


//Image
import NoImage from '../images/no_image.jpg'


const Home = () => {
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);
            // console.log(movies);

            setState(prev => ({
                ...movies,
                results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))

        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchMovies(1);
    }, [])

    return (
        <div>
            Home page
        </div>
    );
};

export default Home;