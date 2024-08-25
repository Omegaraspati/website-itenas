'use client'

import React from 'react'
import News from './components2/News'
import NewsSmall from './components2/NewsSmall'

const Hero = () => {
    return (
        <div>
            <div className='sm:p-24 p-16 sm:w-[1600px]'>
                <h1 className='font-extrabold text-orange-500 text-4xl'>
                    ORANGE NEWS
                </h1>
                <p className='pt-2'>
                    Kabar terkini dari kampus Itenas, tentang kiprah mahasiswa dan mahasiswi kami, kegiatan dosen dan pengabdian masyarakat.
                    Serta berbagai acara seru yang terjadi di berbagai sudut kampus Itenas. Menyapa masyarakat dengan kebaikan yang dibagikan dengan senang hati.
                </p>

                <div className='pt-5'>
                    <div className="relative w-full max-w-[1600px]">
                        <input type="text" className="w-full py-3 pl-10 pr-3 text-black bg-gray-200 border-black rounded-lg shadow-sm focus:outline-none " placeholder="Search..." />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            {/* <!-- Search icon --> */}
                            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z"></path>
                            </svg>
                        </div>
                    </div>
                    <h1 className='text-4xl font-extrabold py-5 underline-custom text-black'>
                    Berita
                </h1>
                <div className='flex gap-20 '>
                <News/>
                <NewsSmall />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hero