import { useNavigate } from "react-router-dom";
import { TbUserFilled } from "react-icons/tb";
import { MdExplore } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
const Sidebar = () => {
    const navigate = useNavigate();
  
    return (
      <aside className="h-screen w-72 bg-gradient-to-br from-[#0f172a] via-[#0f172a] to-[#131a2c] backdrop-blur-xl border-r border-white/10 text-white p-6 fixed top-0 left-0 shadow-xl">
        <h2 className="text-2xl font-bold mb-20">SnipHub</h2>
        <ul className="space-y-10">
          <li>
            <button onClick={() => navigate("/profile")} className="flex items-center gap-3 text-lg hover:text-cyan-400 hover:translate-x-1 transition-all relative before:absolute before:left-[-12px] before:h-full before:w-1
before:bg-cyan-400 before:opacity-0 hover:before:opacity-100">
              <TbUserFilled className="w-5 h-5" /> Profile
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/explore")} className="flex items-center gap-3 text-lg hover:text-cyan-400 hover:translate-x-1 transition-all relative before:absolute before:left-[-12px] before:h-full before:w-1
before:bg-cyan-400 before:opacity-0 hover:before:opacity-100">
              <MdExplore className="w-5 h-5" /> Explore
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/create")} className="flex items-center gap-3 text-lg hover:text-cyan-400 hover:translate-x-1 transition-all relative before:absolute before:left-[-12px] before:h-full before:w-1
before:bg-cyan-400 before:opacity-0 hover:before:opacity-100">
              <MdLibraryAdd className="w-5 h-5" /> Create Snippet
            </button>
          </li>
        </ul>
      </aside>
    );
  };

  export default Sidebar;