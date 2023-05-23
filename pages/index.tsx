import { ConnectWallet, useContract, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useState } from "react";



const Home: NextPage = () => {
  const contractaddress = "0x2C909eA1D9F810f9fc8076b2B62Ca6715A230576"
  const {contract} = useContract(contractaddress);
  const [countrer, setcounter] = useState<string | undefined>(undefined);
  
  async function getCounter() {
    if (!contract) return;
    
    const counter = await contract.call('getcounter');
    setcounter(counter.toString());
  }
  getCounter()
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Counter Dapp</h1>
        <h3>{countrer}</h3>
        <Web3Button
        theme="dark"
        contractAddress={contractaddress}
        action={()=> getCounter()}
        >Refresh button</Web3Button>
        <br />
        <Web3Button
        theme="dark"
        contractAddress={contractaddress}
        action={(contract) => contract.call('incrementcounter')}
        >Increment button</Web3Button>
      </main>
    </div>
  );
};

export default Home;
