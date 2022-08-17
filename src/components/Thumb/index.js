import React from 'react';
import {Image} from "./Thumb.styles";
import {Link} from "react-router-dom";

const Thumb = ({image, movieId, clickable}) => {
    return (
        <div>
            {clickable ? (
                <Link to={`/${movieId}`}>
                    <Image src={image} alt="movie-thumb"></Image>
                </Link>
            ): (<Image src={image} alt="movie-thumb"></Image>)}
        </div>
    );
};

export default Thumb;