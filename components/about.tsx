"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
    const { ref } = useSectionInView('About')

    return (
        <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                After graduating with a degree in{" "}
                <span className="font-medium">Computer Science</span> and gaining <span className="font-medium">hands-on experience in the IT industry</span>, I&apos;ve developed a deep understanding of software development and game development. I have a knack for problem-solving, especially when it comes to designing and implementing complex algorithms and systems. My experience spans a variety of technologies including{" "}
                <span className="font-medium">JavaScript, HTML, SQL, Typescript, React Library, Angular Framework, Linux Server, and Unity Engine</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. I am always looking to learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software/full stack/game developer.
            </p>

            <p>
                <span className="italic">In my free time</span>, I enjoy engaging in independent such as{" "}
                <span className="font-medium">developing a D20 roguelike game using C# and Unity, creating a cross platformed game engine using C++</span>.  These projects allow me to continuously learn and adapt to new technologies which I believe is crucial for staying competitive in today&apos;s fast-paced tech industry. I&apos;m always open to learning{" "}
                <span className="font-medium">new technologies and improving my skills</span>, making me a versatile asset in any IT team.


            </p>
        </motion.section>
    )
}
