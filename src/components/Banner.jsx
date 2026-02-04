import { useState } from "react";
import IconRatingHalf from "../assets/rating-half.png";
import IconRating from "../assets/rating.png";
import ImgMovie from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";
import BannerImg from "../assets/banner.png";
import TrailerModal from "./TrailerModal";

const Banner = () => {
  const [videoKey, setVideoKey] = useState(null);

  const handlePlayMovie = () => {
    // YouTube ID hoặc link phim
    setVideoKey("2Sbvogc9Ddg");
  };

  return (
    <>
      <div className="relative w-full h-[600px] sm:h-[650px] md:h-[600px] lg:h-[650px]">
        {/* Banner Image */}
        <img
          src={BannerImg}
          alt="banner"
          className="w-full h-full object-cover brightness-50"
        />

        {/* Layer đen */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Nội dung */}
        <div className="absolute inset-0 flex flex-col md:flex-row justify-center md:justify-between items-center px-6 sm:px-10 md:px-16 lg:px-24 py-10">
          
          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2 flex flex-col space-y-4 text-center md:text-left">
            <p className="bg-linear-to-r from-red-600 to-red-300 py-1.5 px-5 text-white font-semibold w-fit mx-auto md:mx-0 rounded-2xl">
              TV Show
            </p>

            <h1 className="text-[26px] sm:text-[34px] md:text-[40px] font-bold text-white">
              Nghe nói em thích tôi
            </h1>

            {/* Rating */}
            <div className="flex justify-center md:justify-start items-center space-x-2">
              <img src={IconRating} className="w-6 h-6" />
              <img src={IconRating} className="w-6 h-6" />
              <img src={IconRating} className="w-6 h-6" />
              <img src={IconRating} className="w-6 h-6" />
              <img src={IconRatingHalf} className="w-6 h-6" />
            </div>

            <p className="text-white max-w-[500px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            {/* Buttons */}
            <div className="flex justify-center md:justify-start space-x-5">
              <button className="py-2 px-4 bg-black/70 text-white border border-white">
                Chi tiết
              </button>

              {/* ✅ NÚT XEM PHIM */}
              <button
                onClick={handlePlayMovie}
                className="py-2 px-4 bg-red-600 text-white font-bold"
              >
                Xem Phim
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
            <div className="w-[280px] h-[400px] relative group rounded-lg overflow-hidden shadow-xl">
              
              {/* ✅ PLAY BUTTON */}
              <button
                onClick={handlePlayMovie}
                className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/40 opacity-0 group-hover:opacity-60 transition"
              >
                <img src={IconPlay} className="w-16 h-16" />
              </button>

              <img
                src={ImgMovie}
                alt="movie"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 🎬 MODAL PHÁT PHIM */}
      <TrailerModal
        videoKey={videoKey}
        onClose={() => setVideoKey(null)}
      />
    </>
  );
};

export default Banner;
