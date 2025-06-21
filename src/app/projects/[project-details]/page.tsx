"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const ProjectDetailsPage = () => {

  const { "project-details": projectDetails } = useParams();

  console.log(projectDetails)

  return (
    <div>ProjectDetailsPage</div>
  )
}

export default ProjectDetailsPage