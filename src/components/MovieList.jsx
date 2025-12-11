import PropTypes from "prop-types";
import { FaPlay } from "react-icons/fa";

const MovieList = ({ title, movie, onSelectMovie }) => {
  const IMG_BASE = import.meta.env.VITE_IMG_URL || "https://image.tmdb.org/t/p/w500";

  return (
    <div className="text-white p-5 mb-10">
      <h2 className="text-3xl mb-4 uppercase">{title}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {movie?.length > 0 ? (
          movie.map((item) => (
            <div
              key={item.id}
              className="w-full h-[250px] relative group overflow-hidden rounded-lg cursor-pointer"
              onClick={() => onSelectMovie(item.id)}
            >
              <img
                src={
                  item.poster_path
                    ? `${IMG_BASE}${item.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={item.title || item.original_title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay Play button */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                <FaPlay className="text-white text-4xl transform scale-100 group-hover:scale-125 transition-transform duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 w-full bg-black/60 p-2 text-center">
                <p className="text-sm">{item.title || item.original_title}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Đang tải phim...</p>
        )}
      </div>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movie: PropTypes.array.isRequired,
  onSelectMovie: PropTypes.func.isRequired,
};

export default MovieList;
