"use client";
import { useState } from "react";

const allProducts = [
  { name: "Paracetamol", price: "Rs. 60", image: "https://via.placeholder.com/150", category: "Fever" },
   { name: "Panadol", price: "Rs. 60", image: "https://via.placeholder.com/150", category: "Fever" },
   { name: "Feverex", price: "Rs. 60", image: "https://via.placeholder.com/150", category: "Fever" },
 { name: "Nuberol Forte", price: "Rs. 60", image: "https://via.placeholder.com/150", category: "Fever" },
  { name: "Disprin", price: "Rs. 20", image: "https://via.placeholder.com/150", category: "Fever" },
  { name: "Ponstan Forte", price: "Rs. 60", image: "https://via.placeholder.com/150", category: "Fever" },
  { name: "Advil", price: "Rs. 40", image: "https://via.placeholder.com/150", category: "Fever" },
  { name: "Tamex", price: "Rs. 55", image: "https://via.placeholder.com/150", category: "Fever" },

  { name: "Cetirizine", price: "Rs. 70", image: "https://via.placeholder.com/150", category: "Allergy" },
  { name: "Benadryl", price: "Rs. 90", image: "https://via.placeholder.com/150", category: "Allergy" },
  { name: "Loratadine", price: "Rs. 100", image: "https://via.placeholder.com/150", category: "Allergy" },
  { name: "Levocetirizine", price: "Rs. 150", image: "https://via.placeholder.com/150", category: "Allergy" },
  { name: "Desloratadine", price: "Rs. 200", image: "https://via.placeholder.com/150", category: "Allergy" },
  { name: "Diphenhydramine", price: "Rs. 100", image: "https://via.placeholder.com/150", category: "Allergy" },
  { name: "Chlorpheniramine", price: "Rs. 70", image: "https://via.placeholder.com/150", category: "Allergy" },
  { name: "Hydroxyzine", price: "Rs. 160", image: "https://via.placeholder.com/150", category: "Allergy" },

  { name: "Brufen", price: "Rs. 100", image: "https://via.placeholder.com/150", category: "Pain Relief" },
  { name: "Ponstan", price: "Rs. 80", image: "https://via.placeholder.com/150", category: "Pain Relief" },
  { name: "Paracetamol", price: "Rs. 70", image: "https://via.placeholder.com/150", category: "Pain Relief" },
  { name: "Dicloran", price: "Rs. 80", image: "https://via.placeholder.com/150", category: "Pain Relief" },
  { name: "Flexon", price: "Rs. 55", image: "https://via.placeholder.com/150", category: "Pain Relief" },
  { name: "Ibuprofen", price: "Rs. 50", image: "https://via.placeholder.com/150", category: "Pain Relief" },
  { name: "Voitaren", price: "Rs. 100", image: "https://via.placeholder.com/150", category: "Pain Relief" },
  { name: "Cataflam", price: "Rs. 70", image: "https://via.placeholder.com/150", category: "Pain Relief" },

  { name: "Vitamin C", price: "Rs. 150", image: "https://via.placeholder.com/150", category: "Vitamins" },
  { name: "Multivitamin", price: "Rs. 200", image: "https://via.placeholder.com/150", category: "Vitamins" },
  { name: "Surbex Z", price: "Rs. 280", image: "https://via.placeholder.com/150", category: "Vitamins" },
  { name: "Centrum Silver", price: "Rs. 650", image: "https://via.placeholder.com/150", category: "Vitamins" },
  { name: "Calcium-D", price: "Rs. 300", image: "https://via.placeholder.com/150", category: "Vitamins" },
  { name: "Evion", price: "Rs. 100", image: "https://via.placeholder.com/150", category: "Vitamins" },
  { name: "Fefol Vit", price: "Rs. 200", image: "https://via.placeholder.com/150", category: "Vitamins" },
  { name: "Revital Capsules", price: "Rs. 500", image: "https://via.placeholder.com/150", category: "Vitamins" },

   { name: "Mask N95", price: "Rs. 300", image: "https://via.placeholder.com/150", category: "Covid Care" },
  { name: "Panadol 500mg", price: "Rs. 30", image: "https://via.placeholder.com/150", category: "Covid Care" },
  { name: "Zincovit (Zinc Supplement)", price: "Rs. 150", image: "https://via.placeholder.com/150", category: "Covid Care" },
  { name: "Vitamin C 1000mg", price: "Rs. 200", image: "https://via.placeholder.com/150", category: "Covid Care" },
  { name: "Ivermectin 6mg", price: "Rs. 90", image: "https://via.placeholder.com/150", category: "Covid Care" },
  { name: "Azithromycin 500mg", price: "Rs. 180", image: "https://via.placeholder.com/150", category: "Covid Care" },
  { name: "Pulse Oximeter", price: "Rs. 1200", image: "https://via.placeholder.com/150", category: "Covid Care" },
  { name: "Hand Sanitizer 100ml", price: "Rs. 120", image: "https://via.placeholder.com/150", category: "Covid Care" },

  { name: "Johnsons Baby Lotion", price: "Rs. 250", image: "https://via.placeholder.com/150", category: "Baby Care" },
  { name: "Pampers Diapers Small (Pack of 12)", price: "Rs. 600", image: "https://via.placeholder.com/150", category: "Baby Care" },
  { name: "Johnsons Baby Shampoo", price: "Rs. 280", image: "https://via.placeholder.com/150", category: "Baby Care" },
  { name: "Baby Wipes (Pack of 80)", price: "Rs. 350", image: "https://via.placeholder.com/150", category: "Baby Care" },
  { name: "Cerelac Wheat 6 Months+", price: "Rs. 700", image: "https://via.placeholder.com/150", category: "Baby Care" },
  { name: "Feeding Bottle 250ml", price: "Rs. 180", image: "https://via.placeholder.com/150", category: "Baby Care" },
  { name: "Baby Oil (Johnsons)", price: "Rs. 230", image: "https://via.placeholder.com/150", category: "Baby Care" },
  { name: "Gripe Water 120ml", price: "Rs. 140", image: "https://via.placeholder.com/150", category: "Baby Care" },

];

const categories = [
  { name: "All", emoji: "🛒" },
  { name: "Fever", emoji: "🌡️" },
  { name: "Allergy", emoji: "🤧" },
  { name: "Pain Relief", emoji: "💊" },
  { name: "Vitamins", emoji: "🧴" },
  { name: "Covid Care", emoji: "🦠" },
  { name: "Baby Care", emoji: "👶" },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Browse Medicines by Category
      </h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat.name
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            }`}
          >
            {cat.emoji} {cat.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.slice(0, 12).map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg"
          >
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-blue-600 font-bold">{item.price}</p>
              <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
