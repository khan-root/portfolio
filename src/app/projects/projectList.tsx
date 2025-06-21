"use client"

// import { useHover } from "@/hooks/hoverHook"


    const ProjectList = ({title, handleHoverToggle}: {title: string, handleHoverToggle: () => void}) => {

  // const { handleHoverToggle } = useHover()

  return (
    <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl link-underline"
    onMouseEnter={handleHoverToggle}
    onMouseLeave={handleHoverToggle}
    >
      {title}
    </span>
  )
}

export default ProjectList