export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Product Page</h1>
      <p className="mt-4 text-lg text-gray-600">
        This is the product page for product ID: {id}
      </p>
    </div>
  );
}
