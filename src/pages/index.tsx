import { trpc } from "@/shared/api";

export default function Home() {
  const { data } = trpc.hello.useQuery({ name: "Name 2" });

  return <pre>{data}</pre>;
}
