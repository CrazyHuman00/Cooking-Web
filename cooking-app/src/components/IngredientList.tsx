// 追加した食材のリストを表示するコンポーネント
import React from 'react';
import { Ingredient } from '../types/ingredient';

interface IngredientListProps {
    ingredients: Ingredient[];
    removeIngredient: (index: number) => void;
}

const IngredientList: React.FC<IngredientListProps> = ({ ingredients, removeIngredient }) => {
    return (
        <ul>
            {ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
                    {ingredient.name} - {ingredient.quantity}
                    <button 
                        onClick={() => removeIngredient(index)}
                        className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        削除
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default IngredientList;