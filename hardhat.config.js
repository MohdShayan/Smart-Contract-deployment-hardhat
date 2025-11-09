import "@nomiclabs/hardhat-ethers";
import dotenv from "dotenv";

dotenv.config();

export default {
  solidity: "0.8.20",
  networks: {
    story: {
      url: "https://aeneid.storyrpc.io",
      chainId: 1315,
      accounts: [process.env.PRIVATE_KEY],

    },
  },
  
};

