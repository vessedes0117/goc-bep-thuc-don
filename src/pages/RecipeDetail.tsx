
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { recipes } from "@/data/recipes";
import { Button } from "@/components/ui/button";
import { Clock, Users, Edit } from "lucide-react";

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find(r => r.id === Number(id));

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Không tìm thấy công thức</h2>
            <p className="mb-6">Công thức bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
            <Button className="bg-gocbep-orange hover:bg-orange-600 text-white" onClick={() => window.history.back()}>
              Quay lại
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Recipe Header */}
          <div className="bg-white rounded-xl overflow-hidden recipe-card-shadow mb-8">
            <div className="h-64 md:h-96 w-full">
              <img 
                src={recipe.imageUrl} 
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gocbep-dark-gray">
                  {recipe.title}
                </h1>
                <Button variant="outline" className="border-gocbep-orange text-gocbep-orange hover:bg-gocbep-orange hover:text-white flex items-center gap-2">
                  <Edit size={16} />
                  Chỉnh sửa
                </Button>
              </div>
              
              <p className="text-gray-700 mb-6 text-lg">{recipe.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 bg-gocbep-light-orange px-4 py-2 rounded-full">
                  <Clock size={18} className="text-gocbep-orange" />
                  <span className="text-sm font-medium">Chuẩn bị: {recipe.prepTime} phút</span>
                </div>
                <div className="flex items-center gap-2 bg-gocbep-light-orange px-4 py-2 rounded-full">
                  <Clock size={18} className="text-gocbep-orange" />
                  <span className="text-sm font-medium">Nấu: {recipe.cookTime} phút</span>
                </div>
                <div className="flex items-center gap-2 bg-gocbep-light-orange px-4 py-2 rounded-full">
                  <Users size={18} className="text-gocbep-orange" />
                  <span className="text-sm font-medium">Khẩu phần: {recipe.servings} người</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recipe Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ingredients */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl p-6 recipe-card-shadow">
                <h2 className="text-2xl font-bold mb-6 text-gocbep-dark-gray pb-4 border-b">
                  Nguyên liệu
                </h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-gocbep-orange mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Instructions */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl p-6 recipe-card-shadow">
                <h2 className="text-2xl font-bold mb-6 text-gocbep-dark-gray pb-4 border-b">
                  Cách làm
                </h2>
                <ol className="space-y-6">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gocbep-orange text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-gray-700">{instruction}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RecipeDetail;
