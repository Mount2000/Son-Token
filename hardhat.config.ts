import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config"
const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks:{
    BscTestnet:{
      url: process.env.URL_RPC,
      accounts: [String(process.env.PRIVATE_KEY)],
    },
    Amoy:{
      url: "https://80002.rpc.thirdweb.com",
      accounts: [String(process.env.PRIVATE_KEY)],
    },
  },
  etherscan: {
    apiKey:
    { bscTestnet: "69BDCGIJ696NG4IS38GPWCH4P9S4SC2ZV9",
      Amoy: "M7V4N9JBK2PCHI74AHHRJERBHHK8XZEFTH"
    }
  }
};

export default config;
