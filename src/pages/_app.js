import { ChakraProvider, Flex } from "@chakra-ui/react";
import { theme } from "@/theme/theme";
import { fonts } from "./fonts/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-plusJakartaSans: ${fonts.plusJakartaSans.style.fontFamily};
          }
          #__next {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-between;
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
        <Header />
        <Flex as="main" flexGrow="1">
          <Component {...pageProps} />
        </Flex>
        <Footer />
      </ChakraProvider>
    </>
  );
}
