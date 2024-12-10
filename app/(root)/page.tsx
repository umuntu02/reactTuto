'use client'

import Image from "next/image";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function Home() {
    const [email, setEmail] = useState("");

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
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-15 gap-16 sm:p-12 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center">
                <div className="flex items-center justify-center">
                    <div className="text-center bg-white p-5 rounded-xl w-full">
                        <div className="flex justify-center items-center mb-4">
                            {/* Icône de dossier */}
                            <div className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 rounded-md">
                                <Plus className="w-6 h-6 text-gray-600" />
                            </div>
                        </div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Pas de Mission</h2>
                        <p className="text-sm text-gray-500 mb-6">Commence en publiant une nouvelle mission</p>
                        <button className="mt-4 py-2 px-6 bg-mygreenblue text-white text-sm rounded-full hover:bg-white hover:text-mygreenblue transition-all">
                            + Nouvelle Mission
                        </button>
                    </div>
                </div>
                <div className="max-w-2xl mx-auto p-4">
                    <div className="text-center mb-8">
                        <div className="text-1xl font-semibold text-gray-800">Invite ou cherche tes amis</div>
                        <p className="text-sm text-gray-500">
                            Tu n&apos;as pas encore ajouter tes amis
                        </p>
                    </div>

                    {/* Email input and send invite button */}
                    <div className="flex items-center space-x-2 mb-6">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter an email"
                            className="flex-1 px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="px-6 py-2 bg-mygreenblue text-white rounded-md hover:bg-white hover:text-mygreenblue">
                            Inviter
                        </button>
                    </div>

                    <div>
                        <p className="font-medium text-gray-800">Amis qui sont dans ta localité et que tu connais peut-être</p>
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
                                    <button className="flex items-center text-sm text-mygreenblue hover:text-blue-700">
                                        <Plus className="w-4 h-4 mr-2" /> Inviter
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <div className="text-sm font-small text-gray-800">Powered by devlin_corp</div>
            </footer>
        </div>
    );
}
