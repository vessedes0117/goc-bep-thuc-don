
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Recipe } from "@/data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden recipe-card-shadow hover:-translate-y-1 transition-transform duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{recipe.title}</h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{recipe.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>{recipe.prepTime + recipe.cookTime} phút</span>
          <span>{recipe.servings} người</span>
        </div>
        <Link to={`/recipe/${recipe.id}`}>
          <Button className="w-full bg-gocbep-orange hover:bg-orange-600">
            Xem chi tiết
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
