import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const NETWORK_MAPPING = {
  mainnet: {
    1: 'Ethereum Mainnet',
    137: 'Polygon Mainnet',
  },
  testnet: {
    80001: 'Polygon TestNet(Mumbai)',
  },
}

const RPC_URLS = {
  1: 'https://mainnet.infura.io/v3/',
  137: 'https://polygon-rpc.com/',
  80001: 'https://rpc-mumbai.maticvigil.com/',
}

const CHAIN_IDS = Object.keys(
  NETWORK_MAPPING?.[
    process.env.REACT_APP_MODE === 'production' ? 'mainnet' : 'testnet'
  ]
)?.map((chainId) => +chainId)

export const injected = new InjectedConnector({
  supportedChainIds: CHAIN_IDS,
})

export const walletconnect = new WalletConnectConnector({
  rpc: RPC_URLS,
  qrcode: true,
  pollingInterval: 15000,
  supportedChainIds: CHAIN_IDS,
  clientMeta: { name: 'Xungible', description: 'NFT Marketplace', icons: [] },
})

export function resetWalletConnector(connector) {
  if (connector && connector instanceof WalletConnectConnector) {
    connector.walletConnectProvider = undefined
  }
}

// Info
/*
  ChainId for networks:
    Mainnet: 1
    Kovan: 42
    Ropsten: 3
    Rinkeby: 4
    Goerli: 5

  ChainList: https://chainlist.org/

  For our app in production, we will only allow:
    Ethereum Mainnet: 1
    Polygon Mainnet: 137
  
  For development,
   Mumbai Testnet(Polygon): 80001
*/
