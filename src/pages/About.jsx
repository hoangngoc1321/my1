const About = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="w-full max-w-[1200px] mx-auto">
        
        <h1 className="text-5xl font-bold text-red-600 mb-8 uppercase text-center">
          About Us
        </h1>

        <p className="text-gray-300 leading-relaxed text-lg mb-10 text-center">
          Chào mừng bạn đến với <span className="text-red-500 font-semibold">Movie</span> — 
          nền tảng xem trailer và khám phá thông tin phim được xây dựng bằng React + TailwindCSS 
          và API TMDB. Mục tiêu của chúng tôi là mang đến cho bạn trải nghiệm xem phim mượt mà, 
          hiện đại và trực quan nhất.
        </p>

        <h2 className="text-3xl font-semibold text-white mb-6">🎬 Chúng tôi mang đến:</h2>

        <ul className="text-gray-300 space-y-3 text-lg pl-6">
          <li>• Danh sách phim thịnh hành, hot và được đánh giá cao.</li>
          <li>• Trailer chất lượng cao trực tiếp từ YouTube.</li>
          <li>• Tìm kiếm phim cực nhanh với gợi ý thông minh.</li>
          <li>• Giao diện thiết kế hiện đại, tối ưu cho trải nghiệm người dùng.</li>
        </ul>

        <p className="text-gray-400 mt-10 text-lg">
          Đây là dự án cá nhân nhằm nâng cao kỹ năng lập trình và xây dựng UI/UX.  
          Nếu bạn muốn phát triển thêm tính năng hoặc nâng cấp giao diện, tôi luôn sẵn sàng hỗ trợ!
        </p>

      </div>
    </div>
  );
};

export default About;