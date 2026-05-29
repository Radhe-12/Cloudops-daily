import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  const { id } = await params;

  await prisma.post.update({
    where: {
      id: Number(id),
    },
    data: {
      isDeleted: true,
    },
  });

  return NextResponse.json({
    success: true,
  });
}