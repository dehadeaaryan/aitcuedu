import Link from "next/link";
import Section from "@/components/section";
//@ts-ignore
import * as jsonSections from "@/data/sections" assert { type: "json" };

let sections = jsonSections;

export default function Home() {
    return (
        <main className="w-screen bg-[#1f235c] flex flex-col items-center gap-8">
            <nav className="w-full sticky top-0 z-50 bg-[#4e1979] drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)] flex flex-row items-center px-6 py-4">
                <div>
                    <Link href="/"><h1 className="text-xl font-light">AI @ TCU</h1></Link>
                </div>
                <div className="flex-1 text-base font-extralight">
                    <ul className="flex flex-row justify-end gap-8">
                        <li>
                            <a href="/projects">Projects</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/news">News</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container w-[75%] drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">
                <h2 className="text-center text-6xl py-8">Welcome to AI @ TCU</h2>
                <div className="flex flex-col items-center gap-16 py-10">
                    {Object.keys(sections).map((key, index, array) => (
                        index !== array.length - 1 && (
                            <Section
                                key={key}
                                title={sections[key].title}
                                paragraph={sections[key].paragraph}
                                image={sections[key].image}
                                alt={sections[key].alt}
                                link={sections[key].link}
                                reversed={index % 2 !== 0}
                            />
                        )
                    ))}
                </div>
            </div>
            <footer className="w-full bg-[#4e1979] flex flex-row items-center justify-center px-6 py-4">
                <p className="text-xs font-extralight text-white">© 2024 AI @ TCU</p>
            </footer>
        </main>
    );
}
