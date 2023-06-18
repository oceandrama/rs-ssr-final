import { z } from "zod";
import { procedure, router } from "../trpc";

type HelloInput = {
  text: string;
};

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(({ input }) => {
      return `hello ${input.name}`
    }),
});

export type AppRouter = typeof appRouter;
