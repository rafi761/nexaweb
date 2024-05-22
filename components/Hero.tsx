import ButtonEffect from "./ui/ButtonEffect"
import { SparklesCore } from "./ui/Sparkles"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"

const Hero = () => {
    return (
        <div className="pt-36">
            <div className="h-screen flex justify-center relative z-0">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    {/* <h2 className="uppercase tracking-widest text-xs text-center text-white max-w-80">NEXA WEB DEVELOPMENT</h2> */}
                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl relative z-20 my-4 bg-gradient-to-r from-[#fff] to-[#00607A] bg-clip-text text-transparent"
                        words="Grow your business and start to boost sales now!"
                    />
                    {/* <h1 className="text-center text-[40px] md:text-5xl lg:text-6xl relative z-20 my-4">
                        Grow your business and start to boost sales now!
                    </h1> */}
                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">

                        Consult your business with us for free without purchasing any services. Our experts will analyze your business goals and create a custom website that attracts more customers, increases conversions and increases your sales
                    </p>

                    <div className="w-[40rem] h-40 relative">
                        {/* Gradients */}
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                        {/* Core component */}
                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={1200}
                            className="w-full h-full"
                            particleColor="#FFFFFF"
                        />

                        {/* Radial Gradient to prevent sharp edges */}
                        <div className="absolute inset-0 w-full h-full bg-[#002029] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                    </div>
                    <ButtonEffect />
                </div>
            </div>
        </div>
    )
}

export default Hero