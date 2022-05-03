import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import useLocalStorage from "use-local-storage";
import Meta from "../components/Meta";

interface AuthInput {
  email: string;
  secret: string;
}

const Home: NextPage = () => {
  const [_, setUsername] = useLocalStorage<string>("username", "");
  const [__, setSecret] = useLocalStorage<string>("secret", "");

  const router = useRouter();

  const { register, handleSubmit } = useForm<AuthInput>();

  const onSubmit: SubmitHandler<AuthInput> = (data) => {
    console.log(data);
    if (data.email.length < 4 || data.secret.length < 4) return;
    console.log(data);

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username: data.email, secret: data.secret },
        { headers: { "Private-Key": "ac84cf90-1c05-4da4-9b9e-56a031e0617e" } }
      )

      .then((r) => {
        setUsername(data.email);
        setSecret(data.secret);
        router.push("/");
      });
  };

  return (
    <>
      <Meta title="Authentication" />
      <div className="background">
        <div className="auth-container">
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="auth-title">NextJS Chat</div>

            <div className="inputs-container">
              <div className="input-container">
                <input
                  placeholder="Email"
                  className="text-input"
                  {...register("email")}
                />
              </div>

              <div className="input-container">
                <input
                  type="password"
                  placeholder="Password"
                  className="text-input"
                  {...register("secret")}
                />
              </div>

              <button type="submit" className="submit-button">
                Login / Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
