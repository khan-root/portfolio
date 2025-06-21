import Link from "next/link";

export default function ProjectsPage() {
  const listData = [
    {id: 1, title: "Empleado", description: "A web application for managing employees and their details.", slug: "empleado"},
    {id: 3, title: "QueryQ", description: "A web application for managing queries and their details.", slug: "queryq"},
    {id: 4, title: "Accelerate", description: "A web application for managing accelerator and their details.", slug: "accelerate"},
    {id: 5, title: "Spext", description: "A web application for managing spextra and their details.", slug: "spext"},
    {id: 6, title: "Order Pulse", description: "A web application for managing order pulse and their details.", slug: "order-pulse"},
  ];

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-4 min-h-screen font-michroma"> {/* Change h-full to min-h-screen */}
      <div className="flex items-center justify-center md:items-end md:justify-self-center pb-0 md:pb-10 font-montserrat">
        <div className="flex flex-col gap-4 text-center md:text-left py-8 md:py-0">
          <span className="text-3xl font-semibold">Projects</span>
          <span className="">Dive into a curated collection of my best work in Web Design and Development. Over the past 3 years, I’ve evolved alongside the fast-paced digital world—sharpening my skills, embracing new technologies, and delivering innovative, user-focused solutions. Fueled by a passion for growth and creativity, I&apos;m constantly pushing boundaries to craft impactful digital experiences.</span>
        </div>
      </div>

      <div className="flex items-center justify-center md:h-full">
        <div className="flex flex-col gap-4 py-8 md:py-0 md:overflow-y-auto md:max-h-screen scroll-smooth hide-scrollbar"> {/* Added overflow-y-auto and max-h-screen */}
          {listData.map((item) => (
            <Link href={`/projects/${item.slug}`} key={item.id} className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl link-underline">
                {item.title}
              </span>
              <span className="text-sm">{item.description}</span>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
