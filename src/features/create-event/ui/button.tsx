import Link from "next/link";

export const CreateEventButton = () => {
  return (
    <Link
      href="/events/create"
      className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
    >
      Создать событие
    </Link>
  );
};

type EditEventButtonProps = {
  id: number;
};

export const EditEventButton = ({ id }: EditEventButtonProps) => {
  return (
    <Link
      href={`/events/${id}/edit`}
      className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      Редактировать событие
    </Link>
  );
};
