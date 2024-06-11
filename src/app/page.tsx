'use client'

import React from 'react'
import Typography from '@/components/ui/typography'

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Typography variant="h1" className="text-black">
        Welcome to Sybbytes
      </Typography>
      <Typography variant="p" className="text-black mt-4">
        Your go-to solution for automation and data
        services.
      </Typography>
    </div>
  )
}

export default HomePage
