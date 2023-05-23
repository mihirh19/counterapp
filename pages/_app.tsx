import type { AppProps } from "next/app";
import { ThirdwebProvider, metamaskWallet,coinbaseWallet  } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain} supportedWallets={[ metamaskWallet() , coinbaseWallet()]}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
