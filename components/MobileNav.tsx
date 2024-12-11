'use client'

import React from 'react'
import Image from 'next/image'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'



const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/icons/hamburger.svg"
                        width={30}
                        height={30}
                        alt='menu'
                        className='cursor-pointer'
                    />
                </SheetTrigger>
                <SheetContent side="left" className='border-none bg-white'>
                    <Link href="/" className='flex px-4 cursor-pointer items-center gap-1'>
                        <Image
                            src="/shakemLogo.svg"
                            width={34}
                            height={34}
                            alt='SHAKEM LOGO'
                        />
                        <SheetTitle className='text-26 font-ibm-plex-serif font-bold text-[#099]'>
                            SHAKEM
                        </SheetTitle>
                        <SheetDescription>
                        </SheetDescription>
                    </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className="flex h-full flex-col gap-2 pt-8 text-white">
                                {sidebarLinks.map((item) => {

                                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                                    return (
                                        <SheetClose asChild key={item.route}>
                                            <Link href={item.route}
                                                key={item.label}
                                                className={cn('mobilenav-sheet_close w-full', { 'bg-mygreenblue': isActive })}
                                            >
                                                <Image
                                                    src={item.imgURL}
                                                    alt={item.label}
                                                    width={20}
                                                    height={20}
                                                    className={cn({ 'brightness-[3] invert0': isActive }
                                                    )}
                                                />
                                                <p className={cn('text-16 font-semibold text-black-2', { 'text-white': isActive })}>
                                                    {item.label}
                                                </p>

                                            </Link>
                                        </SheetClose>

                                    )
                                })}
                                {user.prenom}
                            </nav>
                        </SheetClose>
                    </div>
                    FOOTER
                </SheetContent>
            </Sheet>

        </section>
    )
}

export default MobileNav
