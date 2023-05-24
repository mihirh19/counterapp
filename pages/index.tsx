import { ConnectWallet, useContract ,useContractRead,Web3Button, useAddress, useContractWrite} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import { useState } from "react";


const Home: NextPage = () => {
  const contractaddress = "0xF2579DEed5230935D93e0f9e60862f23892B9dB7"
  const {contract} = useContract(contractaddress);
  const { data, isLoading, error } = useContractRead(contract, "getcounter");
  
  const add = useAddress();

  return (
    <>
    <div className={styles.container}>
    
      <main className={styles.main}>
      <h1 className={styles.title}>Counter Dapp</h1>
      
        {isLoading ? <h3 className={styles.description}>Loading...</h3> : <h3 className={styles.description}>Counter = {data.toString()}</h3>}
        
        <br />
        {add ? <>
          <br />
        <Web3Button
        theme="dark"
        contractAddress={contractaddress}
        action={(contract) => contract.call('incrementcounter')}
      >Increment button</Web3Button>
      <br />
      <Web3Button
        theme="dark"
        
        contractAddress={contractaddress}
        action={(contract) => contract.call('decrementcounter')}

        
      >Decrement button</Web3Button>
        </>: <h3>Connect to wallet </h3>}
        <br />
        <ConnectWallet theme="dark" btnTitle="Connect" className={styles.connect}/>
      </main>
    </div></>
  );
};

export default Home;
