import { Mail, ArrowRight } from "lucide-react";

export const Signup = () => {
  return (
    <div className="join">
      <div>
        <label className="input validator join-item input-lg">
          <Mail className="text-base-content" />
          <input type="email" placeholder="name@brand.com" required />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
      </div>
      <button className="btn btn-neutral join-item text-base-content btn-lg rounded-r-full shadow-sm hover:border-orange-200 hover:bg-orange-300 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:outline-none">
        Get Notified <ArrowRight className="text-base-content" size={20} />
      </button>
      <br />
    </div>
  );
};
