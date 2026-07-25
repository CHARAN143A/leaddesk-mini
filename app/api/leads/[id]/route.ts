import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { status } = await request.json();

    const updatedLead = await prisma.lead.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });

    return NextResponse.json(updatedLead);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to update status" },
      { status: 500 }
    );
  }
}