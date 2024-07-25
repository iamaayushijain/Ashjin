import React from 'react';
import { cn } from "../@/lib/utils";
import { Spotlight } from "../@/components/ui/spotlight";
import { ContainerScroll } from "../@/components/ui/container-scroll-animation";
import { HoverEffect } from "../@/components/ui/card-hover-effect";
import { TypewriterEffectSmooth } from "../@/components/ui/typewriter-effect";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../@/components/ui/canvas-reveal-effect";
import { BentoGrid, BentoGridItem } from "../@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";



function Home() {
    return (
        <>
        <div className=''>
          <div id="home">
          <SpotlightPreview />
          </div>
          <div className=' bg-[#222222] h-[1px]'></div>
          <div id="about">
          <HeroScrollDemo/>
          </div>
          <div className=' bg-[#222222] h-[1px]'></div>


          <div   className='bg-black flex flex-col gap-5 md:pt-20 pt-10'>
          <h1 className=" md:text-5xl   font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Services We Offer
        </h1>

        <CardHoverEffectDemo/>
          </div>
          <div className=' bg-[#222222] h-[1px]'></div>


        <TypewriterEffectSmoothDemo/>

        <div className=' bg-[#222222] h-[1px]'></div>


        <div id="work" className='bg-black flex flex-col gap-5 md:pt-20 pt-10'>
        <h1 className=" md:text-5xl   font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Case Studies and Research
        </h1>
        <CanvasRevealEffectDemo/>
        </div>

        <div className=' bg-[#222222] h-[1px]'></div>


        <div id="newsletter" className='bg-black flex flex-col gap-5 md:pt-20 pt-10 md:pb-32 pb-16 '>
        <h1 className=" md:text-5xl pb-4 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          From the newsletter
        </h1>
        <BentoGridSecondDemo/>
        </div>

        <div className=' bg-[#222222] h-[1px] '></div>



        <div className='bg-black flex flex-col items-center gap-5 pt-10 pb-10 '>
        <h1 className=" md:text-5xl   font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Get started with Ashjin today 
        </h1>
        <button className="px-6 py-2 mt-4 bg-[#40DFAF] text-black align-middle rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
  Book a Session 
</button>

        </div>

        <div className=' bg-[#222222] h-[1px]'></div>


        <footer className="bg-black text-gray-300 p-4 pt-20">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 Ashjin. All rights reserved.</p>
        <div className="mt-2">
          <a href="/terms" className="hover:underline text-gray-300 mx-2">Terms of Service</a>
          <a href="/privacy" className="hover:underline text-gray-300 mx-2">Privacy Policy</a>
        </div>
      </div>
    </footer>

        


        </div>
          
        </>
    );
}

export function SpotlightPreview() {
  return (
    <>

    <div className='md:hidden visible bg-black flex flex-col  items-center p-5 pt-20'>
    <h1 className=" md:text-8xl text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Ashjin <br />Builds your LinkedIn
        </h1>
        <p className="mt-4 font-normal text-lg text-neutral-300 max-w-2xl text-center mx-auto">
          We help you reach the right target audience, create relatable content, engage better with your network, increase followers and estabilish you as a thought leader in the industry
        </p>
        <button className="px-6 py-2 mt-8 bg-[#40DFAF] text-black align-middle rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
  Book a Session 
</button>
    </div>

    <div className="h-[50rem] w-full hidden md:visible md:flex md:items-center md:justify-center bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
     <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full  md:pt-0 flex flex-col items-center">
        <h1 className=" md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          We build<br />Brands on LinkedIn
        </h1>
        <p className="mt-4 font-normal text-lg text-neutral-300 max-w-2xl text-center mx-auto">
          We help you reach the right target audience, create relatable content, engage better with your network, increase followers and estabilish you as a thought leader in the industry
        </p>
        <button className="px-6 py-2 mt-20 bg-[#40DFAF] text-black align-middle rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
  Book a Session 
</button>
      </div>

      

    </div>


    

    </>

  );
}

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-black ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Unleash the steps of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Our Working Process
              </span>
            </h1>
          </>
        }
      >
        <img
          src="/hero-image.png"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build great network with Ashjin ",
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[30rem] bg-black ">
      <p className=" text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      <button className=" h-10 w-36 bg-[#40DFAF] text-black align-middle rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
  Book a Session 
</button>
       
      </div>
    </div>
  );
}

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-black w-full gap-4 mx-auto px-8">
        <Card title="Sheetal is Nisha" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Nisha is Munni" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/90" />
        </Card>
        <Card title="Munni is Aditi" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}
 
const Card = ({
  title,
  icon,
  children,
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border  group/canvas-card flex items-center justify-center border-white/[0.2]  max-w-sm w-full mx-auto p-4  h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />
 
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
 
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};
 
const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};
 
export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-red-300 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border  border-black "></div>
);

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];



export default Home;






