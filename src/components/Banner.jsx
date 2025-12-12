import IconRatingHalf from "../assets/rating-half.png";
import IconRating from "../assets/rating.png";
import ImgMovie from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";
import BannerImg from "../assets/banner.png";

const Banner = () => {
  return (
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
        <div className="w-full md:w-1/2 flex flex-col space-y-1 sm:space-y-6 text-center md:text-left">
          <p className="bg-linear-to-r from-red-600 to-red-300 py-1.5 px-5 text-white font-semibold w-fit mx-auto md:mx-0 text-sm sm:text-base rounded-2xl">
            TV Show
          </p>

          <h1 className="text-[26px] sm:text-[34px] md:text-[40px] font-bold text-white">
            Nghe nói em thích tôi
          </h1>

          {/* Rating */}
          <div className="flex justify-center md:justify-start items-center space-x-2 sm:space-x-3">
            <img src={IconRating} className="w-6 h-6 sm:w-8 sm:h-8" />
            <img src={IconRating} className="w-6 h-6 sm:w-8 sm:h-8" />
            <img src={IconRating} className="w-6 h-6 sm:w-8 sm:h-8" />
            <img src={IconRating} className="w-6 h-6 sm:w-8 sm:h-8" />
            <img src={IconRatingHalf} className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>

          {/* Description */}
          <p className="text-white leading-relaxed text-sm sm:text-base max-w-[500px] mx-auto md:mx-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start items-center space-x-3 sm:space-x-5">
            <button className="py-2 px-4 bg-black/70 text-white border border-white font-bold text-sm sm:text-base">
              Chi tiết
            </button>
            <button className="py-2 px-4 bg-red-600 text-white font-bold text-sm sm:text-base">
              Xem Phim
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <div className="w-[230px] sm:w-[260px] md:w-[280px] lg:w-[320px] h-[330px] sm:h-[360px] md:h-[400px] relative group rounded-lg overflow-hidden shadow-xl">
            
            {/* Hover Play Button */}
            <button className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/40 opacity-0 group-hover:opacity-60 transition duration-500">
              <img src={IconPlay} alt="play" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
            </button>

            {/* Movie Poster */}
            <img
              src={ImgMovie}
              alt="movie"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
