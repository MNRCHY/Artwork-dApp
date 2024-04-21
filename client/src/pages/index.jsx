import Intro from "../components/Intro";
import Setup from "../components/Setup";
import Demo from "../components/Demo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link"

export default function Home() {

    return (
        <>
            <Head>
                <title>NextJs Truffle Box</title>
                <meta name="description" content="NextJs Truffle Box"/>
            </Head>

            <div>
                <Navbar />
            </div>

            <div className="flex justify-around items-center py-8 bg-dark">
                <div className="flex flex-col w-1/2 gap-5">
                    <h1 className="text-light text-5xl font-bold tracking-wide"> 
                        Every <span className="text-main">Work</span>
                        <br /> 
                        Tells Millions of <span className="text-main">Stories</span>
                    </h1>
                    <p className="text-light">
                        Welcome to [Website Name], your source for inspiring artwork. Discover high-quality images, videos, and music with easy licensing. Start exploring your creativity today!
                    </p>
                    <div className="flex gap-2">
                        <button className="w-28 p-2 bg-main rounded">
                            DISCOVER
                        </button>
                        <button className="outline outline-main outline-1 w-28 p-2 text-main rounded">
                            LEARN MORE
                        </button>
                    </div>
                </div>

                <div className="w-96 h-80 bg-main rounded">
                    
                </div>
            </div>

            <div className="flex justify-around py-8 bg-dark">
                <div className="flex flex-col gap-10">
                    <h1 className="text-2xl text-light">
                        Trending Artwork
                    </h1>
                    <div className="flex gap-2">
                        <div className=" flex justify-center items-center w-350 h-350 bg-main rounded">
                            1
                        </div>
                        <div className="grid grid-rows-2 grid-flow-col gap-2">
                            <div className="flex justify-center items-center w-170 h-170 bg-main rounded"> 3 </div>
                            <div className="flex justify-center items-center w-170 h-170 bg-main rounded"> 2 </div>
                            <div className="flex justify-center items-center w-170 h-170 bg-main rounded"> 4 </div>
                            <div className="flex justify-center items-center w-170 h-170 bg-main rounded"> 5 </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <h1 className="text-2xl text-light">Top Artist</h1>
                    <div> 1 </div>
                </div>
            </div>

            {/* <div className="container mx-auto max-w-3xl py-8 bg-dark">

                <Link href="/about">
                Next Page
                </Link>
                <Intro />
                <hr />
                <Setup />
                <hr />
                <Demo />
                <hr />
                <Footer />
            </div> */}

        </>
    );
};