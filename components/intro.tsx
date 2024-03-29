"use client";

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi'

export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5)

    return (
        <section ref={ref} id="home" className='mb-28 max-w-[50rem] text-center scroll-mt-[100rem]'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image src="/me.png" alt="John Yang" width={"192"} height={"192"} quality={"95"} priority={true} className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl' />
                    </motion.div>
                    <motion.span className='absolute bottom-0 right-0 text-4xl '
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7
                        }}
                    >👋</motion.span>
                </div>
            </div>

            <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I&apos;m John.</span> I&apos;m a{" "}
                <span className="font-bold">full-stack developer and software engineer</span> with a keen interest in <span className="font-bold">game development</span>. I&apos;m skilled in{" "}
                <span className="font-bold">React (Next.js), Angular, ASP.NET, Unity, and C++</span>. I also have experience ranges from <span className="font-bold">assembling and troubleshooting computers, managing server configurations</span>.
            </motion.h1>

            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link href={'#contact'} className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-gray-500 dark:text-black dark:hover:bg-gray-200'>
                    Contact me here <BsArrowRight className='group-hover:translate-x-1 opacity-70' />
                </Link>

                <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60' href='/CV.pdf' download>Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" /></a>

                <a className='bg-white p-4 text-gray-500 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-gray-50' href='https://www.linkedin.com/in/john-yang-70a5722a6/' target='_blank'><BsLinkedin /></a>

                <a className='bg-white p-4 text-gray-500 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-gray-50' href='https://github.com/shimakaze09' target='_blank'><FaGithubSquare /></a>
            </motion.div>
        </section>
    )
}
