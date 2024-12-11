'use client'

import HeaderBox from '@/components/HeaderBox'
import AddMission from "@/components/AddMission"
import FriendSearch from "@/components/FriendSearch"
import ListMember from '@/components/ListMember';


export default function Home() {

    const loggedIn = { prenom: 'Devlin' };

    return (

        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Bienvenue"
                        user={loggedIn?.prenom || 'Guest'}
                        subtext="Accède et gère ton compte. 
                        Invite et ajoute des amis.
                        Publie et reçois des missions de tes amis "
                    />
                </header>
                <AddMission
                    title="Pas de Mission"
                    subtext="Publie ta première mission et invite tes amis"
                />

                <div className="max-w-2xl mx-auto w-full">
                    <div className="text-center m-8">
                        <h2 className="header-2 m-3">
                            Invite ou cherche tes amis
                        </h2>
                        <p className="text-sm text-gray-500">
                            Tu n&apos;as pas encore ajouter tes amis
                        </p>
                    </div>
                    <FriendSearch />

                    <div>
                        <h2 className="header-2 m-3">
                            Amis qui sont dans ta localité et que tu connais peut-être
                        </h2>
                        <ListMember />
                    </div>
                </div>

            </div>

        </section>

    );
}
