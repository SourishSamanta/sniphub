import { useState } from "react";
import SnippetCard from "../components/SnippetCard";

const Explore = () => {
  const [snippets] = useState([
    { id: 1, title: "Async/Await in JavaScript", description: "Learn how to handle asynchronous code easily." },
    { id: 2, title: "Flexbox CSS Guide", description: "Master the flexbox layout system in CSS." },
    { id: 3, title: "React useEffect Hook", description: "Understand how and when to use useEffect in React." },
    { id: 4, title: "Node.js File Handling", description: "Read and write files in Node.js with ease." },
  ]);

  const categories = ["JavaScript", "Python", "React", "CSS", "HTML", "Node.js"];

  return (
    <div className="p-6">
      {/* Search Bar */}
      <h2 className="text-3xl font-semibold mb-4 text-white">Explore</h2>
      <input
        type="text"
        placeholder="Search snippets..."
        className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
      />

      {/* Top Snippets */}
      <h3 className="text-2xl font-semibold mt-6 mb-3 text-white">Top Snippets</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {snippets.map((snippet) => (
          <SnippetCard key={snippet.id} title={snippet.title} description={snippet.description} />
        ))}
      </div>

      {/* Categories Section */}
      <h3 className="text-2xl font-semibold mt-6 mb-3 text-white">Categories</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category} className="p-4 bg-gray-900 border border-gray-700 rounded-lg shadow-md hover:bg-gray-800 transition cursor-pointer">
            <p className="text-white font-semibold">{category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
