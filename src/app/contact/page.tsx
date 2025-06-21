import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'

const ContactPage = () => {

  const contactInfo = [
    {id: 1, title: "Email", value: "sarmadfaizan@outlook.com", link: "mailto:sarmadfaizan@outlook.com", icon: <FaEnvelope />},
    {id: 2, title: "Phone", value: "+92 311 6565767", link: "tel:+923116565767", icon: <FaPhone />},
    {id:3, title: "LinkedIn", value: "https://www.linkedin.com/in/sarmad-faixan-458091128/", link: "https://www.linkedin.com/in/sarmad-faixan-458091128/", icon: <FaLinkedin />},
    {id:4, title: "Github", value: "https://github.com/khan-root", link: "https://github.com/khan-root", icon: <FaGithub />},
  ]

  return (
     <div className="flex flex-col md:grid md:grid-cols-2 gap-4 h-full font-michroma">
      {/* About Me Section */}
      <div className="flex items-center justify-center md:items-center md:justify-self-center pb-0 md:pb-10 font-montserrat">
        <div className="flex flex-col gap-5 text-center md:text-left py-8 md:py-0">
          <span className="text-6xl font-semibold font-michroma">Contact</span>
          <span className="">Looking for help with a website or web application? I&apos;d love to hear about your project — don&apos;t hesitate to reach out.</span>
          <div className='flex flex-col gap-2'>
            {contactInfo.map((item) => (
              <div key={item.id} className='flex items-center gap-2'>
                <span>{item.icon}</span>
                <Link href={item.link} target='_blank'>{item.value}</Link>
              </div>
            ))}
          </div>
          
        </div>
      </div>
      
      </div>
  )
}

export default ContactPage