import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="w-60 min-h-screen bg-gray-800 text-white p-4">
    <nav className="flex flex-col gap-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About</Link>
      <Link to="/services" className="hover:underline">Services</Link>
    </nav>
  </aside>
);

export default Sidebar;
