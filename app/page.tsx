import { Card } from "@/components/Card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Card title="My Card" description="This is a simple card component." />
    </div>
  );
}
