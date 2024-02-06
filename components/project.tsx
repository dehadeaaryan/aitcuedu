import Navbar from "./navbar";
import Section from "./section";
import Footer from "./footer";

//@ts-ignore
import { Member } from "@/definitions/types";

export default function Project({ ...props }: { [key: string]: any }) {
    const team = props.team as Member[];
    return (
        <div className="w-screen bg-[#1f235c] flex flex-col items-center min-h-screen">
            <Navbar active={1} />
            <div className="container w-[75%] flex-grow">
                <h1 className="text-center text-6xl py-8">{props.title}</h1>
                <p className="text-center text-lg font-extralight">{props.paragraph}</p>
            </div>
            <div className="container w-[75%]">
                <h3 className="text-4xl text-center py-8">{props.title !== '404' ? 'The Research Team' : ''}</h3>
                <div className="flex flex-col items-center gap-16 py-10">
                    {team.map((member: Member, index: number, array: Member[]) => (

                        <Section
                            key={member.name}
                            title={member.name}
                            paragraph={member.paragraph}
                            image={member.image}
                            alt={member.alt}
                            link={member.link}
                            reversed={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}