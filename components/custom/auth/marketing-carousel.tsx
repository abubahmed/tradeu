"use client"

import React from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const MarketingCarousel = () => {
  const IMAGES = [
    {
      src: "/images/Vintage_College_Princeton_University_Tigers_Blue_MV_Sport_Sweatshirt.png",
      alt: "Vintage sweatshirt",
    },
    { src: "/images/M2_MacBook_Air.png", alt: "M2 MacBook Air" },
    { src: "/images/JanSport_Laptop_Backpack.jpg", alt: "JanSport Backpack" },
    { src: "/images/Ergonomic Office Chair.jpg", alt: "Ergonomic chair" },
  ];
  const CAROUSEL_DIM = 350;

  return (
    <div className={`mx-auto my-auto w-[${CAROUSEL_DIM}px]`}>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}>
        <CarouselContent>
          {IMAGES.map(({ src, alt }) => (
            <CarouselItem key={src}>
              <Image
                src={src}
                alt={alt}
                width={CAROUSEL_DIM}
                height={CAROUSEL_DIM}
                className="w-full h-auto object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default MarketingCarousel;
