import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config"
const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks:{
    BscTestnet:{
      url: process.env.URL_RPC,
      accounts: [String(process.env.PRIVATE_KEY)],
    }
  }
};

export default config;
