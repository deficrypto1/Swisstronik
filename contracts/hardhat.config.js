require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x6dd34F25c0A4B14Ca2D7F31fF31f0eCF2C597E35"], //6300e944985cfd7301afe38e8ad47b94831d1a5267bb0d191e62529a9b97105b "0x"
    },
  },
};
