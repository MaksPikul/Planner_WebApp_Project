"use client"


interface ProjectPageProps {
    name: string | undefined
}
export const ProjectPage = ({
    name
}: ProjectPageProps) => {

    //this component will receive members
    return (
        <div className="">{name}</div>   
    )
}