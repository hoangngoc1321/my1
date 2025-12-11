import React from 'react'

export const Footer = () => {
  return (
    <footer class="bg-black text-gray-300 pt-5 border-t border-gray-900 ">
  <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <h2 class="text-5xl font-bold mb-3 uppercase text-red-800">Movie</h2>
      <p class="text-sm">
        Trang web cung cấp thông tin và dịch vụ chất lượng dành cho bạn.
      </p>
    </div>
    <div>
      <h3 class="font-semibold text-white mb-3">Liên kết</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-white duration-200">Trang chủ</a></li>
        <li><a href="#" class="hover:text-white duration-200">Giới thiệu</a></li>
        <li><a href="#" class="hover:text-white duration-200">Dịch vụ</a></li>
        <li><a href="/contact" class="hover:text-white duration-200">Liên hệ</a></li>
      </ul>
    </div>
    <div>
      <h3 class="font-semibold text-white mb-3">Hỗ trợ</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-white duration-200">FAQ</a></li>
        <li><a href="#" class="hover:text-white duration-200">Chính sách bảo mật</a></li>
        <li><a href="#" class="hover:text-white duration-200">Điều khoản sử dụng</a></li>
      </ul>
    </div>
    <div>
      <h3 class="font-semibold text-white mb-3">Đăng ký nhận tin</h3>
      <p class="text-sm mb-3">Nhận thông báo mới nhất từ chúng tôi.</p>
      <div class="flex">
        <input
          type="text"
          placeholder="Email của bạn"
          class="w-full px-3 py-2 rounded-l bg-gray-800 text-gray-200 outline-none"
        />
        <button class="px-4 bg-red-700 text-white rounded-r hover:bg-red-400">
          Gửi
        </button>
      </div>
    </div>

  </div>
  <div class="text-center text-gray-400 text-sm mt-10 border-t border-gray-900 ">
    © 2025 MyWebsite. All rights reserved.
  </div>
</footer>
  ) 
}
export default Footer;