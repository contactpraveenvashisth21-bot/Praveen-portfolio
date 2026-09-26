'use client'

import { useEffect } from 'react'

export function TawkChat() {
  useEffect(() => {
    if (document.querySelector('script[data-tawk-chat]')) return

    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://embed.tawk.to/6ab7caf93226f8344c8be843/1k3ev1nu5'
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')
    script.dataset.tawkChat = 'true'

    document.head.appendChild(script)
  }, [])

  return null
}