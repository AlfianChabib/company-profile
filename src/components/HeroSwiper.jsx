import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "../assets";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSwiper() {
  console.log(images);
  return (
    <Swiper
      className="w-full mySwiper"
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop
    >
      {images.map((image, i) => (
        <SwiperSlide key={i} className="object-cover object-center">
          <img src={image.image} alt={image.alt} className="w-full hero-img" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
