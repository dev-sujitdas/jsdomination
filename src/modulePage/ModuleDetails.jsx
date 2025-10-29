import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Modules from "../data/modules"; 


const ModuleDetails = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    
    const moduleObj = Modules.find((m) => m[name]);
    const data = moduleObj ? moduleObj[name] : null;

    if (!data) {
        navigate("/");
        return null;
    }
    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className="p-24 text-white">
            <div className="flex items-center justify-center gap-2">
                <img className="h-24 w-24" src={data[0].img} alt="" />
                <h1 className="text-8xl font-bold mb-6">{data[0].title}</h1>
            </div>
            <div>
                <h3 className="uppercase text-base poppins-regular-italic text-zinc-500">
                    <span onClick={handleBack} className="cursor-pointer text-emerald-400 underline">Home</span>/
                    <span>module</span>/<span className="text-zinc-400">{name}</span></h3>
            </div>
            <div className="flex flex-wrap justify-center items-stretch gap-10 mt-10">
                {data.slice(1).map((mod) => (
                    <div
                        key={mod.id}
                        className="flex flex-col justify-between w-full sm:w-[400px] lg:w-[500px] p-5 rounded-xl bg-slate-800 shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                    >
                        <div>
                            <h2 className="text-xl poppins-bold text-blue-500">
                                Module {mod.id}: {mod.moduteTitle}
                            </h2>

                            {mod.topics?.length ? (
                                <ul className="list-disc ml-5 mt-5 space-y-2 poppins-regular">
                                    {mod.topics.map((topic, i) => (    
                                        <div className="flex justify-between">
                                             <li key={i}>{topic}</li>
                                             <input type="checkbox" className="ml-4 scale-110 accent-green-500 text-white" />
                                        </div>                                    
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-400 mt-5">No topics available</p>
                            )}
                        </div>

                        <p className="mt-5 italic text-emerald-400">Project: {mod.project}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ModuleDetails;
