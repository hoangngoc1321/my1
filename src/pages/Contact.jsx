import React from "react";

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen py-20 px-5">
      <div className="max-w-4xl mx-auto">
        {/* TIÊU ĐỀ */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          Liên Hệ Với Chúng Tôi
        </h1>
        <p className="text-center text-gray-300 mb-10">
          Nếu bạn có bất kỳ câu hỏi, góp ý hoặc yêu cầu hỗ trợ, hãy liên hệ với chúng tôi.
        </p>

        {/* FORM LIÊN HỆ */}
        <div className="bg-[#111] p-8 rounded-xl shadow-lg border border-red-600/40">
          <form className="space-y-6">

            <div>
              <label className="block mb-2 text-gray-300">Họ và tên</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-[#222] text-white outline-none border border-gray-700 focus:border-red-600 duration-200"
                placeholder="Nhập họ tên..."
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-[#222] text-white outline-none border border-gray-700 focus:border-red-600 duration-200"
                placeholder="Nhập email..."
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Tin nhắn</label>
              <textarea
                rows="5"
                className="w-full p-3 rounded-lg bg-[#222] text-white outline-none border border-gray-700 focus:border-red-600 duration-200"
                placeholder="Nhập nội dung..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-red-600 hover:bg-red-700 transition rounded-lg text-lg font-semibold"
            >
              Gửi liên hệ
            </button>

          </form>
        </div>

        {/* THÔNG TIN BÊN DƯỚI */}
        <div className="text-center mt-12 text-gray-400">
          <p>Email hỗ trợ: <span className="text-red-500">support@movieapp.com</span></p>
          <p>Hotline: <span className="text-red-500">0123 456 789</span></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;