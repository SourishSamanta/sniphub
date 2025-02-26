const SnippetCard = ({ title, description, showActions = false, onEdit, onDelete }) => {
    return (
      <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:bg-gray-800 transition relative">
        <h3 className="font-semibold text-lg text-white">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
  
        {/* Show buttons only if showActions is true */}
        {showActions && (
          <div className="absolute top-3 right-3 flex space-x-2">
            <button onClick={onEdit} className="text-blue-400 hover:text-blue-300 transition">
              ✏️
            </button>
            <button onClick={onDelete} className="text-red-400 hover:text-red-300 transition">
              🗑️
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default SnippetCard;
  