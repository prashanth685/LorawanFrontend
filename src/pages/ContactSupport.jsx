import React from "react";
import bgimage from "../assets/bg-image.png";
import wifi from "../assets/wifi_logo.jpg";
import { useNavigate } from "react-router-dom";

const ContactSupport = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="h-screen flex items-center justify-center bg-[#050814] px-4 py-4"
        style={{
          backgroundImage: `radial-gradient(circle at top, rgba(34,211,238,0.15), transparent 40%), url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-5xl rounded-2xl overflow-hidden border border-cyan-900/40 shadow-[0_0_40px_rgba(34,211,238,0.12)] backdrop-blur-xl flex">
          {/* LEFT PANEL */}
          <div className="hidden md:flex w-1/2 p-6 flex-col justify-center bg-[#050814] from-[#06101f] via-[#050814] to-[#020617] relative">
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

              <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-sm">
                Secure access gateway for industrial IoT telemetry, edge
                devices, and real-time sensor synchronization.
              </p>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="w-full md:w-1/2 p-6 bg-[#020617]/70 backdrop-blur-2xl">
            <form className="max-w-sm mx-auto">
              {/* Header */}
              <div className="text-center mb-5">
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 overflow-hidden">
                  <img
                    src={wifi}
                    alt="wifi"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-xl font-semibold text-white">
                  Secure Sign-In
                </h2>

                <p className="text-gray-400 text-xs mt-1">
                  Authenticate to access control systems
                </p>
              </div>

              {/* Username */}
              <div className="mb-3">
                <label className="text-xs text-cyan-400 tracking-widest">
                  Username
                </label>

                <input
                  type="text"
                  placeholder="Enter your Username"
                  className="w-full mt-1 px-4 py-2 rounded-xl bg-[#0b1224] border border-cyan-900/40 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="text-xs text-cyan-400 tracking-widest">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full mt-1 px-4 py-2 rounded-xl bg-[#0b1224] border border-cyan-900/40 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>

              {/* Subject */}
              <div className="mb-3">
                <label className="text-xs text-cyan-400 tracking-widest">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter your Subject"
                  className="w-full mt-1 px-4 py-2 rounded-xl bg-[#0b1224] border border-cyan-900/40 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>

              {/* Description */}
              <div className="mb-3">
                <label className="text-xs text-cyan-400 tracking-widest">
                  Description
                </label>

                <textarea
                  rows="3"
                  placeholder="Enter your Description"
                  className="w-full mt-1 px-4 py-2 rounded-xl bg-[#0b1224] border border-cyan-900/40 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                  required
                />
              </div>

              {/* Back to Login */}
              <div className="flex justify-end mb-4">
                <button
                  type="button"
                  className="text-xs text-gray-400 hover:text-cyan-400 transition cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Back to login
                </button>
              </div>

              {/* Submit Button */}
              <button
                className="w-full py-3 rounded-xl font-semibold text-black bg-linear-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition shadow-lg shadow-cyan-500/20 cursor-pointer"
                type="submit"
              >
                SUBMIT →
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSupport;
