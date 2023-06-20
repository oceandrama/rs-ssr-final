import { EventDetail } from "@/entities/event";
import { EditEventButton } from "@/features/create-event";
import { trpc } from "@/shared/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Event() {
  const router = useRouter();
  const session = useSession();

  const { data: event, isLoading } = trpc.event.findUnique.useQuery({
    id: Number(router.query.id),
  });

  if (isLoading) {
    return "Loading...";
  }

  if (session.status === "unauthenticated") {
    return "Forbidden";
  }

  if (!event) {
    return "No data";
  }

  return (
    <EventDetail
      {...event}
      action={
        session.data?.user.id === event.authorId && (
          <EditEventButton id={event.id} />
        )
      }
    />
  );
}
