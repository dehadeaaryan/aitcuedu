import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Page() {
    return (
        <div className="w-screen bg-[#1f235c] flex flex-col items-center">
            <Navbar active={1} />
            <div className="h-screen">
                <h1 className="text-6xl text-center py-8">Projects</h1>
                <p className="text-center text-lg font-extralight">The projects page has not been created yet</p>
            </div>
            <Footer />
        </div>
    );
  }