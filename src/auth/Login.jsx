import React, { useState } from "react";
import bgimage from "../assets/bg-image.png";
import wifi from "../assets/wifi_logo.jpg";

const Login = () => {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });
  const [error, seterror] = useState("");

  const handlechange = (e) => {
    setFormdata({ ...formdata, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formdata.email || !formdata.password) {
      seterror("All fields are required");
      return;
    }

    console.log(formdata);
    seterror("");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-[#050814]"
      style={{
        backgroundImage: `radial-gradient(circle at top, rgba(34,211,238,0.15), transparent 40%), url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden border border-cyan-900/40 shadow-[0_0_60px_rgba(34,211,238,0.15)] backdrop-blur-xl flex">
        {/* LEFT PANEL */}
        <div className="hidden md:flex w-1/2 p-10 flex-col justify-between bg-linear-to-br from-[#06101f] via-[#050814] to-[#020617] relative">
          {/* glowing orb */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/20 blur-3xl rounded-full"></div>

          <div>
            <p className="text-cyan-400 text-xs tracking-[0.3em]">
              • ACTIVE SENSOR NETWORK
            </p>

            <h1 className="mt-4 text-5xl font-bold text-white leading-tight">
              LORAWAN <br />
              SMART SENSOR
            </h1>

            <p className="mt-5 text-gray-400 text-sm leading-relaxed max-w-sm">
              Secure access gateway for industrial IoT telemetry, edge devices,
              and real-time sensor synchronization.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full md:w-1/2 p-10 bg-[#020617]/70 backdrop-blur-2xl">
          <div className="max-w-sm mx-auto">
            <div className="text-center mb-8">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                <img src={wifi} alt="" />
              </div>

              <h2 className="text-2xl font-semibold text-white">
                Secure Sign-In
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Authenticate to access control systems
              </p>
            </div>
            {/* EMAIL */}
            <div className="mb-4">
              <label className="text-xs text-cyan-400 tracking-widest">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#0b1224] border border-cyan-900/40 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                name="name"
                value={formdata.email}
                onChange={handlechange}
                required
              />
              <span className="text-cyan-200">{error}</span>
            </div>
            {/* PASSWORD */}
            <div className="mb-4">
              <label className="text-xs text-cyan-400 tracking-widest">
                PASSWORD
              </label>
              <input
                type="password"
                name="password"
                onChange={handlechange}
                placeholder="••••••••••"
                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#0b1224] border border-cyan-900/40 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
                value={formdata.password}
              />
              <span className="text-cyan-200">{error}</span>
            </div>
            {/* FORGOT PASSWORD */}
            <div className="flex justify-end mb-6">
              <button className="text-xs text-gray-400 hover:text-cyan-400 transition cursopo cursor-pointer">
                Forgot Password?
              </button>
            </div>
            {/* LOGIN BUTTON */}
            <button
              className="w-full py-3 rounded-xl font-semibold text-black bg-linear-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition shadow-lg shadow-cyan-500/20 cursor-pointer"
              onSubmit={handleSubmit}
            >
              LOGIN →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
