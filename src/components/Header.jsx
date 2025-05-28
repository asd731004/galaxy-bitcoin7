import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { t } = useTranslation()

  return (
    <header className="text-center py-6">
      <h1 className="text-3xl font-extrabold tracking-wide">{t('title')} 🚀</h1>
    </header>
  )
}
