import PropTypes from "prop-types";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <>
      <div className="movie" key={imdbID}>
        <div>
          <p>{Year}</p>
        </div>
        <div>
          <img
            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/200"}
            alt={Title}
          />
        </div>
        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
      </div>
    </>
  );
};

// Define the prop types for validation
MovieCard.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired, // Year should be a string
    Poster: PropTypes.string.isRequired, // Poster should be a string (URL)
    Type: PropTypes.string.isRequired, // Type should be a string
    Title: PropTypes.string.isRequired, // Title should be a string
  }).isRequired,
};

export default MovieCard;
