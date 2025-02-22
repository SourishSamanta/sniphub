import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <h2 className="text-xl">Welcome to the Snippet Manager</h2>
      <Link to="/dashboard" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
        Go to Dashboard
      </Link>
    </div>
  );
}

export default Home;
