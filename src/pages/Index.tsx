
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gocbep-light-orange to-gocbep-peach py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gocbep-dark-gray">
                Khám phá hương vị Việt Nam
              </h1>
              <p className="text-lg mb-6 text-gray-700">
                Chia sẻ và khám phá những công thức nấu ăn ngon từ các vùng miền Việt Nam.
              </p>
              <div className="flex items-center gap-4">
                <Button className="bg-gocbep-orange hover:bg-orange-600 text-white px-6 py-2">
                  Khám phá ngay
                </Button>
                <Button variant="outline" className="border-gocbep-orange text-gocbep-orange hover:bg-gocbep-orange hover:text-white">
                  Đăng công thức
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1618870372208-9e654062602e?q=80&w=1000" 
                  alt="Ẩm thực Việt Nam" 
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Search Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Tìm kiếm công thức..."
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gocbep-orange focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Recipes Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gocbep-dark-gray">Công thức nổi bật</h2>
            <Button variant="ghost" className="text-gocbep-orange hover:text-orange-600">
              Xem tất cả
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.slice(0, 3).map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gocbep-dark-gray mb-8 text-center">
            Danh mục
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Món Bắc", image: "https://images.unsplash.com/photo-1627308595260-6fad84c90baa?q=80&w=500" },
              { name: "Món Trung", image: "https://images.unsplash.com/photo-1569058242272-4a036357c0ed?q=80&w=500" },
              { name: "Món Nam", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=500" },
              { name: "Món Chay", image: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?q=80&w=500" }
            ].map((category, index) => (
              <div key={index} className="group relative rounded-xl overflow-hidden h-40 recipe-card-shadow">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Recipes Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gocbep-dark-gray mb-8">
            Công thức mới nhất
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.slice(3, 6).map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button className="bg-gocbep-orange hover:bg-orange-600 text-white px-6">
              Xem thêm công thức
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gocbep-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gocbep-dark-gray">
            Chia sẻ công thức của bạn
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Bạn có công thức nấu ăn ngon muốn chia sẻ với cộng đồng? Đăng công thức của bạn ngay hôm nay và truyền cảm hứng cho những người khác.
          </p>
          <Button className="bg-gocbep-orange hover:bg-orange-600 text-white px-8 py-2">
            Đăng công thức ngay
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
