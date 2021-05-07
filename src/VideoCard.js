import { ThumbUpAltSharp, ThumbUpSharp } from "@material-ui/icons";
import React, { forwardRef } from "react";
import TextTruncate from "react-text-truncate";
import "./VideoCard.css";

const baseurl = "https://image.tmdb.org/t/p/original/";
const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videocard">
      <img
        src={`${baseurl}${movie.backdrop_path || movie.poster_path}`}
        alt="Movie Poster"
      />

      <div className="moviedetails">
        <TextTruncate
          line={1}
          element="p"
          truncateText="..."
          text={movie.overview}
        />
        <h2>{movie.original_title}</h2>

        <p className="videostats">
          <ThumbUpAltSharp />
          {movie.vote_count}
        </p>
      </div>
    </div>
  );
});

export default VideoCard;
