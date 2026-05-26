"use client";

import { useState } from "react";


export default function AdminPage() {
  
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

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

      setLoading(false);
    }
  }

  return (
    <main className="p-10 max-w-2xl mx-auto">

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
          required
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

    </main>
  );
}