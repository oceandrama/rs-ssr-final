import { CreateEventForm } from "@/features/create-event";
import { CreateEventSchema, trpc } from "@/shared/api";

export default function CreateEvent() {
  const { mutate } = trpc.event.create.useMutation();

  const handleSubmit = (data: CreateEventSchema) => {
    mutate(data);
  };

  return (
    <div className="mx-auto max-w-4xl">
      <CreateEventForm onSubmit={handleSubmit} />
    </div>
  );
}