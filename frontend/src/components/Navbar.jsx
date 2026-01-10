import Search from "./Search";
import { UserButton } from "@clerk/clerk-react";

const Navbar = () => {
    return (
      <nav className="bg-black/40 backdrop-blur-xl border-b border-white/10
 text-white p-4 flex justify-between items-center shadow-md fixed w-full top-0 left-0 z-10">
        <h1 className="text-xl font-bold tracking-wide 
bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
  SnipHub
</h1>
        <div className="w-full max-w-md mx-auto">
          <Search />
        </div>
        <UserButton afterSignOutUrl="/" />
      </nav>
    );
  };

  export default Navbar;