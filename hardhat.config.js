require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const projectId = process.env.INFURA_PROJECT_ID;
const privateKey = process.env.DEPLOYER_SIGNER_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url:`https://rinkeby.infura.io/v3/${projectId}`,
      accounts: [
        privateKey
      ],
      gas: 95000000000, //*95 Gwei OR 95,000,000,000 wei
    }
  }
};
