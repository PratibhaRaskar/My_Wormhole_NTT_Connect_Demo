'use client';

import WormholeConnect, {
  type config,
  WormholeConnectTheme,
} from '@wormhole-foundation/wormhole-connect';
import {
  nttRoutes,
} from '@wormhole-foundation/wormhole-connect/ntt';

const nttConfig = {
  tokens: {
    PNRVTOKEN: [
      {
        chain: 'Sepolia' as const,
        manager: '0x83d539241c6Fe6Cfb445a1f9d5682541A780a362',
        token: '0xF6835bddc94AF6403604A167cEe3465ECC632e60',
        transceiver: [
          {
            address: '0xd4c22297C83e68c65028Aa3a40125BbF1F408E0E',
            type: 'wormhole' as const,
          },
        ],
      },
      {
        chain: 'ArbitrumSepolia' as const,
        manager: '0x005f0Fa03E409b2C15c53DdF2F568CBCE2E4EF3c',
        token: '0x735ab671d58B3eE565Dc4d37e25E29a2dEA79A80',
        transceiver: [
          {
            address: '0x96E08c1Ad47f791EE5a422b2cB30f1831588594E',
            type: 'wormhole' as const,
          },
        ],
      },
      {
        chain: 'PolygonSepolia' as const,
        manager: '0xf6be7F9C1Ff3acFe8c6453480D2150DfA9831e52',
        token: '0xF8Cdfe355d6ba13BB01412Ec424198D8e8af4950',
        transceiver: [
          {
            address: '0xCb4657FE0020d3dB2cc65f0d7BE31B6cE08d2291',
            type: 'wormhole' as const,
          },
        ],
      },
      {
        chain: 'Avalanche' as const,
        manager: '0x26C834fCC6959355C351a8a34987b64bE8B59643',
        token: '0x8CC481B3632dEF464ddE8B7e5854eAE03B1C6B8E',
        transceiver: [
          {
            address: '0x645D5B5c317a8046c678F243396B215DCA9A4f46',
            type: 'wormhole' as const,
          },
        ],
      },
       {
        chain: 'Solana' as const,
        manager: 'NtTUXRATZuiMW5VqxzV5EpRLNz7DC6XD1yoSrGRgb8U',
        token: 'DKAERWxhXpz4NKbPeSFm6UxKH255hASx3nbW3PhtgEJo',
        transceiver: [
          {
            address: 'DGNBnKTLGX6ejMFdQWkSpFUEcKeCZb4NHeJbW1BZpT5p',
            type: 'wormhole' as const,
          },
        ],
      },
    ],
  },
};

const wormholeConfig: config.WormholeConnectConfig = {
  network: 'Testnet',
  chains: ['Sepolia', 'ArbitrumSepolia', 'PolygonSepolia', 'Avalanche','Solana'],
  rpcs: {
    Sepolia: 'https://eth-sepolia.g.alchemy.com/v2/g80ir26BiAT0tyaVzpU3Y7kY3XotuLtA',
    ArbitrumSepolia: 'https://arb-sepolia.g.alchemy.com/v2/NDqvoUE_XBGDCypGbyY8-JdSaiNxtA67',
    PolygonSepolia: 'https://polygon-amoy.g.alchemy.com/v2/YeGGmstRxNqPlb6via3NfL1nFPbT_IQY',
    Avalanche: 'https://avax-fuji.g.alchemy.com/v2/YeGGmstRxNqPlb6via3NfL1nFPbT_IQY',
    Solana: 'https://api.devnet.solana.com',
  },
  routes: [
    ...nttRoutes(nttConfig),
  ],
  tokensConfig: {
    PNR_SEP: {
      symbol: 'PNRVTOKEN',
      decimals: 18,
      icon: 30,
      tokenId: {
        chain: 'Sepolia',
        address: '0xF6835bddc94AF6403604A167cEe3465ECC632e60',
      },
    },
    PNR_ARB: {
      symbol: 'PNRVTOKEN',
      decimals: 18,
      icon: 30,
      tokenId: {
        chain: 'ArbitrumSepolia',
        address: '0x735ab671d58B3eE565Dc4d37e25E29a2dEA79A80',
      },
    },
    PNR_POLY: {
      symbol: 'PNRVTOKEN',
      decimals: 18,
      icon: 30,
      tokenId: {
        chain: 'PolygonSepolia',
        address: '0xF8Cdfe355d6ba13BB01412Ec424198D8e8af4950',
      },
    },
    PNR_AVA: {
      symbol: 'PNRVTOKEN',
      decimals: 18,
      icon: 30,
      tokenId: {
        chain: 'Avalanche',
        address: '0x8CC481B3632dEF464ddE8B7e5854eAE03B1C6B8E',
      },
    },
    PNR_SOL: {
      symbol: 'PNRVTOKEN',
      decimals: 9,
      icon: 30,
      tokenId: {
        chain: 'Solana',
        address: 'DKAERWxhXpz4NKbPeSFm6UxKH255hASx3nbW3PhtgEJo',
      },
    },  
  },
  ui: {
    title: 'PNRVTOKEN NTT Bridge',
    defaultInputs: {
      source: { chain: 'Sepolia' },
      destination: { chain: 'ArbitrumSepolia' },
    },
  },
};

const theme: WormholeConnectTheme = {
  mode: 'dark',
  primary: '#78c4b6',
};

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <div style={{ width: '100%', maxWidth: '480px' }}>
        <WormholeConnect config={wormholeConfig} theme={theme} />
      </div>
    </div>
  );
}
