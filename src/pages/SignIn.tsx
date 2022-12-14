import { Checkbox } from "@radix-ui/react-checkbox";
import axios from "axios";
import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Logo } from "../Logo";

export const SignIn = () => {
  const [isUserSignIn, setIsUserSignIn] = useState(false);

  const handlerSignIn = async (event: FormEvent) => {
    event.preventDefault();

    await axios.post("/sessions", {
      email: "vini.dsd@gmail.com",
      password: "12345678",
    });

    setIsUserSignIn(true);
  };

  return (
    <section className="h-screen w-screen flex items-center justify-center bg-gray-900 flex-col gap-4 text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 m-1">
          Faça o login e comece a usar!
        </Text>
      </header>
      <form
        onSubmit={handlerSignIn}
        className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4"
      >
        {isUserSignIn && <Text>Login Realizado!</Text>}
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              placeholder="johndoe@example.com"
              type="email"
              id="email"
              required
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              placeholder="**********"
              type="password"
              id="password"
              required
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias.
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text
          asChild
          size="sm"
          className="underline text-gray-400 hover:text-gray-200"
        >
          <a href="#">Esqueceu sua senha?</a>
        </Text>
        <Text
          asChild
          size="sm"
          className="underline text-gray-400 hover:text-gray-200"
        >
          <a href="#">Naõ possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </section>
  );
};
