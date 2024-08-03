import { Link } from 'react-router-dom';

export default function Drawer() {
  return (
    <div className="h-full bg-gray-800 text-white w-64 p-4">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <ul>
        <li className="mb-2">
          <Link to="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li className="mb-2">
          <Link to="/about" className="hover:text-gray-400">About</Link>
        </li>
        <li className="mb-2">
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
