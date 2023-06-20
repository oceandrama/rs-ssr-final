import { EventCard } from "@/entities/event";
import { JoinEventButton } from "@/features/join-event";
import { LeaveEventButton } from "@/features/leave-event";
import { trpc } from "@/shared/api";
import { useSession } from "next-auth/react";
import { useMemo } from "react";

export default function Home() {
  const session = useSession();
  const { data: events, refetch } = trpc.event.findMany.useQuery();

  return (
    <ul>
      {events?.map((event) => {
        const Action = event.isJoined ? LeaveEventButton : JoinEventButton;

        return (
          <li key={event.id} className="mb-6">
            <EventCard
              {...event}
              action={
                session.status === "authenticated" && (
                  <Action eventId={event.id} onSuccess={refetch} />
                )
              }
            />
          </li>
        );
      })}
    </ul>
  );
}
