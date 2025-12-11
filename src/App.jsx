import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import TrailerModal from "./components/TrailerModal";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [movie, setMovie] = useState([]);
  const [movierate, setMovieRate] = useState([]);

  const [originalMovie, setOriginalMovie] = useState([]);
  const [originalMovieRate, setOriginalMovieRate] = useState([]);

  const [selectedVideo, setSelectedVideo] = useState(null);

  const fetchVideo = async (id) => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Yjg0OGFhZDdiM2JmNjQ3ZDk3ZDc2YjYzNTZmNmMyNSIsIm5iZiI6MTc2NTM0NzA0My42NzkwMDAxLCJzdWIiOiI2OTM5MGVlM2Y1NGRjZDkyNDlmODc5MjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2KyQeaGMAvFr-s0Cj1rOL1BurV5igBlGFLyBQYEd-W4",
        },
      };

      const res = await fetch(url, options);
      const data = await res.json();

      const trailer = data.results.find(
        (v) => v.site === "YouTube" && v.type === "Trailer"
      );

      if (trailer) setSelectedVideo(trailer.key);
      else alert("Không tìm thấy trailer!");
    } catch (err) {
      console.log("Lỗi video:", err);
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Yjg0OGFhZDdiM2JmNjQ3ZDk3ZDc2YjYzNTZmNmMyNSIsIm5iZiI6MTc2NTM0NzA0My42NzkwMDAxLCJzdWIiOiI2OTM5MGVlM2Y1NGRjZDkyNDlmODc5MjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2KyQeaGMAvFr-s0Cj1rOL1BurV5igBlGFLyBQYEd-W4",
        },
      };

      try {
        const [res1, res2] = await Promise.all([
          fetch(
            "https://api.themoviedb.org/3/movie/popular?language=vi&page=1",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1",
            options
          ),
        ]);

        const data1 = await res1.json();
        const data2 = await res2.json();

        setMovie(data1.results || []);
        setMovieRate(data2.results || []);

        setOriginalMovie(data1.results || []);
        setOriginalMovieRate(data2.results || []);
      } catch (err) {
        console.log("Lỗi API:", err);
      }
    };

    fetchMovie();
  }, []);

  const handleSearch = (keyword) => {
    const lower = keyword.toLowerCase();

    const filteredMovie = originalMovie.filter((m) =>
      m.title?.toLowerCase().includes(lower)
    );
    const filteredRate = originalMovieRate.filter((m) =>
      m.title?.toLowerCase().includes(lower)
    );

    setMovie(filteredMovie);
    setMovieRate(filteredRate);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      
      <Header
        onSearch={handleSearch}
        movies={[...originalMovie, ...originalMovieRate]}
      />

      {/* ROUTES */}
      <Routes>

        {/* TRANG HOME */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <MovieList title="Phim Hot" movie={movie} onSelectMovie={fetchVideo} />
              <MovieList title="Phim Đề Cử" movie={movierate} onSelectMovie={fetchVideo} />
            </>
          }
        />

        {/* TRANG ABOUT */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      <TrailerModal
        videoKey={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
}

export default App;