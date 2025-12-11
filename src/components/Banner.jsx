import IconRatingHalf from "../assets/rating-half.png";
import IconRating from "../assets/rating.png";
import ImgMovie from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";
import BannerImg from "../assets/banner.png";


const Banner = () => {
  return (
    <div className="relative w-full h-[700px] md:h-[600px]">
      <img
        src={BannerImg}
        alt="banner"
        className="w-full h-full object-cover brightness-50"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 flex flex-col md:flex-row justify-center md:justify-between items-center px-10 md:px-20">
        <div className="md:w-1/2 w-full flex flex-col space-y-6">
          <p className="bg-linear-to-r from-red-600 to-red-300 py-2 px-6 text-white font-semibold w-fit">
            TV Show
          </p>

          <h1 className="text-[40px] font-bold text-white">
            Nghe nói em thích tôi
          </h1>

          <div className="flex items-center space-x-3">
            <img src={IconRating} className="w-8 h-8" />
            <img src={IconRating} className="w-8 h-8" />
            <img src={IconRating} className="w-8 h-8" />
            <img src={IconRating} className="w-8 h-8" />
            <img src={IconRatingHalf} className="w-8 h-8" />
          </div>

          <p className="text-white leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

          <div className="flex items-center space-x-5">
            <button className="py-2 px-3 bg-black text-white border border-white font-bold">
              Chi tiết
            </button>
            <button className="py-2 px-3 bg-red-600 text-white font-bold">
              Xem Phim
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0">
          <div className="w-[300px] h-[400px] relative group rounded-lg overflow-hidden shadow-lg">
            <button className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/40 opacity-0 group-hover:opacity-60 transition duration-500">
              <img src={IconPlay} alt="play" className="w-16 h-16" />
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
  );
};

export default Banner;