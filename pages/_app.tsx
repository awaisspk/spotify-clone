import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { PlayerLayout } from "../components/playerLayout";
import "reset-css";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#f5f5f5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Buttons: {
      variants: {
        links: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

type ComponentProps = {
  authPage: boolean;
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      {Component.authPage ? (
        <Component {...pageProps} />
      ) : (
        <PlayerLayout>
          <Component {...pageProps} />
        </PlayerLayout>
      )}
    </ChakraProvider>
  );
};

export default MyApp;
