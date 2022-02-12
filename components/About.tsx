import React from 'react'
import Image from 'next/image'
import profile_light from '../public/fb_bone.jpeg'
import profile_dark from '../public/fb_dark_bone.jpeg'
import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { socialLinks } from '../socials/socialLinks'

const About: React.FunctionComponent = () => {
  const { theme } = useTheme()

  return (
    <section className="container mx-auto px-4">
      <div className="item-center flex flex-col-reverse text-center lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
        <div className="lg:mt-12 lg:px-4 ">
          <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white lg:text-5xl">
            Diego Herrada
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              Hey! I am Diego and I am currently working as a full-stack
              Software Engineer at Sonic Leads and Development.
            </p>
            <p className="mb-4">
              I graduated from the University of North Florida with degrees in
              Computer Science and Music (Jazz Studies). I'm a big fan of
              collaboration and I'm always striving to learn something new.
            </p>
            <p className="mb-4">
              Feel free to reach out to me on any of my social media accounts
              linked below.
            </p>
            <p className="mb-4"></p>
          </div>
        </div>

        <div className="flex-shrink-0 lg:mt-12 lg:px-4">
          <Image
            src={theme === 'light' ? profile_dark : profile_light}
            alt="Profile"
            priority={true}
            className="h-32 w-32 rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
          <div className="mt-8 flex flex-row justify-center space-x-8">
            {socialLinks.map(({ name, icon, url }) => (
              <a key={name} href={url} target="_blank">
                <FontAwesomeIcon
                  icon={icon}
                  className="hover:bounceNew mb-1 h-8"
                  color=""
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
