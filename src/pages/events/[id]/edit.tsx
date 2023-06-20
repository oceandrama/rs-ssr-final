import { CreateEventForm } from "@/features/create-event";
import { CreateEventSchema, trpc } from "@/shared/api";
import { useRouter } from "next/router";

export default function EditEvent() {
  const router = useRouter();
  const utils = trpc.useContext();

  const { data: event } = trpc.event.findUnique.useQuery({
    id: Number(router.query.id),
  });

  const { mutate } = trpc.event.update.useMutation({
    onSuccess: (data) => {
      utils.event.findUnique.setData({ id: data.id }, (prev) => ({
        ...data,
        participations: prev?.participations ?? [],
      }));

      router.push(`/events/${data.id}`);
    },
  });

  const handleSubmit = (data: CreateEventSchema) => {
    mutate({ id: event!.id, data });
  };

  if (!event) {
    return "No data";
  }

  return (
    <CreateEventForm
      onSubmit={handleSubmit}
      onCancel={router.back}
      defaultValues={event}
      okText="Обновить"
    />
  );
}
