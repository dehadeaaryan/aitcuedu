import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Section from "@/components/section";

//@ts-ignore
import * as jsonMembers from "@/data/classifai" assert { type: "json" };

export default function Page() {
    return (
        <div className="w-screen bg-[#1f235c] flex flex-col items-center">
            <Navbar active={1} />
            <div className="container w-[75%]">
                <h1 className="text-center text-6xl py-8">The ClassifAI Project</h1>
                <p className="text-center text-lg font-extralight">The Instructional Equity Observing Tool is an online video/audio analysis tool that is geared towards assisting the teachers and faculty of educational institutions in analyzing and understanding how their interaction with students translates into real learning. Our platform is meant to replace the current, manual method of analysis that many teachers/instructors perform to try and quantify different metrics about their teacher-student interaction. Instructors have expressed desire to view metrics such as the time the teacher talks during a lesson, what is the response time of students to those questions, and other data points such as the types of questions being asked (as categorized by Bloom’s Taxonomy). Quantifying these instructional variables helps these instructors more accurately understand the areas that they are strong in, and more importantly, the areas in which they can be more interactive with the students as to allow them to better absorb the lessons being taught. With the help of our tool (hosted at https://ai4c.eurekalabs.net), we can allow teachers to quickly and efficiently gather this data about each of their lessons so that data driven changes in teaching techniques is possible, and moreover, so that teachers can identify potential vectors of ineffective instruction.</p>
            </div>
            <div className="container w-[75%]">
                <h3 className="text-4xl text-center py-8">The ClassifAI Team</h3>
                <div className="flex flex-col items-center gap-16 py-10">
                    {Object.keys(jsonMembers).map((key, index, array) => (
                        index !== array.length - 1 && (
                            <Section
                                key={key}
                                title={jsonMembers[key].name}
                                paragraph={jsonMembers[key].paragraph}
                                image={jsonMembers[key].image}
                                alt={jsonMembers[key].alt}
                                link={jsonMembers[key].link}
                                reversed={index % 2 !== 0}
                            />
                        )
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
  }