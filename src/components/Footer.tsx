
const Footer = () => {
  return (
    <footer className="bg-gocbep-dark-gray text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Góc Bếp</h3>
            <p className="text-gray-300">
              Nơi chia sẻ những công thức nấu ăn ngon và đơn giản cho gia đình Việt.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liên kết</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Trang chủ</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Danh mục</a></li>
              <li><a href="/add-recipe" className="text-gray-300 hover:text-white transition-colors">Đăng công thức</a></li>
              <li><a href="/login" className="text-gray-300 hover:text-white transition-colors">Đăng nhập</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liên hệ</h3>
            <p className="text-gray-300">Email: contact@gocbep.vn</p>
            <p className="text-gray-300">Điện thoại: 0987 654 321</p>
            <p className="text-gray-300">Địa chỉ: Hà Nội, Việt Nam</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>Bản quyền © 2024 Góc Bếp. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
