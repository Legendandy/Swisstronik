require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["21e98feb2b64f1c04e06ed5f514b5b7f7dd998af760e60d7b1036407c548ff65"], //Your private key starting with "0x21e98feb2b64f1c04e06ed5f514b5b7f7dd998af760e60d7b1036407c548ff65"
    },
  },
};
