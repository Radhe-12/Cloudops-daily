import { prisma } from "../../../lib/prisma";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const post = await prisma.post.findUnique({
    where: {
      slug,
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="p-10 max-w-4xl mx-auto">

      <h1 className="text-5xl font-bold mb-6">
        {post.title}
      </h1>

      <p className="text-gray-500 mb-10">
        {new Date(post.createdAt).toLocaleDateString()}
      </p>

      <article className="text-lg leading-8">
        {post.content}
      </article>

    </main>
  );
}