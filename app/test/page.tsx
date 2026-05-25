import { prisma } from "../../lib/prisma";

export default async function TestPage() {
  const posts = await prisma.post.findMany();

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        Database Connected 🚀
      </h1>

      <pre>
        {JSON.stringify(posts, null, 2)}
      </pre>
    </main>
  );
}