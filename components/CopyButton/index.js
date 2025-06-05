'use client'

import { CopyIcon } from 'lucide-react'
import { toast } from 'sonner'

export default function CopyButton({ text }) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    toast.success('Copied to clipboard')
  }

  return (
    <button onClick={handleCopy}>
      <CopyIcon className="w-4 h-4" onClick={handleCopy}/>
    </button>
  )
}
