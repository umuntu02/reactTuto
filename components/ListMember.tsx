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
                                <li key={member.name} className="flex items-center justify-between p-4 border-b">
                                    <div className="flex items-center space-x-4">
                                        <Image
                                            src={member.avatar} // Remplace 'member.avatar' par le bon chemin de l'image
                                            alt={member.name}
                                            width={48}
                                            height={48}
                                            className="rounded-full"  // Application du style circulaire à l'avatar
                                            style={{ width: "auto", height: "auto", objectFit: "cover", objectPosition: "center" }}  // Maintenir le ratio d'aspect avec auto
                                        />

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
