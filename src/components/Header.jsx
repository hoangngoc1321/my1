// Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom"; // thêm dòng này


function Header({ onSearch, movies }) {
  const [keyword, setKeyword] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    // Lọc gợi ý từ danh sách phim
    const filtered = movies
      .filter((m) =>
        m.title?.toLowerCase().includes(value.toLowerCase())
      )
      .slice(0, 6);

    setSuggestions(filtered);
  };

  const chooseSuggestion = (title) => {
    setKeyword(title);
    setSuggestions([]);
    onSearch(title);
  };

  const handleSearch = () => {
    onSearch(keyword);
    setSuggestions([]);
  };

  return (
    <div className="p-4 bg-black flex items-center justify-between relative">
      <div className="flex items-center space-x-4">
        <h1 className="text-[30px] uppercase font-bold text-red-700">Movie</h1>

        <nav className="flex items-center space-x-4 pl-5">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/about" className="text-white">About</Link>
        <Link to="/contact" className="text-white">Contact</Link>
        </nav>
      </div>

      {/* Search box */}
      <div className="flex flex-col relative w-[300px]">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="p-2 bg-white text-black rounded-[5px] w-full"
            value={keyword}
            onChange={handleChange}
          />
          <button
            onClick={handleSearch}
            className="p-2 text-white bg-red-600 rounded-[5px]"
          >
            Search
          </button>
        </div>

        {/* Gợi ý */}
        {suggestions.length > 0 && (
          <div className="absolute top-12 w-full bg-white text-black rounded-md shadow-lg z-50 max-h-[220px] overflow-y-auto">
            {suggestions.map((s) => (
              <div
                key={s.id}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => chooseSuggestion(s.title)}
              >
                {s.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;