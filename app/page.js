"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Preloader from "./components/preloader";
import { AnimatePresence } from "framer-motion";
import { HeroComponent } from "./components/Hero";
import { CardComponent } from "./components/CardComponent";
import { SliderComponent } from "./components/Slider";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = containerRef.current.getElementsByClassName("card");
      for (const card of cards) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <main className="">
      <main>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <HeroComponent />
        <section
          className="bg-gray-300 min-h-screen flex flex-col justify-around items-around snap-start   border-2  "
          style={{}}
        >
          <p
            style={{ lineHeight: "auto" }}
            className="text-slate-800 text-2xl md:text-4xl mt-2 font-sans font-extrabold text-center md:mx-0 mx-2 "
          >
            Donde los Momentos Especiales Cobran Vida
          </p>
          <div className="flex flex-col justify-around items-center  w-full">
            <SliderComponent />
          </div>
          <div className="flex items-center justify-center h-full ">
            <button class="animated-button">
              <svg
                viewBox="0 0 24 24"
                class="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span class="text">Conocenos</span>
              <span class="circle"></span>
              <svg
                viewBox="0 0 24 24"
                class="arr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>
        </section>
        <section
          className="min-h-screen bg-white flex justify-around flex-col items-center snap-start "
          style={{
            backgroundPosition: "center",
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,.3) 40%, black),linear-gradient(to bottom,rgba(0,0,0,0.8),rgba(0, 0, 0, 0.5)),url('/backpink.jpg')",
            backgroundSize: "cover",
          }}
        >
          <div className="flex justify-center items-center  flex-col">
            <p className="md:text-5xl text-slate-200 font-semibold text-2xl mt-5  ">
              Nuestros servicios
            </p>
            <p className="hidden md:block text-slate-200 font-light text-md mt-2 md:mt-0  w-full   text-center">
              Entendemos la importancia de{" "}
              <span className=" font-semibold">
                {" "}
                crear momentos inolvidables
              </span>
              .
            </p>
            <p className="text-slate-200  text-md  font-semibold w-full mt-2 md:mt-0    text-center">
              {" "}
              Personalizado para cada ocasión.{" "}
            </p>
          </div>
          <div
            className="md:grid md:grid-cols-3 flex w-screen md:mt-0 mt-5  justify-center  md:w-fit "
            style={{ flexWrap: "wrap" }}
            ref={containerRef}
          >
            <CardComponent
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 36 36"
                >
                  <path fill="none" d="M0 0H36V36H0z"></path>
                  <path
                    fill="#f5f5f7"
                    d="M18.17 1.92a16 16 0 1016 16 16 16 0 00-16-16M26.23 18h1.54a9.61 9.61 0 01-9.6 9.53H18V26h.17a8.07 8.07 0 008.06-8M6.05 18h-1.6v-.08A13.72 13.72 0 0118 4.21v1.6A12.13 12.13 0 006.05 17.92zm4.05 0H8.56v-.08A9.61 9.61 0 0118 8.32v1.54a8.07 8.07 0 00-7.9 8.06zm4.32-.08a3.75 3.75 0 113.75 3.75 3.75 3.75 0 01-3.75-3.75m3.75 13.71H18V30h.17a12.13 12.13 0 0012.11-12h1.6a13.73 13.73 0 01-13.71 13.63"
                    className="clr-i-solid clr-i-solid-path-1"
                  ></path>
                  <path fill="none" d="M0 0h36v36H0z"></path>
                </svg>
              }
              title={"DJ Profesional"}
              subtitle={"Música y ambiente perfecto con nuestro DJ experto."}
            />
            <CardComponent
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="60"
                  viewBox="0 0 576 512"
                >
                  <path fill="none" d="M0 0H576V512H0z"></path>
                  <path
                    fill="#f5f5f7"
                    d="M296 464h-56V338.78l168.74-168.73c15.52-15.52 4.53-42.05-17.42-42.05H24.68c-21.95 0-32.94 26.53-17.42 42.05L176 338.78V464h-56c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h240c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40M432 0c-62.61 0-115.35 40.2-135.18 96h52.54c16.65-28.55 47.27-48 82.64-48 52.93 0 96 43.06 96 96s-43.07 96-96 96c-14.04 0-27.29-3.2-39.32-8.64l-35.26 35.26C379.23 279.92 404.59 288 432 288c79.53 0 144-64.47 144-144S511.53 0 432 0"
                  ></path>
                </svg>
              }
              title={"Cócteles Exquisitos"}
              subtitle={"Sabores únicos en cada cóctel, arte en cada trago."}
            />
            <CardComponent
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 512 512"
                >
                  <path fill="none" d="M0 0H512V512H0z"></path>
                  <path
                    fill="#f5f5f7"
                    d="M468.479 361.5c-9.072-4.233-20.361-9.5-41.054-9.5s-31.983 5.268-41.053 9.5c-7.782 3.631-13.928 6.5-27.523 6.5s-19.739-2.868-27.52-6.5c-9.071-4.232-20.359-9.5-41.052-9.5s-31.981 5.269-41.051 9.5c-7.781 3.631-13.926 6.5-27.519 6.5s-19.737-2.868-27.517-6.5c-9.07-4.232-20.358-9.5-41.05-9.5s-31.981 5.269-41.051 9.5c-7.781 3.631-13.926 6.5-27.519 6.5s-19.738-2.868-27.519-6.5C47.981 357.269 36.692 352 16 352v32c13.593 0 19.738 2.868 27.519 6.5 9.07 4.232 20.359 9.5 41.051 9.5s31.981-5.269 41.051-9.5c7.781-3.631 13.926-6.5 27.519-6.5s19.737 2.868 27.517 6.5c9.07 4.232 20.358 9.5 41.05 9.5s31.981-5.269 41.051-9.5c7.781-3.631 13.927-6.5 27.519-6.5s19.739 2.868 27.52 6.5c9.071 4.232 20.359 9.5 41.052 9.5s31.983-5.268 41.054-9.5c7.781-3.631 13.928-6.5 27.522-6.5s19.741 2.868 27.521 6.5c9.072 4.233 20.361 9.5 41.054 9.5v-32c-13.594 0-19.741-2.868-27.521-6.5M427.425 448c-20.693 0-31.983 5.268-41.053 9.5-7.782 3.631-13.928 6.5-27.523 6.5s-19.739-2.868-27.52-6.5c-9.071-4.232-20.359-9.5-41.052-9.5s-31.981 5.269-41.051 9.5c-7.781 3.631-13.926 6.5-27.519 6.5s-19.737-2.868-27.517-6.5c-9.07-4.232-20.358-9.5-41.05-9.5s-31.981 5.269-41.051 9.5c-7.781 3.631-13.926 6.5-27.519 6.5s-19.738-2.868-27.519-6.5C47.981 453.269 36.692 448 16 448v32c13.593 0 19.738 2.868 27.519 6.5 9.07 4.232 20.359 9.5 41.051 9.5s31.981-5.269 41.051-9.5c7.781-3.631 13.926-6.5 27.519-6.5s19.737 2.868 27.517 6.5c9.07 4.232 20.358 9.5 41.05 9.5s31.981-5.269 41.051-9.5c7.781-3.631 13.927-6.5 27.519-6.5s19.739 2.868 27.52 6.5c9.071 4.232 20.359 9.5 41.052 9.5s31.983-5.268 41.054-9.5c7.781-3.631 13.928-6.5 27.522-6.5s19.741 2.868 27.521 6.5c9.072 4.233 20.361 9.5 41.054 9.5v-32c-13.594 0-19.741-2.868-27.521-6.5-9.072-4.232-20.361-9.5-41.054-9.5M248 272h144v56h32V115.878a47.8 47.8 0 018.446-27.193L482.417 16h-38.834l-37.507 54.556A79.67 79.67 0 00392 115.878V160H248v-44.122a47.8 47.8 0 018.446-27.193L306.417 16h-38.834l-37.507 54.556A79.67 79.67 0 00216 115.878V328h32zm0-80h144v48H248z"
                  ></path>
                </svg>
              }
              title={"Pileta"}
              subtitle={"Ideal para celebraciones vibrantes."}
            />

            <CardComponent
              title={"Guardavidas Certificado"}
              subtitle={
                "Seguridad y tranquilidad con nuestro guardavidas profesional."
              }
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 512 512"
                >
                  <path fill="none" d="M0 0H512V512H0z"></path>
                  <path
                    fill="#f5f5f7"
                    d="M93.75 81.443c-5.38 0-12.368 2.49-22.358 8.967 3.966 4.682 8.167 9.687 16.47 19.256 5.782 6.663 11.618 13.29 16.026 18.088.038.042.055.055.092.096l30.894-17.932-14.652-14.148c-11.292-9.404-18.644-13.866-25.418-14.293a16.554 16.554 0 00-1.055-.034zm120.08 15.082a89.446 89.446 0 00-2.643.01c-10.46.193-20.2 2.23-26.742 5.424l-67.262 39.038c2.45.544 4.885 1.196 7.287 2.02 17.275 5.923 33.093 18.223 49.568 34.7l216.44 213.5 80.978-44.433L258.54 111.38c-8.656-7.84-22.49-12.908-36.693-14.394a86.624 86.624 0 00-8.018-.46zM58.192 102.74c-17.543 20.723-20.57 37.186-15.326 57.004.692 2.618 3.057 6.357 6.373 10.47a182.968 182.968 0 017.086-9.478c3.99-4.995 8.385-9.183 13.085-12.558l-.106-.2 2.768-1.61a56.414 56.414 0 014.13-2.393l11.868-6.89a1048.196 1048.196 0 01-13.803-15.622 2604.997 2604.997 0 01-16.074-18.723zm184.093 13.438l58.415 61.67c-46.086-5.037-56.79 13.2-69.027 34.2l-57.334-59.304zM103.702 157.23a45.332 45.332 0 00-2.15.002c-6.976.18-14.207 2.058-22.252 5.885-3.035 2.29-5.99 5.196-8.91 8.852-25.77 32.264-30.45 59.135-25.484 83.477 4.965 24.343 20.536 46.656 37.916 66.455 13.314 15.168 28.86 23.992 48.472 27.93 19.614 3.94 43.438 2.708 71.98-3.475 33.246-7.2 66.01 8.42 95.81 27.665 26.118 16.868 50.676 37.09 70.98 49.95l8.79-18.935-217.52-214.57-.022-.022c-15.524-15.524-29.565-25.905-42.682-30.402-5.02-1.722-9.925-2.695-14.928-2.813zm367.08 210.456l-73.45 40.304-10.48 22.567 70.833-38.41 13.096-24.46z"
                  ></path>
                </svg>
              }
            />
            <CardComponent
              title={"Espacio Versátil"}
              subtitle={"Espacios adaptables para cualquier tipo de evento."}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0H24V24H0z"></path>
                  <path
                    fill="#f5f5f7"
                    d="M16 13h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1m0-10v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1s-1 .45-1 1m2 17H6c-.55 0-1-.45-1-1V9h14v10c0 .55-.45 1-1 1"
                  ></path>
                </svg>
              }
            />
            <CardComponent
              title={"Servicio Personalizado"}
              subtitle={
                "Atención detallada y personalizada para tu celebración."
              }
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 640 512"
                >
                  <path fill="none" d="M0 0H640V512H0z"></path>
                  <path
                    fill="#f5f5f7"
                    d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4M544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16M0 384h64c17.7 0 32-14.3 32-32V128.2H0zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16m435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1"
                  ></path>
                </svg>
              }
            />
          </div>
          <div className="flex items-center justify-center ">
            <div className="flex items-center justify-center h-full my-5 md:mt-0 ">
              <button class="btn px-4"> Agendar visita</button>
            </div>
          </div>
        </section>
        <section
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,.3) 40%, black),linear-gradient(to bottom,rgba(0,0,0,0.8),rgba(0, 0, 0, 0.5)),url('/background.jpg')",
            backgroundSize: "cover",
          }}
          className="flex flex-col items-center justify-around min-h-screen snap-start"
        >
          <div className="flex flex-col items-center justify-center">
            <p className="mt-4 text-5xl font-bold">Conocenos</p>
            <div className="flex flex-col justify-start items-center w-11/12 md:w-8/12">
              <p className="text-slate-20 font-light w-full  md:pt-5 text-justify hidden md:block ">
                Ubicada en el corazón de Monte Grande, La Candelaria es una
                finca encantadora que ofrece una experiencia única. Contamos con
                instalaciones versátiles, incluyendo una elegante piscina, un
                salón espacioso y un parque sereno con cómodos livings.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex justify-center">
                  <div class="form-container mt-5 max-w-6/12">
                    <form class=" ">
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input
                          required=""
                          name="email"
                          id="email"
                          type="text"
                          className="px-1 py-2 mt-2 font-sans font-medium"
                        />
                      </div>
                      <div class="form-group mt-5">
                        <label for="textarea">
                          Comentame acerca de tu evento
                        </label>
                        <textarea
                          required=""
                          cols="50"
                          rows="10"
                          id="textarea"
                          name="textarea"
                          className="px-1 py-2 mt-2 font-sans font-medium"
                        >
                          {" "}
                        </textarea>
                      </div>
                      <button type="submit" class="btn2 px-2 text-md">
Enviar
                      </button>
                    </form>
                  </div>
                </div>
                <div className="flex justify-center mt-5 md:mt-0 items-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52402.308139070235!2d-58.529445797245!3d-34.82746529790229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd17cca20e355%3A0x62eaf629179bba06!2sDomingo%20Faustino%20Sarmiento%20%26%20Independencia%2C%20Monte%20Grande%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1702645867422!5m2!1ses!2sar"
                    width="80%"
                    height="80%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    className="mt-5 rounded-xl"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
                
              <div className="flex justify-center">
              <p className="mt-5 text-2xl font-semibold text-center">¡Comunicate con nosotros!</p>
              </div>
              <div>
                <div class="icons">
                <a href="#" class="icon whatsapp">
            <svg
              viewBox="0 0 24 24"
              width={"48"}
              height={"48"}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                  fill="white"
                ></path>{" "}
              </g>
            </svg>
          </a>
                  <a href="#" class="icon instagram">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="48"
                      height="48"
                    >
                      <path
                        d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"
                        fill="rgba(254,252,252,1)"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="snap-start" />
      </main>
    </main>
  );
}
