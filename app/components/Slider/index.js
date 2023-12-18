import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { SlideCardComponent } from "../SlideCardComponent";

export const SliderComponent = () => {
  return (
    <div>
      <div className="flex w-screen  items-center justify-center flex-col md:hidden  ">
        <div className=" w-full md:mt-0   h-fit">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            pagination={false}
            slidesPerView={1.6}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            className="w-screen "
            modules={[EffectCoverflow, Pagination]}
          >
            <SwiperSlide style={{}} className="bg-gray-950   	rounded-lg">
              <SlideCardComponent
                titulo={"Naturaleza y Frescura"}
                subtitulo={"Tu Celebración al Aire Libre"}
                imagen={"/slide1.jpg"}
                body={
                  "   Encuentra una mezcla perfecta de naturaleza y comodidad para tu evento."
                }
              />
            </SwiperSlide>
            <SwiperSlide style={{}} className="bg-gray-950 flex	rounded-lg">
              <SlideCardComponent
                titulo={"Confort y Estilo"}
                subtitulo={"Tu Espacio para Celebrar"}
                imagen={"/slide3.jpg"}
                body={
                  " Con su diseño moderno y acogedor, es el lugar ideal para disfrutar de momentos especiales"
                }
              />
            </SwiperSlide>
            <SwiperSlide style={{}} className="bg-gray-950 flex    	rounded-lg">
              <SlideCardComponent
                titulo={"Sabor y Tradición"}
                subtitulo={"Crea momentos deliciosos en nuestro asador"}
                imagen={"/backpink.jpg"}
                body={
                  "   Encuentra una mezcla perfecta de naturaleza y comodidad para tu evento."
                }
              />
            </SwiperSlide>
            <SwiperSlide style={{}} className="bg-gray-950 flex 	rounded-lg">
              <SlideCardComponent
                titulo={"Sabor y Tradición"}
                subtitulo={"Crea momentos deliciosos en nuestro asador"}
                imagen={"/slide4.jpg"}
                body={
                  "   Encuentra una mezcla perfecta de naturaleza y comodidad para tu evento."
                }
              />
            </SwiperSlide>
            <SwiperSlide style={{}} className="bg-gray-950 flex  	rounded-lg">
              <SlideCardComponent
                titulo={"Sabor y Tradición"}
                subtitulo={"Crea momentos deliciosos en nuestro asador"}
                imagen={"/parrilla.jpg"}
                body={
                  "   Encuentra una mezcla perfecta de naturaleza y comodidad para tu evento."
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="md:flex w-screen  items-center justify-center flex-col hidden  ">
        <div className=" w-full md:mt-0   h-fit">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            pagination={false}
            slidesPerView={1.6}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            className="w-screen "
            modules={[EffectCoverflow, Pagination]}
          >
            <SwiperSlide style={{}} className="bg-gray-950   	rounded-lg">
              <SlideCardComponent
                titulo={"Naturaleza y Frescura"}
                subtitulo={"Tu Celebración al Aire Libre"}
                imagen={"/slide1.jpg"}
                body={
                  "   Encuentra una mezcla perfecta de naturaleza y comodidad para tu evento."
                }
              />
            </SwiperSlide>
            <SwiperSlide style={{}} className="bg-gray-950 flex	rounded-lg">
              <SlideCardComponent
                titulo={"Confort y Estilo"}
                subtitulo={"Tu Espacio para Celebrar"}
                imagen={"/slide3.jpg"}
                body={
                  " Con su diseño moderno y acogedor, es el lugar ideal para disfrutar de momentos especiales"
                }
              />
            </SwiperSlide>



            <SwiperSlide style={{}} className="bg-gray-950 flex  	rounded-lg">
              <SlideCardComponent
                titulo={"Sabor y Tradición"}
                subtitulo={"Crea momentos deliciosos en nuestro asador"}
                imagen={"/parrilla.jpg"}
                body={
                  "   Encuentra una mezcla perfecta de naturaleza y comodidad para tu evento."
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
