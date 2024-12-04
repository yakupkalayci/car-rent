import { extendTheme } from "@chakra-ui/react";
import Link from "./components/link";
import colors from "./colors";

export const theme = extendTheme({
  breakpoints: {
    base: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    "2xl": "1440px",
  },
  fonts: {
    heading: "var(--font-plusJakartaSans)",
    body: "var(--font-plusJakartaSans)",
  },
  styles: {
    global: {
      "html, body": {
        height: "100%",
      },
    },
  },
  colors,
  components: {
    Link,
  },
});
