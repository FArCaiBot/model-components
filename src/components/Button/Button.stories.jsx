import { Button } from "./Button";

export default {
  component: Button,
};

export const Boton = {
  name: "Botón",
  argTypes: {
    label: {
      control: "text",
      description: "Contenido del boton",
    },
    type: {
      control: "radio",
      options: ["neumorphism", "normal"],
    },
    textColor: {
      control: "color",
      presetColors: ["red", "green"],
    },
    transform: {
      control: "radio",
      options: ["uppercase", "capitalize", "lowercase", "none", "unset"],
    },
    spacing: {
      control: { type: "range", min: 1, max: 20, step: 1 },
    },
  },
};
