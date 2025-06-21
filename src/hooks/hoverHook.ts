import { useState } from "react"

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHoverToggle = () => {
    setIsHovered(!isHovered)
  }

  return { isHovered, handleHoverToggle }
}   