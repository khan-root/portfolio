import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Home() {

  const listData = [
    {id: 1, title: "Projects", link: "/projects"},
    // {id: 2, title: "About me", link: "/about"},
    {id: 3, title: "Contact", link: "/contact"},
    {id: 4, title: "Services", link: "/services"},
  ]

  const socialMedia = [
    {id:1, icon: <FaGithub />, link: "https://github.com"},
    {id:2, icon: <FaLinkedin />, link: "https://www.linkedin.com/"},
  ]

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-4 h-full font-michroma">
      {/* About Me Section */}
      <div className="flex items-center justify-center md:items-end md:justify-self-center pb-0 md:pb-10 font-montserrat">
        <div className="flex flex-col gap-4 text-center md:text-left py-8 md:py-0">
          <span className="text-3xl font-semibold">Sarmad Faizan Ullah</span>
          <span className="text-xl font-semibold">MERN Stack Developer</span>
          <span className="">Self-taught and driven, I bring a unique blend of creativity and technical expertise to full-stack development. Specializing in the MERN stack, I&apos;m passionate about building high-performance, scalable applications with clean code and intuitive design. My work reflects a deep commitment to both user experience and backend efficiency.</span>
          <div className="w-[50%] h-[1px] flex bg-black mx-auto md:mx-0"></div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            {socialMedia.map((item) => (
              <Link href={item.link} target="_blank" key={item.id}>
                <span className="text-2xl">
                  {item.icon}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Navigation Links Section */}
      <div className="flex items-center justify-center md:h-full">
        <div className="flex flex-col gap-4 py-8 md:py-0">
          {listData.map((item) => (
            <Link href={item.link} key={item.id}>
              <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl link-underline">
                {item.title}
              </span>
              
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}