import { FC } from "react";

const Hero: FC = () => {
    return (
        <div className="flex flex-col gap-4 flex-grow basis-0">
            <h1 className="text-6xl md:text-5xl lg:text-6xl xl:text-8xl font-[Sigmar] text-white">
                Hello
            </h1>
            <h2 className="text-3xl md:text-2xl lg:text-4xl xl:text-5xl  text-white font-bold">
                I'm <b><span style={{color: "rgb(255, 219, 187)"}}>Loc Nguyen</span></b>
            </h2>
            <h3 className="text-2xl md:text-xl lg:text-2xl xl:text-2xl  text-white">
                Computer Science and Mathematics Student
            </h3>
        </div>
    );
}

export default Hero;