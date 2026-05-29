import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

  const posts = await prisma.post.findMany({
    where: {
      isDeleted: false,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(posts);
}

export async function POST(request: Request) {

  try {

    const body = await request.json();

    const post = await prisma.post.create({
      data: {
        title: body.title,
        slug: body.slug,
        content: body.content,
        imageUrl: body.imageUrl,
      },
    });

    console.log("POST CREATED:", post);

    return NextResponse.json(post);

  } catch (error) {

    console.log("ERROR:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}