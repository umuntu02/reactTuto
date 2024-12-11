import React from 'react'
import Image from "next/image"
import ButtonBlue from './ButtonBlue';

const ListMember = () => {
    const teamMembers = [
        {
            name: "Lindsay Walton",
            role: "Front-end Developer",
            avatar: "/images/lindsay.jpg",
        },
        {
            name: "Courtney Henry",
            role: "Designer",
            avatar: "/images/courtney.jpg",
        },
        {
            name: "Tom Cook",
            role: "Director of Product",
            avatar: "/images/tom.jpg",
        },
    ];
    return (
        <ul className="mt-4 space-y-4">
            {teamMembers.map((member) => (
                <li key={member.name} className="flex items-center justify-between py-4 border-b">
                    <div className="flex items-center space-x-4">
                        <Image
                            src={member.avatar} // Remplace 'member.avatar' par le bon chemin de l'image
                            alt={member.name}
                            width={70}
                            height={70}
                            className='size-[70px]
                                        max-xl:size-1200
                                        rounded-full 
                                        object-cover 
                                        object-center'/>

                        <div>
                            <div className="font-semibold text-gray-800">{member.name}</div>
                            <div className="text-sm text-gray-500">{member.role}</div>
                        </div>
                    </div>
                    <ButtonBlue
                        type="Follow"
                        title="Suivre"
                    />
                </li>
            ))}
        </ul>
    )
}

export default ListMember
