import Link from "next/link";
import Section from "@/components/section";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

//@ts-ignore
import * as jsonSections from "@/data/sections" assert { type: "json" };

export default function Home() {
    return (
        <main className="w-screen bg-[#1f235c] flex flex-col items-center gap-8">
            <Navbar active={1} />
            <div className="container w-[75%]">
                <h2 className="text-center text-6xl py-8">Welcome to AI @ TCU</h2>
                <div className="flex flex-col items-center gap-16 py-10">
                    {Object.keys(jsonSections).map((key, index, array) => (
                        index !== array.length - 1 && (
                            <Section
                                key={key}
                                title={jsonSections[key].title}
                                paragraph={jsonSections[key].paragraph}
                                image={jsonSections[key].image}
                                alt={jsonSections[key].alt}
                                link={jsonSections[key].link}
                                reversed={index % 2 !== 0}
                            />
                        )
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
