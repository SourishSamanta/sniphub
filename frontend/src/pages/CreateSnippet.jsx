const CreateSnippet = () => {
    return (
      <div className="p-6">
        <h2 className="text-3xl font-semibold mb-4">Create Snippet</h2>
        <textarea className="w-full p-3 bg-black text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500" rows="6" placeholder="Write your snippet..."></textarea>
        <button className="mt-4 px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">Publish</button>
      </div>
    );
  };

  export default CreateSnippet;