import { chakra, extendTheme, HStack } from "@chakra-ui/react";
import { Button } from "./Button";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  components: {
    Button,
  },
});

export default theme;

export const SemesterColumnsContainer = chakra(HStack, {
  baseStyle: {
    display: "flex",
  },
});
