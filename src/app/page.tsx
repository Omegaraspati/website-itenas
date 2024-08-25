import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import CarouselTesti from "@/components/components2/CarouselTesti";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <Carousel/>
    <Hero/>
    <Banner/>
    <CarouselTesti />
    <Footer/>
    </>
  );
}
