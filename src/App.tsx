import { Envelope } from "phosphor-react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";

export function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-900 flex-col gap-4">
      <Heading>Hello world</Heading>
      <Text size="lg">Hello world</Text>
      <div className="flex flex-col gap-4 w-80">
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>
          <TextInput.Input placeholder="Type your e-mail address" />
        </TextInput.Root>
        <div className="flex items-center gap-2">
          <Checkbox />
          <Text size="sm">Lembrar-me de mim por 30 dias</Text>
        </div>
        <Button>Create account</Button>
      </div>
    </div>
  );
}
