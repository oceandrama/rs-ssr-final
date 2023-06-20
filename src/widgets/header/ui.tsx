import { CreateEventButton } from "@/features/create-event";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const session = useSession();

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-4xl items-center p-6">
        <div className="flex flex-1">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" height={28} width={172} />
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          {session.status === "authenticated" ? (
            <button className="mr-2" onClick={() => signOut()}>
              {session.data.user.name} &larr;
            </button>
          ) : (
            <Link href="/api/auth/signin">Войти &rarr;</Link>
          )}

          {session.status === "authenticated" && <CreateEventButton />}
        </div>
      </nav>
    </header>
  );
};
