
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const AddRecipe = () => {
  const { toast } = useToast();
  const [ingredients, setIngredients] = useState<string[]>(['']);
  const [instructions, setInstructions] = useState<string[]>(['']);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleRemoveIngredient = (index: number) => {
    if (ingredients.length > 1) {
      const newIngredients = [...ingredients];
      newIngredients.splice(index, 1);
      setIngredients(newIngredients);
    }
  };

  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleAddInstruction = () => {
    setInstructions([...instructions, '']);
  };

  const handleRemoveInstruction = (index: number) => {
    if (instructions.length > 1) {
      const newInstructions = [...instructions];
      newInstructions.splice(index, 1);
      setInstructions(newInstructions);
    }
  };

  const handleInstructionChange = (index: number, value: string) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally submit the form data
    toast({
      title: "Công thức đã được lưu!",
      description: "Công thức của bạn đã được lưu thành công và đang chờ kiểm duyệt.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl p-6 md:p-8 recipe-card-shadow">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gocbep-dark-gray">
              Đăng công thức mới
            </h1>
            
            <form onSubmit={handleSubmit}>
              {/* Basic Info */}
              <div className="space-y-4 mb-8">
                <div>
                  <label htmlFor="title" className="block mb-2 font-medium text-gray-700">
                    Tên món ăn
                  </label>
                  <input
                    type="text"
                    id="title"
                    placeholder="Nhập tên món ăn..."
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gocbep-orange focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block mb-2 font-medium text-gray-700">
                    Mô tả
                  </label>
                  <textarea
                    id="description"
                    placeholder="Nhập mô tả ngắn về món ăn..."
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gocbep-orange focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="image" className="block mb-2 font-medium text-gray-700">
                    Hình ảnh
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                    <input
                      type="file"
                      id="image"
                      className="hidden"
                      accept="image/*"
                    />
                    <label 
                      htmlFor="image"
                      className="cursor-pointer flex flex-col items-center justify-center"
                    >
                      <div className="w-12 h-12 rounded-full bg-gocbep-light-orange text-gocbep-orange flex items-center justify-center mb-2">
                        <Plus />
                      </div>
                      <span className="text-sm font-medium text-gray-700">Tải lên hình ảnh món ăn</span>
                      <span className="text-xs text-gray-500 mt-1">PNG, JPG (tối đa 5MB)</span>
                    </label>
                  </div>
                </div>
              </div>
              
              {/* Recipe Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div>
                  <label htmlFor="prepTime" className="block mb-2 font-medium text-gray-700">
                    Thời gian chuẩn bị (phút)
                  </label>
                  <input
                    type="number"
                    id="prepTime"
                    min="1"
                    placeholder="15"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gocbep-orange focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="cookTime" className="block mb-2 font-medium text-gray-700">
                    Thời gian nấu (phút)
                  </label>
                  <input
                    type="number"
                    id="cookTime"
                    min="1"
                    placeholder="30"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gocbep-orange focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="servings" className="block mb-2 font-medium text-gray-700">
                    Khẩu phần (người)
                  </label>
                  <input
                    type="number"
                    id="servings"
                    min="1"
                    placeholder="4"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gocbep-orange focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              {/* Ingredients */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gocbep-dark-gray">Nguyên liệu</h2>
                  <Button 
                    type="button"
                    variant="outline" 
                    className="border-gocbep-orange text-gocbep-orange hover:bg-gocbep-orange hover:text-white"
                    onClick={handleAddIngredient}
                  >
                    <Plus size={16} className="mr-2" />
                    Thêm nguyên liệu
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder={`Nguyên liệu ${index + 1}...`}
                        value={ingredient}
                        onChange={(e) => handleIngredientChange(index, e.target.value)}
                        className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gocbep-orange focus:border-transparent"
                        required
                      />
                      {ingredients.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => handleRemoveIngredient(index)}
                        >
                          <Trash2 size={18} />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Instructions */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gocbep-dark-gray">Cách làm</h2>
                  <Button 
                    type="button"
                    variant="outline" 
                    className="border-gocbep-orange text-gocbep-orange hover:bg-gocbep-orange hover:text-white"
                    onClick={handleAddInstruction}
                  >
                    <Plus size={16} className="mr-2" />
                    Thêm bước
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {instructions.map((instruction, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gocbep-orange text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-2">
                          <textarea
                            placeholder={`Mô tả bước ${index + 1}...`}
                            value={instruction}
                            onChange={(e) => handleInstructionChange(index, e.target.value)}
                            rows={2}
                            className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gocbep-orange focus:border-transparent"
                            required
                          ></textarea>
                          {instructions.length > 1 && (
                            <Button
                              type="button"
                              variant="ghost"
                              className="text-red-500 hover:text-red-700 hover:bg-red-50 mt-2"
                              onClick={() => handleRemoveInstruction(index)}
                            >
                              <Trash2 size={18} />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end gap-4">
                <Button 
                  type="button" 
                  variant="outline"
                  className="border-gray-300 text-gray-700"
                  onClick={() => window.history.back()}
                >
                  Hủy
                </Button>
                <Button type="submit" className="bg-gocbep-orange hover:bg-orange-600 text-white px-6">
                  Lưu công thức
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AddRecipe;
