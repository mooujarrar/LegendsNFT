/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
require('dotenv').config()

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
     hardhat: {},
     goerli: {
        url: API_URL,
        accounts: [`0x${PRIVATE_KEY}`]
     }
  },
};
