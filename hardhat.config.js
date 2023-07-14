/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");

// We use alchemy becuase alchemy enables us to create a node without actually running it on our local machine;
const ALCHEMY_API_KEY = "Enter API Key here";
const SEPOLIA_PRIVATE_KEY = "Enter private key here";

module.exports = {
  solidity: "0.8.19",

  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`, 
      accounts: [`${SEPOLIA_PRIVATE_KEY}`]
    }
  }
};
