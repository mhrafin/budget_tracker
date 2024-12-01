"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Form schema validation using zod
const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

// Reusable form component
const Login = () => {
  const [toastMessage, setToastMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    try {
      console.log(data);
      setToastMessage(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      setToastMessage(
        <div className="text-red-500">
          Failed to submit the form. Please try again.
        </div>
      );
    }
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto py-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Username field */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="shadcn"
            {...register("username")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.username && (
            <p className="text-sm text-red-500">{errors.username.message}</p>
          )}
          <p className="text-sm text-gray-500">
            This is your public display name.
          </p>
        </div>

        {/* Password field */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
          <p className="text-sm text-gray-500">Enter your password.</p>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>

      {/* Toast message */}
      {toastMessage && <div className="mt-4">{toastMessage}</div>}
    </div>
  );
};

export default Login;
