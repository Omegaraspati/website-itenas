"use client"

import React from 'react'
import itenas from '../assets/itenas.png'
import indonesia from '../assets/indonesia.png'
import inggris from '../assets/inggris.png'
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div>
            <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3">
                <nav className="max-w-[1640px] w-full mx-auto px-4 py-1.5 sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center justify-between">
                        <a className="flex-none focus:outline-none focus:opacity-80" href="/" aria-label="Brand">
                            <Image src={itenas} alt={'itenaslogo'} height={77} width={200} />
                        </a>
                        <div className="sm:hidden">
                            <button type="button" className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-500 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
                                <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                                <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                <span className="sr-only">Toggle navigation</span>
                            </button>
                        </div>
                    </div>


                    <div id="hs-navbar-example" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse">
                        <div className="flex flex-col gap-8 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">

                            <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] ">
                                <button id="hs-navbar-example-dropdown" type="button" className="hs-dropdown-toggle flex items-center w-full
           text-black hover:text-orange-500 hover:transition-colors font-medium" aria-haspopup="menu" aria-expanded="false" aria-label="Mega Menu">
                                    Profile Itenas
                                    <svg className="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-1 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </button>

                                <div className="hs-dropdown-menu transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-1 space-y-1 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5 hidden" role="menu" aria-orientation="vertical" aria-labelledby="hs-navbar-example-dropdown">
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                        Profile Singkat
                                    </a>
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                        Sejarah
                                    </a>
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                        Rangking
                                    </a>
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                        Pimpinan
                                    </a>
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                        Alumni
                                    </a>
                                </div>
                            </div>

                            <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] ">
                                <button id="hs-navbar-example-dropdown" type="button" className="hs-dropdown-toggle flex items-center w-full
           text-black hover:text-orange-500 hover: transition-colors font-medium" aria-haspopup="menu" aria-expanded="false" aria-label="Mega Menu">
                                    Kuliah di Itenas
                                    <svg className="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-1 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </button>

                                <div className="hs-dropdown-menu transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-1 space-y-1 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5 hidden" role="menu" aria-orientation="vertical" aria-labelledby="hs-navbar-example-dropdown">
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                        Fasilitas
                                    </a>
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                        Kampus Merdeka
                                    </a>
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                        Kampus Ramah Lingkungan
                                    </a>
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                        International Office
                                    </a>
                                </div>
                            </div>

                            <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] ">
                                <button id="hs-navbar-example-dropdown" type="button" className="hs-dropdown-toggle flex items-center w-full
           text-black hover:text-orange-500 hover: transition-colors font-medium" aria-haspopup="menu" aria-expanded="false" aria-label="Mega Menu">
                                    Akademik
                                    <svg className="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-1 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </button>

                                <div className="hs-dropdown-menu transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-1 space-y-1 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5 hidden" role="menu" aria-orientation="vertical" aria-labelledby="hs-navbar-example-dropdown">

                                    <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] relative">
                                        <button id="hs-navbar-example-dropdown-sub" type="button" className="hs-dropdown-toggle w-full flex justify-between items-center text-sm text-black rounded-lg py-2 px-3  focus:outline-none hover:text-orange-500 hover:transition-colors ">
                                            Fakultas
                                            <svg className="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:-rotate-90 sm:-rotate-90 duration-300 ms-2 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>

                                        <div className="hs-dropdown-menu transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg  before:absolute sm:border before:-end-5 before:top-0 before:h-full before:w-5 sm:!mx-[10px] top-0 end-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-navbar-example-dropdown-sub">
                                            <div className="p-1 space-y-1">
                                                <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] relative">
                                                    <button id="hs-navbar-example-dropdown-sub" type="button" className="hs-dropdown-toggle w-full flex justify-between items-center text-sm text-black rounded-lg py-2 px-3  focus:outline-none hover:text-orange-500 hover:transition-colors ">
                                                        Fakultas Teknik Industri[FTI]
                                                        <svg className="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:-rotate-90 sm:-rotate-90 duration-300 ms-2 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                                    </button>

                                                    <div className="hs-dropdown-menu transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg before:absolute sm:border before:-end-5 before:top-0 before:h-full before:w-5 sm:!mx-[10px] top-0 end-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-navbar-example-dropdown-sub">
                                                        <div className="p-1 space-y-1">
                                                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                                                Program Studi Teknik Elektro
                                                            </a>
                                                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                                                Program Studi Teknik Mesin
                                                            </a>
                                                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                                                Program Studi Magister Teknik Mesin
                                                            </a>
                                                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                                                Program Studi Teknik Industri
                                                            </a>
                                                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                                                Program Studi Magister Teknik Industri
                                                            </a>
                                                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                                                Program Studi Teknik Kimia
                                                            </a>
                                                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                                                Program Studi Informatika
                                                            </a>
                                                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                                                Program Studi Sistem Informasi
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] relative">
                                                    <button id="hs-navbar-example-dropdown-sub" type="button" className="hs-dropdown-toggle w-full flex justify-between items-center text-sm text-black rounded-lg py-2 px-3  focus:outline-none hover:text-orange-500 hover:transition-colors ">
                                                        Fakultas Teknik Sipil dan Perencanaan [FTSP]
                                                        <svg className="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:-rotate-90 sm:-rotate-90 duration-300 ms-2 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                                    </button>

                                                    <div className="hs-dropdown-menu transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg before:absolute sm:border before:-end-5 before:top-0 before:h-full before:w-5 sm:!mx-[10px] top-0 end-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-navbar-example-dropdown-sub">
                                                        <div className="p-1 space-y-1">
                                                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                                                Program Studi Teknik Sipil
                                                            </a>
                                                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                                                Program Studi Teknik Geodesi
                                                            </a>
                                                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                                                Program Studi Perencanaan Wilayah dan Kota
                                                            </a>
                                                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                                                Program Studi Teknik Lingkungan
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] relative">
                                                    <button id="hs-navbar-example-dropdown-sub" type="button" className="hs-dropdown-toggle w-full flex justify-between items-center text-sm text-black rounded-lg py-2 px-3  focus:outline-none hover:text-orange-500 hover:transition-colors ">
                                                        Fakultas Arsitektur dan Desain [FAD]
                                                        <svg className="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:-rotate-90 sm:-rotate-90 duration-300 ms-2 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                                    </button>

                                                    <div className="hs-dropdown-menu transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg before:absolute sm:border before:-end-5 before:top-0 before:h-full before:w-5 sm:!mx-[10px] top-0 end-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-navbar-example-dropdown-sub">
                                                        <div className="p-1 space-y-1">
                                                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                                                Program Studi Arsitektur
                                                            </a>
                                                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                                                Program Studi Desain Interior
                                                            </a>
                                                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                                                Program Studi Desain Produk
                                                            </a>
                                                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                                                Program Studi Desain Komunikasi Visual
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black  focus:outline-none hover:text-orange-500 hover:transition-colors" href="#">
                                        Kemahasiswaan
                                    </a>
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black  focus:outline-none hover:text-orange-500 hover:transition-colors" href="#">
                                        Kalender Akademik
                                    </a>
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black  focus:outline-none hover:text-orange-500 hover:transition-colors" href="#">
                                        Jadwal Ujian
                                    </a>
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black  focus:outline-none hover:text-orange-500 hover:transition-colors" href="#">
                                        E-Learning
                                    </a>
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black  focus:outline-none hover:text-orange-500 hover:transition-colors" href="#">
                                        Rekognisi Pembelajaran Luar (RPL)
                                    </a>
                                </div>
                            </div>

                            <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] ">
                                <button id="hs-navbar-example-dropdown" type="button" className="hs-dropdown-toggle flex items-center w-full
           text-black hover:text-orange-500 hover: transition-colors font-medium" aria-haspopup="menu" aria-expanded="false" aria-label="Mega Menu">
                                    Riset & Inovasi
                                    <svg className="hs-dropdown-open:-rotate-180 sm:hs-dropdown-open:rotate-0 duration-300 ms-1 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </button>

                                <div className="hs-dropdown-menu transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-1 space-y-1 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5 hidden" role="menu" aria-orientation="vertical" aria-labelledby="hs-navbar-example-dropdown">
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                        Penelitian & Abdimas
                                    </a>
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                        Itenas Jurnal
                                    </a>
                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black focus:outline-none focus:bg-white dark:text-black hover:text-orange-500 hover:transition-colors " href="#">
                                        Science Techno Park
                                    </a>
                                </div>
                            </div>

                            <a className="font-medium text-black hover:text-orange-500 hover:transition-colors focus:outline-none " href="#">Prestasi</a>
                            <a className="font-medium text-black hover:text-orange-500 hover:transition-colors focus:outline-none " href="#">Beasiswa</a>

                            <a className=" flex gap-1 font-bold text-sm text-orange-500 hover:text-orange-700 hover:transition-colors focus:outline-none uppercase " href="#">Pendaftaran
                                
                                    <Image src={inggris} alt={''} height={25} width={40} className='h-full border border-gray-500'/>
                                    <Image src={indonesia} alt={''} height={25} width={35} className=' h-full border border-gray-500' /> </a>
                                
                            <a className="font-medium text-black hover:text-orange-500 hover:transition-colors focus:outline-none " href="#">|</a>
                            <a className="font-medium text-black/20 hover:text-orange-500 hover:transition-colors focus:outline-none " href="#">
                                <FaSearch />
                            </a>


                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar