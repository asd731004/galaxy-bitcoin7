import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function PriceCard({ symbol, name }) {
  const [price, setPrice] = useState(null)

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`
        )
        setPrice(res.data[symbol]?.usd)
      } catch (err) {
        console.error(err)
      }
    }
    fetchPrice()
    const interval = setInterval(fetchPrice, 10000)
    return () => clearInterval(interval)
  }, [symbol])

  return (
    <div className="bg-white/10 rounded-2xl p-4 min-w-[160px] text-center shadow-lg">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-2xl">${price ? price.toLocaleString() : '...'}</p>
    </div>
  )
}
