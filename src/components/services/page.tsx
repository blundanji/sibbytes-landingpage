'use client'

import React from 'react'
import { Typography } from '@/components/ui/typography'

const ServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Typography variant="h1" className="text-black">
        Our Services
      </Typography>
      <Typography variant="p" className="text-black mt-4">
        At Sybbytes, we offer a wide range of services
        including automation, data analytics, and cloud
        solutions.
      </Typography>
    </div>
  )
}

export default ServicesPage
