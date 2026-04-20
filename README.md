# Wormhole NTT Connect demo

This project sets up a Next.js React TypeScript application and integrates it with the Wormhole Connect SDK.

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** & **TypeScript**
- **Yarn**

## Setup

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/PratibhaRaskar/My_Wormhole_NTT_Connect_Demo.git
cd My_Wormhole_NTT_Connect_Demo
```

### 2. Download Dependencies

Install all required dependencies using Yarn:

```bash
yarn
```

### 3. Configure deployment.json

Create a `deployment.json` file in the root of the project. This file describes your NTT deployment across chains and is used to configure the Wormhole Connect widget.

**Structure:**

```json
{
  "network": "Testnet",
  "chains": {
    "Sepolia": {
      "version": "2.0.0",
      "mode": "burning",
      "paused": false,
      "owner": "0xYourOwnerAddress",
      "manager": "0xYourNttManagerAddress",
      "token": "0xYourTokenAddress",
      "transceivers": {
        "threshold": 1,
        "wormhole": {
          "address": "0xYourWormholeTransceiverAddress",
          "pauser": "0xYourPauserAddress"
        }
      },
      "limits": {
        "outbound": "1000.000000000000000000",
        "inbound": {
          "ArbitrumSepolia": "1000.000000000000000000"
        }
      },
      "pauser": "0xYourPauserAddress",
      "managerVariant": "standard"
    }
  }
}
```

**Fields explained:**

| Field | Description |
|-------|-------------|
| `network` | `"Mainnet"` or `"Testnet"` |
| `chains` | Map of chain names to their NTT deployment info |
| `mode` | `"burning"` (burn-and-mint) or `"locking"` (lock-and-mint) |
| `owner` | Wallet address that owns the NTT contracts |
| `manager` | Deployed `NttManager` contract address |
| `token` | ERC-20 token contract address |
| `transceivers.wormhole.address` | Deployed Wormhole transceiver address |
| `limits.outbound` | Max tokens that can be sent out per period |
| `limits.inbound` | Max tokens receivable from each source chain |

> You get these addresses after deploying NTT contracts using the [NTT CLI](https://github.com/wormhole-foundation/native-token-transfers).

### 4. Adjust WormholeConnectConfig

Adjust the `WormholeConnectConfig` in [src/app/page.tsx](src/app/page.tsx) based on your `deployment.json`. This configuration is essential to ensure proper integration with your deployment environment.

### 5. Run the App

Start the development server:

```bash
yarn dev
```

### 6. Important Notes
   - Use a private RPC for mainnet, to prevent timeouts