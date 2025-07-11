export interface ProjectData {
    id: number
    title: string
    description: string
    slug: string
    image: string[]
    bgColor: string
    textColor: string,
    techStack: string[]
}



export const projectData: ProjectData[] = [
    {
        id: 1,
        title: "Empleado",
        description: "A web application for managing employees and their details.",
        slug: "empleado",
        image: [
            "/images/empleado/1.png",
            "/images/empleado/2.png",
            "/images/empleado/3.png",
        ],
        bgColor: "#a3bbfb",
        textColor: "#1f2937",
        techStack: ["React", "Tailwind CSS", "Node & Express"],
    },
    {
        id: 2,
        title: "QueryQ",
        description: "A web application for managing queries and their details.",
        slug: "queryq",
        image: [
            "/images/queryq/1.png",
            "/images/queryq/2.png",
            "/images/queryq/3.png",
        ],
        bgColor: "#a3bbfb",
        textColor: "#1f2937",
        techStack: ["React", "Tailwind CSS ", "Node & Express"],
    },
    {
        id: 3,
        title: "Accelerate",
        description: "A web application for managing accelerator and their details.",
        slug: "accelerate",
        image: [
            "/images/accelerate/1.png",
            "/images/accelerate/2.png",
            "/images/accelerate/3.png",
        ],
        bgColor: "#a3bbfb", 
        textColor: "#1f2937",
        techStack: ["React", "Tailwind CSS", "Node & Express"],
    },
    {
        id: 4,
        title: "Spext",
        description: "A web application for managing spextra and their details.",
        slug: "spext",
        image: [
            "/images/spext/1.png",
            "/images/spext/2.png",
            "/images/spext/3.png",
        ],
        bgColor: "#a3bbfb",
        textColor: "#1f2937",
        techStack: ["React", "Tailwind CSS", "Node & Express"],
    },
    {
        id: 5,
        title: "Order Pulse",
        description: "A web application for managing order pulse and their details.",
        slug: "order-pulse",
        image: [
            "/images/order-pulse/1.png",
            "/images/order-pulse/2.png",
            "/images/order-pulse/3.png",
        ],
        bgColor: "#a3bbfb", 
        textColor: "#1f2937",
        techStack: ["React", "Tailwind CSS", "Node & Express"],
    }
    ]

