import { trpc } from "@/shared/api";

type JoinEventButtonProps = {
  eventId: number;
};

export const JoinEventButton = ({ eventId }: JoinEventButtonProps) => {
  const { mutate } = trpc.event.join.useMutation();

  const handleClick = () => {
    mutate({ id: eventId });
  };

  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-black text-white"
      onClick={handleClick}
    >
      Присоединиться
    </button>
  );
};
