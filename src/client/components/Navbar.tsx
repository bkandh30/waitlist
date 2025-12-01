import { Route, Globe } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-accent text-xl">
          <Route className="text-neutral-content" />
          HashRoute
        </a>
      </div>
      <div className="text-neutral-content flex-none">
        <button className="btn btn-soft btn-warning">
          <Globe />
          Global Mesh Offline
        </button>
      </div>
    </div>
  );
};
