// Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

function Header({ onSearch, movies }) {
  const [keyword, setKeyword] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false); // menu mobile

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = movies
      .filter((m) => m.title?.toLowerCase().includes(value.toLowerCase()))
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

      {/* Logo + menu */}
      <div className="flex items-center space-x-4">
        <h1 className="text-[26px] md:text-[30px] uppercase font-bold text-red-700">
          Movie
        </h1>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center space-x-6 pl-5">
          <Link to="/home" className="text-white hover:text-red-500">Home</Link>
          <Link to="/about" className="text-white hover:text-red-500">About</Link>
          <Link to="/contact" className="text-white hover:text-red-500">Contact</Link>
        </nav>

        {/* MENU MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* SEARCH */}
      <div className="flex flex-col relative w-[180px] sm:w-[250px] md:w-[300px]">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <input
            type="text"
            placeholder="Search"
            className="p-2 bg-white text-black rounded-[5px] w-full text-sm sm:text-base"
            value={keyword}
            onChange={handleChange}
          />
          <button
            onClick={handleSearch}
            className="p-2 px-3 text-white bg-red-600 rounded-[5px] text-sm sm:text-base"
          >
            Search
          </button>
        </div>

        {/* Suggestions */}
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

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-black text-white flex flex-col md:hidden p-4 space-y-3 border-t border-gray-700 z-50">
          <Link
            to="/"
            className="hover:text-red-500"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-red-500"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-red-500"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
