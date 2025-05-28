import React, { useEffect, useState } from 'react'
import { Web3Modal } from '@web3modal/standalone'
import { ethers } from 'ethers'
import { useTranslation } from 'react-i18next'

export default function WalletConnect() {
  const [address, setAddress] = useState(null)
  const { t } = useTranslation()

  const connectWallet = async () => {
    try {
      const modal = new Web3Modal()
      const provider = await modal.connect()
      const web3Provider = new ethers.BrowserProvider(provider)
      const signer = await web3Provider.getSigner()
      setAddress(await signer.getAddress())
    } catch (err) {
      console.error('Wallet connect error:', err)
    }
  }

  return (
    <div className="text-center mt-4">
      {address ? (
        <p className="text-green-300">🔓 {address.slice(0, 6)}...{address.slice(-4)}</p>
      ) : (
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold"
        >
          {t('connect')}
        </button>
      )}
    </div>
  )
}
