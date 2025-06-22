"use client"
import React from 'react'

const ProjectName = ({
  project,
  offsetY,
}: {
  project: { title: string; bgColor: string };
  offsetY: number;
}) => {
  return (
    <div
      className='w-[80%] mx-auto min-h-[400px] border border-white rounded-lg flex items-center justify-center'
      style={{ backgroundColor: project?.bgColor }}
    >
      <span
        className='text-white text-8xl font-bold transition-transform duration-100 ease-out'
        style={{
          transform: `translateY(${offsetY * 0.3}px)`,
        }}
      >
        {project?.title}
      </span>
    </div>
  );
};

export default ProjectName;
