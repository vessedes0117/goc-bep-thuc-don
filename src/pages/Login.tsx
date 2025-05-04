
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(true);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle authentication
    toast({
      title: isLogin ? "Đăng nhập thành công!" : "Đăng ký thành công!",
      description: isLogin 
        ? "Chào mừng bạn quay trở lại Góc Bếp!" 
        : "Tài khoản của bạn đã được tạo thành công.",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <h1 className="text-4xl font-bold text-gocbep-orange">Góc Bếp</h1>
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-8 recipe-card-shadow">
            <div className="flex justify-between mb-8">
              <button
                className={`text-lg font-medium pb-2 px-2 ${isLogin ? 'text-gocbep-orange border-b-2 border-gocbep-orange' : 'text-gray-500'}`}
                onClick={() => setIsLogin(true)}
              >
                Đăng nhập
              </button>
              <button
                className={`text-lg font-medium pb-2 px-2 ${!isLogin ? 'text-gocbep-orange border-b-2 border-gocbep-orange' : 'text-gray-500'}`}
                onClick={() => setIsLogin(false)}
              >
                Đăng ký
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Nhập họ và tên của bạn"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gocbep-orange focus:border-transparent"
                    required={!isLogin}
                  />
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Nhập email của bạn"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gocbep-orange focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="font-medium text-gray-700">
                    Mật khẩu
                  </label>
                  {isLogin && (
                    <a href="#" className="text-sm text-gocbep-orange hover:underline">
                      Quên mật khẩu?
                    </a>
                  )}
                </div>
                <input
                  type="password"
                  id="password"
                  placeholder="Nhập mật khẩu của bạn"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gocbep-orange focus:border-transparent"
                  required
                />
              </div>
              
              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block mb-2 font-medium text-gray-700">
                    Xác nhận mật khẩu
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Nhập lại mật khẩu của bạn"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gocbep-orange focus:border-transparent"
                    required={!isLogin}
                  />
                </div>
              )}
              
              <Button 
                type="submit" 
                className="bg-gocbep-orange hover:bg-orange-600 text-white w-full"
              >
                {isLogin ? 'Đăng nhập' : 'Đăng ký'}
              </Button>
            </form>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isLogin ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'} 
              <button 
                className="ml-1 text-gocbep-orange hover:underline font-medium"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Đăng ký ngay' : 'Đăng nhập'}
              </button>
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/" className="text-gray-600 hover:text-gocbep-orange">
              &larr; Quay về trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
