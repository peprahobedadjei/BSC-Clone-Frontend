import React from "react";

interface CardProps {
    icon: React.ReactNode,
    title: string,
    text: string

}
export default function Card({icon,title,text}:CardProps){
    return(
        <div className="border-l-4 border-red-700 rounded-r-lg shadow-sm space-y-3 bg-white/85 w-1/4 p-8 m-2">
            <div className="bg-red-200/65 w-10 h-10 p-2 rounded-sm">
                {icon}
            </div>
            <h1 className="text-base mt-5">{title}</h1>
            <p className="text-sm">{text}</p>

            
        </div>
    );
}