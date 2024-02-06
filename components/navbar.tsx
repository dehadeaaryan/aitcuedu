import Link from 'next/link';

const activeLinkStyle = {
    color: 'white',
    textDecoration: 'underline',
};

export default function Navbar({ active }: { active: number }) {
    return (
        <nav className="w-full sticky top-0 z-50 bg-[#4e1979] drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)] flex flex-row items-center px-6 py-4">
            <div>
                <Link href="/"><h1 className="text-xl font-light">AI @ TCU</h1></Link>
            </div>
            <div className="flex-1 text-base font-extralight">
                <ul className="flex flex-row justify-end gap-8">
                    <li>
                        <Link href="/projects" style={active === 1 ? activeLinkStyle : {}}>Projects</Link>
                    </li>
                    <li>
                        <Link href="/about" style={active === 2 ? activeLinkStyle : {}}>About</Link>
                    </li>
                    <li>
                        <Link href="/news" style={active === 3 ? activeLinkStyle : {}}>News</Link>
                    </li>
                    <li>
                        <Link href="/contact" style={active === 4 ? activeLinkStyle : {}}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}