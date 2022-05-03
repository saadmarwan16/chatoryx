import "../styles/globals.css";
import "../styles/auth.css";
import "../styles/chats.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
