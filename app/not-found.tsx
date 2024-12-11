import { Loader } from "lucide-react"; // Importation du Loader de Lucide React
import Link from "next/link";

export default function Example() {
    return (
        <>

            <main className="flex flex-col justify-between h-screen  place-items-center pb-10 bg-white pt-24 sm:pt-32 lg:px-8">
                <div className="text-center">
                    <p className="text-4xl font-semibold text-mygreenblue">404</p>
                    <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                        Ouups !
                    </h1>
                    <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                        Cette Page est en maintenance ...
                    </p>

                    <div className="p-8 flex items-center justify-center">
                        {/* Loader avec animation de rotation */}
                        <Loader className="animate-slow-spin w-12 h-12 text-mygreenblue" />
                    </div>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/" passHref>
                            <div
                                className="rounded-md bg-mygreenblue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Revenir à la page d&apos;accueil
                            </div>
                        </Link>
                    </div>
                </div>
                <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                    <div className="text-sm font-small text-gray-800">Powered by devlin_corp</div>
                </footer>
            </main>

        </>
    )
}
