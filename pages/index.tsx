import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Meta from "../components/Meta";
import { ChatEngine, MessageFormSocial } from "react-chat-engine";
import useLocalStorage from "use-local-storage";

const Home: NextPage = () => {
  const [username, _] = useLocalStorage<string>("username", "");
  const [secret, __] = useLocalStorage<string>("secret", "");

  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== undefined) {
      if (!username || !secret) router.push("auth");

      setShowChat(true);
    }
  }, [router, secret, username]);

  useEffect(() => {
    if (username === "" || secret === "") {
      router.push("/");
    }
  }, [username, secret, router]);

  if (!showChat) return <div />;

  return (
    <>
      <Meta title="Home" />
      <div>
        <ChatEngine
          height="100vh"
          projectID="464464ed-d2e2-4c63-8acc-347cce5e908b"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
          onNewMessage={() =>
            new Audio(
              "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
            ).play()
          }
        />
      </div>
    </>
  );
};

export default Home;
