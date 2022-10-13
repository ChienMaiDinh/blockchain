require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIV_KEY]
    }
  },
  etherscan: {
    apiKey: {
      goerli: '983JKFJSH3G6QT2IBR483WIUQNTY1BGZER'
    }
  }
};
