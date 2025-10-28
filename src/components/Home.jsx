import React from 'react'
import { Link } from 'react-router-dom'

const courses = [
    {
        id: 1,
        img: "/html.png",
        title: "Dominate HTML5",
        subtitle: "Build the foundation of web",
        path: "html"
    },
    {
        id: 2,
        img: "/css.png",
        title: "Dominate CSS3",
        subtitle: "Apply styling to your website",
        path: "css"
    },
    {
        id: 3,
        img: "/javascript.png",
        title: "Dominate JavaScript",
        subtitle: "Bring your website to life",
        path: "javascript"
    },
    {
        id: 4,
        img: "/reactjs.png",
        title: "Dominate React",
        subtitle: "Craft dynamic and modern UIs",
        path: "react"
    },
    {
        id: 5,
        img: "/tailwind.png",
        title: "Dominate Tailwind",
        subtitle: "Apply CSS with utility classes",
        path: "tailwind"
    },
    {
        id: 6,
        img: "/gsap.png",
        title: "Dominate GSAP",
        subtitle: "Animate anything with GSAP",
        path: "gsap"
    },
]
const Home = () => {


    return (
        <section className='min-h-screen w-full flex justify-center items-center p-20'>
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-700'>
                <h1 className='text-[16rem] poppins-black'>JAVASCRIPT</h1>
                <h1 className='text-[16rem] poppins-black'>DOMINATION</h1>
            </div>
            <div className='w-[70%] h-full flex flex-wrap justify-center items-center gap-16 mx-auto z-50'>
                {courses.map((course) => (
                    <Link key={course.id} to={`/module/${course.path}`}>
                        <div className='w-80 flex flex-col p-5 bg-slate-200 rounded-xl shadow-lg shadow-slate-500 hover:scale-105 duration-300 transition-all'>
                            <img className='h-24 w-24' src={course.img} alt="" />
                            <h2 className='text-2xl poppins-bold mt-2 text-slate-950'>{course.title}</h2>
                            <h3 className='poppins-regular mt-1 text-slate-500 grow'>{course.subtitle}</h3>
                        </div>
                    </Link>
                ))}
            </div>

        </section>
    )
}

export default Home