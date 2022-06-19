import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

export default function WalletProvider({ children = null }) {
  const getLibrary = (provider) => {
    try {
      return new Web3(provider)
    } catch (error) {
      console.error('Ethereum Provider not supported')
      // The error will be thrown here when we try to connect in mobile browsers since we cannot inject the wallet scripts in it. Just like nafter.io we need to tell login with Metamask inside wallet connect or use built in browser of metamask (webview)
    }
  }
  return (
    <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
  )
}
