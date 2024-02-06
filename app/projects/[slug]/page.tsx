import Project from "@/components/project";
import ProjectType from '@/definitions/types';
//@ts-ignore
import * as projectsData from "@/data/projects" assert { type: "json" };

const Page = ({ params }: { params: { slug: string } }) => {
    if (Object.keys(projectsData).includes(params.slug)) {
        let currentProject: ProjectType = projectsData[params.slug];
        return (
            <Project
                title={currentProject.title}
                paragraph={currentProject.paragraph}
                team={currentProject.team}
            />
        );
    } else {
        return (
            <div className="w-screen bg-[#1f235c] flex flex-col items-center">
                <Project title="404" paragraph="Page not found" team={[]} />
            </div>
        );
    }
}

export default Page;