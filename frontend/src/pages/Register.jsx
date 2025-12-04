import { useForm } from "react-hook-form";
import api from "../api/axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const password = watch("password");

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await api.post("/auth/register", data);
      navigate("/login");
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <input
            {...register("name", { required: true })}
            placeholder="Full Name"
            className="w-full p-2 border rounded"
          />
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <input
            {...register("password", { required: true, minLength: 6 })}
            type="password"
            placeholder="Password (min 6 chars)"
            className="w-full p-2 border rounded"
          />
          <input
            {...register("confirmPassword", {
              required: true,
              validate: (value) => value === password || "Passwords do not match"
            })}
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 border rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-blue-400"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center mt-3 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}