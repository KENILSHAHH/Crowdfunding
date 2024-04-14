/**
 * @format
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'base',
    networks: {
      hardhat: {},
      base: {
        url: 'https://sepolia.infura.io/v3/',
        accounts: [
          `c04f2876f3691d44fdba3592bf800c05516d419f10ac269a7a565c21dfda57fa`,
        ],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
