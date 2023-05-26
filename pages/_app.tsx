import type { AppProps } from "next/app";
import { ThirdwebProvider, metamaskWallet,coinbaseWallet,localWallet, walletConnect  } from "@thirdweb-dev/react";
import {Mumbai, FantomTestnet} from "@thirdweb-dev/chains"
import "../styles/globals.css";
import {Analytics} from "@vercel/analytics/react";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
    activeChain={Mumbai} 
    supportedWallets={[ metamaskWallet() , coinbaseWallet(), localWallet(), walletConnect()]}
    >
      <Component {...pageProps} />
      <Analytics/>
    </ThirdwebProvider>
  );
}

export default MyApp;
