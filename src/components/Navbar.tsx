
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-gocbep-orange">Góc Bếp</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-gocbep-orange transition-colors">
              Trang chủ
            </Link>
            <Link to="/" className="font-medium hover:text-gocbep-orange transition-colors">
              Danh mục
            </Link>
            <Link to="/add-recipe">
              <Button variant="outline" className="hover:bg-gocbep-orange hover:text-white border-gocbep-orange text-gocbep-orange">
                Đăng công thức
              </Button>
            </Link>
            <Link to="/login">
              <Button className="bg-gocbep-orange hover:bg-orange-600 text-white">Đăng nhập</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gocbep-orange"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium p-2 hover:bg-gocbep-light-orange rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Trang chủ
              </Link>
              <Link 
                to="/" 
                className="font-medium p-2 hover:bg-gocbep-light-orange rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Danh mục
              </Link>
              <Link 
                to="/add-recipe" 
                className="font-medium p-2 hover:bg-gocbep-light-orange rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Đăng công thức
              </Link>
              <Link 
                to="/login" 
                className="font-medium p-2 text-center bg-gocbep-orange text-white rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Đăng nhập
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
