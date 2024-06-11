'use client'

import React from 'react'
import { Typography } from '@/components/ui/typography'

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Typography variant="h1" className="text-black">
        Contact Us
      </Typography>
      <form className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-black"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md
              shadow-sm py-2 px-3 text-black"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-black"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md
              shadow-sm py-2 px-3 text-black"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-black"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md
              shadow-sm py-2 px-3 text-black"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md
              shadow-sm text-sm font-medium text-white bg-blue-600
              hover:bg-blue-700"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactPage
