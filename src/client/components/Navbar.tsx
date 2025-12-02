import { useEffect, useState } from "react";
import { Route, Globe } from "lucide-react";

export const Navbar = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data))
      .catch((err) => setStatus(`Error: ${err.message}`));
  }, []);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-accent text-xl">
          <Route className="text-neutral-content" />
          HashRoute
        </a>
      </div>
      <div className="text-neutral-content flex-none">
        <button className="btn btn-soft btn-accent text-orange-200">
          <Globe size={14} />
          Global Mesh: {status}
        </button>
      </div>
    </div>
  );
};
