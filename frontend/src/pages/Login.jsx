import { useForm } from "react-hook-form";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/auth/login", data);
      login(res.data.token, res.data.user);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <input
            {...register("password", { required: true })}
            placeholder="Password"
            type="password"
            className="w-full p-2 border rounded"
          />

          <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Login
          </button>
        </form>

        <p className="text-center mt-3 text-sm">
          New here?{" "}
          <Link to="/register" className="text-blue-600 underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
