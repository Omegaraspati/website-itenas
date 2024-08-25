import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import footerkanan from '@/assets/footerkanan.png'
import footerbawah from '@/assets/footerbawah.png'

const Footer = () => {
    return (
        <div>
            <footer className="bg-orange-400">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-1">
                        <div className="py-8 lg:py-16 lg:pe-16">
                            <div className="mt-10 grid grid-cols-1 gap-16 sm:grid-cols-4">
                                <div>
                                    <p className=" text-white uppercase text-sm">Sumber Informasi Akademik</p>
                                    <ul className="mt-4 space-y-2 text-xs">
                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> Carrier Development Center</a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> Kalender Akademik Sarjana</a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> Kalender Akademik Magister</a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> SISFO SKK</a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> Kemahasiswaan Itenas</a>
                                        </li>
                                    </ul>
                                    <p className=" text-white uppercase text-sm pt-24">INSTITUT TEKNOLOGI NASIONAL</p>
                                    <p className='text-xs mt-4 text-black'>Jl. PH.H. Mustofa No.23 Bandung 40124
                                        Phone: +62 22 7272215, Fax +62 22 7202892
                                        humas[at]itenas.ac.id, http://www.itenas.ac.id</p>
                                </div>



                                <div>
                                    <p className=" text-white uppercase text-sm">SUMBER INFORMASI INSTITUT</p>
                                    <ul className="mt-4 space-y-2 text-xs">
                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> Lembaga Penelitian & Pengabdian kepada Masyarakat</a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> UPT Teknologi Informasi & Komunikasi</a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> UPT Perpustakaan</a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> Satuan Pengembangan Pembelajaran</a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> Satuan Penjaminan Mutu</a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> Satuan Pengawas Internal</a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> Biro Akademik</a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> Biro Keuangan & Umum</a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> Biro Kemahasiswaan & Alumni</a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> Biro Sumber Daya Manusia</a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> Biro Kerja Sama, Hubungan Masyarakat & Pemasaran</a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> Kantor Urusan Internasional</a>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <p className=" text-white uppercase text-sm">Link</p>
                                    <ul className="mt-4 space-y-2 text-xs">
                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> Itenas e-Magazine</a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> Jurnal Online</a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> Repository</a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> e-Book</a>
                                        </li>

                                        <li>
                                            <a href="#" className="text-black hover:text-white hover:transition-colors"> Download</a>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <p className=" text-white uppercase">FOLLOW US</p>
                                    <ul className="mt-4 text-3xl flex gap-3">
                                        <li>
                                            <a href="#" className="text-gray-300 hover:text-white hover:transition-colors">
                                                <FaFacebook />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-gray-300 hover:text-white hover:transition-colors">
                                                <FaTwitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-gray-300 hover:text-white hover:transition-colors">
                                                <FaInstagram />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-gray-300 hover:text-white hover:transition-colors">
                                                <FaYoutube />
                                            </a>
                                        </li>
                                    </ul>
                                    <Image src={footerkanan} alt={'footerkanan'} className='w-52' />
                                </div>
                            </div>



                            <div className="mt-8 border-t border-gray-100 pt-8">
                                
                            <Image src={footerbawah} alt='footerbawah' className='w-full h-full ' /> 
                                <p className="mt-8 text-xs text-gray-500 text-center">&copy; Itenas | Institut Teknologi Nasional - Bandung</p>
                            </div>


                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer