import React, { useEffect, useState } from 'react';
import { API_KEY,imageUrl} from '../../constants/constants';
import axios from '../../axios';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data.results[0]);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, []);

  return (
    <div
     style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} 
     className="banner">
      <div className="content">
        <h1 className="title">{movie?.title}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">
          {movie?.overview}
        </h1>
      </div>
    </div>
  );
}

export default Banner;
