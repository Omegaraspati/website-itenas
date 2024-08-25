'use client'

import React from 'react'
import Image from 'next/image'
import faktaitenas from '../assets/faktaitenas.png'
import { FaGraduationCap } from 'react-icons/fa'

const Banner = () => {
  return (
    <div>
      <section className="relative bg-[url(https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/1040/2024/07/09/PMB-ITENAS-2023-1-3943112702.png)] h-[500px] bg-cover bg-center bg-no-repeat">
  <div className="mx-auto max-w-screen-xl px-10 py-44 lg:flex lg:h-[500px] lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-2xl font-normal sm:text-2xl bg-orange-300 bg-opacity-40 text-white">
      PENERIMAAN MAHASISWA BARU 2024/2025
      </h1>

      <p className="mt-1 sm:text-lg/relaxed text-white bg-orange-300 bg-opacity-40">
      Itenas membuka jalur pendaftaran dengan seleksi masuk melalui jalur PMdK,
       USM/ODT, Beasiswa Cahaya, serta UTBK. Klik tombol dibawah ini untuk cek informasi syarat & cara-cara mendaftar ke Itenas Bandung!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
      <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-orange-500 text-white shadow-sm hover:bg-orange-500 hover: focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none transform transition-transform duration-300 hover:scale-90">
                <span><FaGraduationCap/></span>Informasi Pendaftaran
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                </svg>
            </button>

            <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-red-500 text-white shadow-sm hover:bg-orange-500 hover: focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none transform transition-transform duration-300 hover:scale-90">
                <span><FaGraduationCap/></span>Daftar Sekarang
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                </svg>
            </button>
      </div>
    </div>
  </div>
</section>
<Image src={faktaitenas} alt={'faktaitenas'} className='mx-auto'/>
<hr className="border-gray-500"></hr>
    </div>
  )
}

export default Banner