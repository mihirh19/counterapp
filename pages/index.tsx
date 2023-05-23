import { ConnectWallet, useContract, Web3Button ,useContractRead} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";



const Home: NextPage = () => {
  const contractaddress = "0xF2579DEed5230935D93e0f9e60862f23892B9dB7"
  const {contract} = useContract(contractaddress);
  // const [countrer, setcounter] = useState<string | undefined>(undefined);
  // const [disabled, changeState] = useState(true)
  const { data, isLoading, error } = useContractRead(contract, "getcounter");
  
  if (error) {
    console.error("failed to read contract", error);
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Counter Dapp</h1>
        {isLoading ? <h3>Loading...</h3> : <h3>Counter = {data.toString()}</h3>} 
        <ConnectWallet theme="dark" modalTitle="Login" />
        <br />
        
        <Web3Button
        theme="dark"
        
        contractAddress={contractaddress}
        action={(contract) => contract.call('incrementcounter')}
        >Increment button</Web3Button>
        <br/>
        <Web3Button
        theme="dark"
        
        contractAddress={contractaddress}
        action={(contract) => contract.call('decrementcounter')}
        >Decrement button</Web3Button>
      </main>
    </div>
  );
};

export default Home;
