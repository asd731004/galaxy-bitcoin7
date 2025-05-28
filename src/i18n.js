import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      title: "Galaxy Bitcoin",
      welcome: "Welcome to Galaxy Bitcoin",
      connect: "Connect Wallet",
      prices: "Live Prices",
      language: "Language",
    }
  },
  zh: {
    translation: {
      title: "银河比特币",
      welcome: "欢迎来到银河比特币",
      connect: "连接钱包",
      prices: "实时价格",
      language: "语言",
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
