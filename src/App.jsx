import React from 'react'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import PriceCard from './components/PriceCard'
import WalletConnect from './components/WalletConnect'
import LanguageSwitcher from './components/LanguageSwitcher'

export default function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-space bg-cover text-white">
      <div className="backdrop-blur-sm bg-black/50 min-h-screen">
        <Header />
        <main className="p-6 flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold mt-10">{t('welcome')}</h1>
          <div className="flex gap-4 flex-wrap justify-center">
            <PriceCard symbol="bitcoin" name="BTC" />
            <PriceCard symbol="ethereum" name="ETH" />
            <PriceCard symbol="solana" name="SOL" />
          </div>
          <WalletConnect />
          <LanguageSwitcher />
        </main>
      </div>
    </div>
  )
}
