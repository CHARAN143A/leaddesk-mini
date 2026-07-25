import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email"),
  budget: z.string().min(1, "Please select a budget"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});