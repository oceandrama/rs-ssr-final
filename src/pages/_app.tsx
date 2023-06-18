import type { AppProps } from "next/app";
import { trpc } from "@/shared/api";
import "@/app/global.css";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default trpc.withTRPC(App);
