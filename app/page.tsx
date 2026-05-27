export const dynamic = "force-dynamic";
export const revalidate = 0;
import Link from "next/link";
import { prisma } from "../lib/prisma";

export default async function HomePage() {

  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <main className="p-10 max-w-6xl mx-auto">

      <section className="mb-16 text-center py-20">

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          CloudOps Daily 🚀
        </h1>

        <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 px-4">
          Latest updates on DevOps, Docker, Kubernetes,
          Cloud Computing, AWS, Linux, and modern tech trends.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 px-4">

          <Link
            href="/admin"
            className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-80"
          >
            Create Article
          </Link>

          <Link
            href="/about"
            className="border px-6 py-3 rounded-xl hover:bg-gray-100"
          >
            Learn More
          </Link>

        </div>

      </section>

      <div className="space-y-10">
        {posts.length === 0 && (
          <div className="bg-white p-10 rounded-2xl text-center shadow">
            <h2 className="text-3xl font-bold mb-4">
              No Article yet
            </h2>

            <p className="text-gray-600">
              start building cloud and devops article from the admin panel.
            </p>
          </div>

        )}

        {featuredPost && (

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

            <div className="p-10">
              {featuredPost.imageUrl && (
                <img
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  className="w-full h-48 object contain rounded-2xl mb-6 bg-gray-100 p-4"
                  />
              )}
              <p className="text-sm text-blue-600 font-semibold mb-4">
                Featured Article
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                {featuredPost.title}
              </h2>

              <p className="text-lg text-gray-700 leading-8 mb-8">
                {featuredPost.content.substring(0, 250)}...
              </p>

              <Link
                href={`/posts/${featuredPost.slug}`}
                className="bg-black text-white px-6 py-3 rounded-xl inline-block"
              >
                Read Featured Article
              </Link>

            </div>

          </div>

        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {remainingPosts.map((post: any) => (

            <div
              key={post.id}
              className="border rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 bg-white"
            >
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-60 object-cover rounded-xl mb-6"
                  />
              )}
              <p className="text-sm text-gray-500 mb-3">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>

              <h2 className="text-3xl font-bold mb-4 hover:text-blue-600 transition">
                {post.title}
              </h2>

              <p className="text-gray-700 leading-7 mb-6">
                {post.content.substring(0, 180)}...
              </p>

              <Link
                href={`/posts/${post.slug}`}
                className="text-blue-600 font-semibold hover:underline"
              >
                Read Full Article →
              </Link>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}