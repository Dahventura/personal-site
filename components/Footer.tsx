import { socialLinks } from '../socials/socialLinks'
import React from 'react'

const Footer: React.FunctionComponent = () => {
  return (
    <div className="py-6 sm:py-12 sm:pb-36 lg:mt-10">
      <div className="mx-auto max-w-4xl px-4 text-gray-800 dark:text-white">
        <section className="dark:border-white-300 mb-2 border-t-2 border-gray-300 pb-8"></section>
        <span className="flex flex-col items-center justify-between lg:flex-row">
          <p>Built with Next.js, Tailwind and Vercel. 2022 © Diego Herrada</p>
          <div className="flex flex-wrap space-x-2 pt-2 font-medium sm:space-x-4 lg:pt-0">
            {socialLinks
              .filter((link) => link.name !== 'Instagram')
              .map(({ name, url }) => (
                <a
                  key={name}
                  href={url}
                  className={
                    'transition-colors hover:text-yellow-500 dark:text-white'
                  }
                >
                  {name}
                </a>
              ))}
          </div>
        </span>
      </div>
    </div>
  )
}

export default Footer
