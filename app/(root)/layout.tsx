import React from "react"
import Sidebar from "@/components/Sidebar"
import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children:React.ReactNode
}>){   
    const loggedIn = { prenom: 'Devlin' , nom: 'IRUMVA' };

    return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user = {loggedIn} />

        

        {children}
    </main>
  );
}
