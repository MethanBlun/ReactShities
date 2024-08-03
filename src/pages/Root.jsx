import { Outlet } from 'react-router-dom';
import Drawer from '../components/Drawer';
export default function Root() {
  return (
    <div className="flex h-screen">
      <Drawer />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
