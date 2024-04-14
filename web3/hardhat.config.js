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
          ``,
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
