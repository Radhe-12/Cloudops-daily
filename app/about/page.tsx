export default function AboutPage() {

  return (
    <main className="max-w-4xl mx-auto p-10">

      <h1 className="text-5xl font-bold mb-8">
        About CloudOps Daily 🚀
      </h1>

      <div className="space-y-6 text-lg leading-8 text-gray-700">

        <p>
          CloudOps Daily is a modern full-stack tech blogging platform
          focused on DevOps, Cloud Computing, Docker, Kubernetes,
          AWS, Linux, and modern infrastructure technologies.
        </p>
        <p>
          This project was built using Next.js 16, PostgreSQL,
          Prisma ORM, and Tailwind CSS with a production-style
          architecture and responsive design.
        </p>

        <p>
          Features include dynamic article publishing, admin dashboard,
          responsive UI, image-based articles, and database-driven routing.
        </p>

        <p>
          Built by a DevOps Engineer passionate about cloud infrastructure,
          automation, CI/CD pipelines, Kubernetes, and scalable systems.
        </p>

      </div>

    </main>
  );
}