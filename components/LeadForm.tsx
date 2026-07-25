"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const leadSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email"),
  budget: z.string().min(1, "Please select a budget"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type LeadFormData = z.infer<typeof leadSchema>;

export default function LeadForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

const onSubmit = async (data: LeadFormData) => {
  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      alert(result.message || "Something went wrong.");
      return;
    }

    alert(result.message);
  } catch (error) {
    console.error(error);
    alert("Server error.");
  }
};

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-xl">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Lead Capture Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Name</label>

          <input
            {...register("name")}
            className="w-full border rounded-lg p-3"
            placeholder="Enter your name"
          />

          <p className="text-red-500 text-sm">
            {errors.name?.message}
          </p>
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>

          <input
            {...register("email")}
            className="w-full border rounded-lg p-3"
            placeholder="Enter your email"
          />

          <p className="text-red-500 text-sm">
            {errors.email?.message}
          </p>
        </div>

        {/* Budget */}
        <div>
          <label className="block mb-1 font-medium">
            Budget Range
          </label>

          <select
            {...register("budget")}
            className="w-full border rounded-lg p-3"
          >
            <option value="">Select Budget</option>
            <option value="<5000">Less than ₹5,000</option>
            <option value="5000-10000">₹5,000 - ₹10,000</option>
            <option value="10000-50000">₹10,000 - ₹50,000</option>
            <option value="50000+">Above ₹50,000</option>
          </select>

          <p className="text-red-500 text-sm">
            {errors.budget?.message}
          </p>
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 font-medium">
            Message
          </label>

          <textarea
            {...register("message")}
            rows={5}
            className="w-full border rounded-lg p-3"
            placeholder="Write your message..."
          />

          <p className="text-red-500 text-sm">
            {errors.message?.message}
          </p>
        </div>

        <button
          className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}