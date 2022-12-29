require("hardhat-deploy");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 80001,
      blockConfirmations: 6,
    },
    // localhost: {
    //   accounts: [],
    //   url: "http://127.0.0.1:8545",
    // },
    hardhat: {
      chainId: 31337,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};
