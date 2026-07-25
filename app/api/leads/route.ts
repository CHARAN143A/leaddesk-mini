import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  budget: z.string(),
  message: z.string().min(20),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const data = leadSchema.parse(body);

    await prisma.lead.create({
      data,
    });

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully!",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit lead",
      },
      { status: 400 }
    );
  }
}