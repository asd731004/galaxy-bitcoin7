import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="mt-4 px-4 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm"
    >
      🌐 {t('language')} ({i18n.language === 'en' ? '中文' : 'EN'})
    </button>
  )
}
