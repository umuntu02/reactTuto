import React from "react"
import Sidebar from "@/components/Sidebar"
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

export default function RootLayout({
    children,
}: Readonly<{
    children:React.ReactNode
}>){   
    const loggedIn = { prenom: 'Devlin' , nom: 'IRUMVA' };

    return (
    <main className="flex">
        <Sidebar user = {loggedIn} />

        <div className="flex size-full flex-col">
            <div className="root-layout">
                <Image 
                    src="/shakemLogo.svg"
                    width={30}
                    height={30}
                    alt="menu icon"

                />
                <div>
                    <MobileNav user = {loggedIn} />
                </div>
            </div>
            
            {children}
        </div>
        
    </main>
  );
}
