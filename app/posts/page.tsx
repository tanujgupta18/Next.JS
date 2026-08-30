export default async function Posts() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center min-h-screen py-2">
      {posts.map((post: any) => (
        <div
          key={post.id}
          className="bg-white shadow-md rounded p-4 mb-4 w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-black">{post.title}</h1>
          <p className="text-gray-700">{post.body}</p>
        </div>
      ))}
    </div>
  );
}
