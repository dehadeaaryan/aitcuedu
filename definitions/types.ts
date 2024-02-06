export type MemberType = {
    name: string;
    paragraph: string;
    image: string;
    alt: string;
    link: string;
};

export type MemberListType = MemberType[];

type ProjectType = {
    title: string;
    paragraph: string;
    team: MemberListType;
};

export default ProjectType;
