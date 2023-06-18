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
      return {
        greeting: `hello ${input.name}`,
        date: new Date(),
      };
    }),
});

export type AppRouter = typeof appRouter;
