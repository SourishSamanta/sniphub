import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import CreateSnippet from "./pages/CreateSnippet";


export default function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-72 bg-black text-white min-h-screen">
          <Navbar />
          <main className="p-8 mt-16">
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/create" element={<CreateSnippet />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
