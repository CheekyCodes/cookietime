import React, { useState } from 'react';
import { CarFront as Cauldron, Skull, Cookie, Flame, ThumbsUp } from 'lucide-react';

interface Recipe {
  id: number;
  title: string;
  author: string;
  description: string;
  likes: number;
  cursed: boolean;
}

function App() {
  const [recipes] = useState<Recipe[]>([
    {
      id: 1,
      title: "Soul-Stealing Snickerdoodles",
      author: "Grandma Grimm",
      description: "These cursed snickerdoodles will make your grandchildren visit more often... whether they want to or not! Muhahaha!",
      likes: 666,
      cursed: true
    },
    {
      id: 2,
      title: "Dark Magic Double Chocolate Cookies",
      author: "Evil Nana Beth",
      description: "A recipe passed down through generations of witch grandmas. Side effects may include eternal youth and a sudden urge to cackle.",
      likes: 333,
      cursed: true
    },
    {
      id: 3,
      title: "Possession Peanut Butter Cookies",
      author: "Granny Hex",
      description: "These cookies are to die for... literally! Just kidding, dearies. They only cause temporary possession.",
      likes: 444,
      cursed: false
    }
  ]);

  return (
    <div className="min-h-screen bg-black text-purple-300">
      {/* Header */}
      <header className="bg-gray-900 p-6 shadow-lg border-b border-purple-600">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Cauldron className="w-10 h-10 text-purple-400" />
            <h1 className="text-3xl font-bold font-serif text-purple-400">Evil Grandma's Cookie Coven</h1>
          </div>
          <button className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Cookie className="w-5 h-5" />
            Share Your Recipe
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6">
        <div className="grid gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-gray-900 rounded-lg p-6 shadow-xl border border-purple-800 hover:border-purple-600 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-2">
                    {recipe.title}
                    {recipe.cursed && <Skull className="w-5 h-5 text-red-500" />}
                  </h2>
                  <p className="text-purple-300 mt-1">By {recipe.author}</p>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{recipe.likes}</span>
                </div>
              </div>
              <p className="mt-4 text-gray-300">{recipe.description}</p>
              <div className="mt-4 flex items-center gap-4">
                <button className="bg-purple-900 hover:bg-purple-800 text-purple-300 px-4 py-2 rounded-md flex items-center gap-2 transition-colors">
                  <Flame className="w-4 h-4" />
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-purple-400 p-6 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p>© 2025 Evil Grandma's Cookie Coven. All Rights Reserved. No Souls Were Harmed in the Making of These Cookies.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;