import { BigNumber, BigNumberish } from 'ethers';
import { LiteralNetwork, Network } from '../utils';

interface Threshold {
  numerator: BigNumberish;
  denominator: BigNumberish;
}

export type GatewayThreshold = Threshold & {
  highTierVoteWeightNumerator: BigNumberish;
};

interface NetworkThreshold {
  [network: LiteralNetwork]: undefined | Threshold | GatewayThreshold;
}

interface MapNetworkNumberSet {
  [network: LiteralNetwork]: undefined | number[];
}

interface MapNetworkNumber {
  [network: LiteralNetwork]: undefined | BigNumberish;
}

interface MainchainMappedToken {
  [network: LiteralNetwork]:
    | undefined
    | {
        mainchainTokens: string[];
        roninTokens: string[];
        standards: number[];
        highTierThresholds: BigNumberish[];
        lockedThresholds: BigNumberish[];
        unlockFeePercentages: BigNumberish[];
        dailyWithdrawalLimits: BigNumberish[];
      };
}

interface RoninMappedToken {
  [network: LiteralNetwork]:
    | undefined
    | {
        roninTokens: string[];
        mainchainTokens: string[];
        standards: number[];
        chainIds: BigNumberish[];
        minimumThresholds: BigNumberish[];
      };
}

export const validatorThreshold: NetworkThreshold = {
  [Network.Hardhat]: undefined,
  [Network.Devnet]: {
    numerator: 9,
    denominator: 11,
  },
  [Network.GoerliForDevnet]: {
    numerator: 9,
    denominator: 11,
  },
};

export const gatewayThreshold: NetworkThreshold = {
  [Network.Local]: {
    numerator: 70,
    highTierVoteWeightNumerator: 90,
    denominator: 100,
  },
  [Network.Hardhat]: undefined,
  [Network.Devnet]: {
    numerator: 70,
    highTierVoteWeightNumerator: 90,
    denominator: 100,
  },
  [Network.GoerliForDevnet]: {
    numerator: 70,
    highTierVoteWeightNumerator: 90,
    denominator: 100,
  },
};

export const mainnetChainId: MapNetworkNumberSet = {
  [Network.Hardhat]: undefined,
  [Network.Devnet]: [5],
  [Network.Testnet]: [3],
  [Network.Goerli]: [5],
  [Network.GoerliForDevnet]: [5],
  [Network.Ethereum]: [1],
};

export const roninChainId: MapNetworkNumber = {
  [Network.Local]: 2021,
  [Network.Hardhat]: undefined,
  [Network.Devnet]: 2022,
  [Network.Testnet]: 2021,
  [Network.Goerli]: 2021,
  [Network.GoerliForDevnet]: 2022,
  [Network.Ethereum]: 2020,
};

export const mainchainMappedToken: MainchainMappedToken = {
  [Network.Local]: {
    mainchainTokens: [],
    roninTokens: [],
    standards: [0, 0, 0, 0],
    highTierThresholds: [
      BigNumber.from('2200000000000000000'),
      BigNumber.from('1000000000000000000'),
      BigNumber.from('20000'),
      BigNumber.from('2000000'),
    ],
    lockedThresholds: [
      BigNumber.from('3300000000000000000'),
      BigNumber.from('3000000000000000000'),
      BigNumber.from('30000'),
      BigNumber.from('3000000'),
    ],
    unlockFeePercentages: [BigNumber.from(10), BigNumber.from(10), BigNumber.from(10), BigNumber.from(10)],
    dailyWithdrawalLimits: [
      BigNumber.from('45900000000000000000000'),
      BigNumber.from('100000000000000000000'),
      BigNumber.from('13698630100'),
      BigNumber.from('1000000000'),
    ],
  },
  [Network.Hardhat]: undefined,
  [Network.GoerliForDevnet]: {
    mainchainTokens: [
      '0xfe63586e65ECcAF7A41b1B6D05384a9CA1B246a8', // WETH: https://goerli.etherscan.io/token/0xfe63586e65ECcAF7A41b1B6D05384a9CA1B246a8
      '0x8816bde63A8A08B90477Dc5A5FE24EfaF5889cdc', // AXS: https://goerli.etherscan.io/token/0x8816bde63A8A08B90477Dc5A5FE24EfaF5889cdc
      '0x29C6F8349A028E1bdfC68BFa08BDee7bC5D47E16', // SLP: https://goerli.etherscan.io/address/0x29C6F8349A028E1bdfC68BFa08BDee7bC5D47E16
      '0x7A2938588c3616bd2FcC46917bD18EDfbaD69E48', // USDC: https://goerli.etherscan.io/address/0x7A2938588c3616bd2FcC46917bD18EDfbaD69E48
    ],
    roninTokens: [
      '0x29C6F8349A028E1bdfC68BFa08BDee7bC5D47E16', // WETH
      '0x3C4e17b9056272Ce1b49F6900d8cFD6171a1869d', // AXS
      '0x82f5483623D636BC3deBA8Ae67E1751b6CF2Bad2', // SLP
      '0x067FBFf8990c58Ab90BaE3c97241C5d736053F77', // USDC
    ],
    standards: [0, 0, 0, 0],
    highTierThresholds: [
      BigNumber.from('2200000000000000000'),
      BigNumber.from('1000000000000000000'),
      BigNumber.from('20000'),
      BigNumber.from('2000000'),
    ],
    lockedThresholds: [
      BigNumber.from('3300000000000000000'),
      BigNumber.from('3000000000000000000'),
      BigNumber.from('30000'),
      BigNumber.from('3000000'),
    ],
    unlockFeePercentages: [BigNumber.from(10), BigNumber.from(10), BigNumber.from(10), BigNumber.from(10)],
    dailyWithdrawalLimits: [
      BigNumber.from('45900000000000000000000'),
      BigNumber.from('100000000000000000000'),
      BigNumber.from('13698630100'),
      BigNumber.from('1000000000'),
    ],
  },
};

// TODO: fill mainnet config
export const roninMappedToken: RoninMappedToken = {
  [Network.Local]: {
    roninTokens: [],
    mainchainTokens: [],
    standards: [0, 0, 0, 0, 0],
    chainIds: [2021, 2021, 2021, 2021, 2021],
    minimumThresholds: [
      BigNumber.from(10).pow(16), // 0.01 WETH
      BigNumber.from(10).pow(17).mul(5), // 0.5 AXS
      BigNumber.from(100), // 100 SLP
      BigNumber.from(10).pow(18).mul(2), // 20 USDT
      BigNumber.from(10).pow(6).mul(2), // 20 USDC
    ],
  },
  [Network.Hardhat]: undefined,
  [Network.Devnet]: {
    roninTokens: [
      '0x29C6F8349A028E1bdfC68BFa08BDee7bC5D47E16', // WETH
      '0x3C4e17b9056272Ce1b49F6900d8cFD6171a1869d', // AXS
      '0x82f5483623D636BC3deBA8Ae67E1751b6CF2Bad2', // SLP
      '0x04ef1d4f687bb20eedcf05c7f710c078ba39f328', // USDT
      '0x067FBFf8990c58Ab90BaE3c97241C5d736053F77', // USDC
    ],
    mainchainTokens: [
      '0xfe63586e65ECcAF7A41b1B6D05384a9CA1B246a8', // WETH: https://goerli.etherscan.io/token/0xfe63586e65ECcAF7A41b1B6D05384a9CA1B246a8
      '0x8816bde63A8A08B90477Dc5A5FE24EfaF5889cdc', // AXS: https://goerli.etherscan.io/token/0x8816bde63A8A08B90477Dc5A5FE24EfaF5889cdc
      '0x29C6F8349A028E1bdfC68BFa08BDee7bC5D47E16', // SLP: https://goerli.etherscan.io/address/0x29C6F8349A028E1bdfC68BFa08BDee7bC5D47E16
      '0xd749760B0815a25E54b2868041fa886a697a0AD7', // USDT: https://goerli.etherscan.io/address/0xd749760B0815a25E54b2868041fa886a697a0AD7
      '0x7A2938588c3616bd2FcC46917bD18EDfbaD69E48', // USDC: https://goerli.etherscan.io/address/0x7A2938588c3616bd2FcC46917bD18EDfbaD69E48
    ],
    standards: [0, 0, 0, 0, 0],
    chainIds: [5, 5, 5, 5, 5],
    minimumThresholds: [
      BigNumber.from(10).pow(16), // 0.01 WETH
      BigNumber.from(10).pow(17).mul(5), // 0.5 AXS
      BigNumber.from(100), // 100 SLP
      BigNumber.from(10).pow(18).mul(2), // 20 USDT
      BigNumber.from(10).pow(6).mul(2), // 20 USDC
    ],
  },
};
