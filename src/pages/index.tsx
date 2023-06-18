import { EventCard } from "@/entities/event";
import { trpc } from "@/shared/api";

export default function Home() {
  const { data } = trpc.event.findMany.useQuery();

  return (
    <ul className="mx-auto max-w-4xl">
      {data?.map((event) => (
        <li key={event.id} className="mb-6">
          <EventCard {...event}/>
        </li>
      ))}
    </ul>
  );
}
