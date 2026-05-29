"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const [posts, setPosts] = useState<any[]>([]);

  async function fetchPosts() {

    const response = await fetch("/api/posts");

    const data = await response.json();

    setPosts(data);
  }

  useEffect(() => {

    fetchPosts();

  }, []);

  async function handleSubmit(e: React.FormEvent) {

    e.preventDefault();

    setLoading(true);

    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        slug,
        content,
        imageUrl,
      }),
    });

    if (response.ok) {

      alert("Post Created 🚀");

      setTitle("");
      setSlug("");
      setContent("");
      setImageUrl("");

      fetchPosts();

    } else {

      alert("Failed to create post");

    }

    setLoading(false);
  }

  async function handleDelete(id: number) {

    await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    setPosts(posts.filter((post) => post.id !== id));
  }

  return (
    <main className="p-10 max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full border p-3 rounded"
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border p-3 rounded h-40"
        />

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded"
        >
          {loading ? "Publishing..." : "Create Post"}
        </button>

      </form>

      <div className="mt-12">

        <h2 className="text-3xl font-bold mb-6">
          All Posts
        </h2>

        <div className="space-y-4">

          {posts.map((post) => (

            <div
              key={post.id}
              className="border p-5 rounded-xl flex justify-between items-center"
            >

              <div>
                <h3 className="font-bold text-lg">
                  {post.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {post.slug}
                </p>
              </div>

              <button
                onClick={() => handleDelete(post.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}