import { useState } from "react";
import SnippetCard from "../components/SnippetCard";

const Profile = () => {
  const [user] = useState({
    name: "John Doe",
    username: "@johndoe",
    email: "john@example.com",
    bio: "Frontend Developer | JavaScript Enthusiast",
  });

  const [snippets, setSnippets] = useState([
    { id: 1, title: "React Custom Hooks", description: "Create reusable logic with custom hooks." },
    { id: 2, title: "CSS Grid vs Flexbox", description: "Understand the differences and use cases." },
  ]);

  const handleEdit = (id) => {
    console.log(`Edit snippet ${id}`);
  };

  const handleDelete = (id) => {
    setSnippets(snippets.filter((snippet) => snippet.id !== id));
  };

  return (
    <div className="p-6">
      {/* Personal Details */}
      <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 mb-6 shadow-md">
        <h2 className="text-3xl font-semibold text-white">Profile</h2>
        <p className="text-gray-400">{user.bio}</p>
        <div className="mt-4 space-y-2">
          <p className="text-white"><strong>Name:</strong> {user.name}</p>
          <p className="text-white"><strong>Username:</strong> {user.username}</p>
          <p className="text-white"><strong>Email:</strong> {user.email}</p>
        </div>
      </div>

      {/* Your Snippets */}
      <h3 className="text-2xl font-semibold mt-6 mb-3 text-white">Your Snippets</h3>
      {snippets.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {snippets.map((snippet) => (
            <SnippetCard
              key={snippet.id}
              title={snippet.title}
              description={snippet.description}
              showActions={true}
              onEdit={() => handleEdit(snippet.id)}
              onDelete={() => handleDelete(snippet.id)}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No snippets created yet.</p>
      )}
    </div>
  );
};

export default Profile;
