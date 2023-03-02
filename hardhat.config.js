require("@nomicfoundation/hardhat-toolbox");
const ALCHEMY_API_KEY = "BK0w8CuwvurJrAbNRJe40Cg9UG__JaBD";
const GOERLI_PRIVATE_KEY = "9c2899aa5191619a7f5c6921d13a68d129cc1d136859ae21209ba72bedfc7b82";

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};