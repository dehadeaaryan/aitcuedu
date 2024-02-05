import Image from 'next/image';
import Link from 'next/link';

export default function Section({ ...props }: { [x: string]: any }) {
    return (
        <section className={`flex ${props.reversed ? 'flex-row-reverse' : 'flex-row'} items-center gap-10`}>
            <div className='flex-1'>
                <Link href={props.link}><h3 className="text-4xl font-light">
                    {props.title}
                </h3></Link>
                <p className="text-lg flex-wrap font-extralight">
                    {props.paragraph}
                </p>
            </div>
            <div className='relative size-72'>
                <Link href={props.link}><Image src={props.image} alt={props.alt} fill={true} style={{objectFit: "contain"}} sizes='(max-width: 1200px) 80vw' /></Link>
            </div>
        </section>
    );
}