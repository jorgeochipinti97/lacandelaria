"use client";
import axios from "axios";
import gsap from "gsap";
import React, { useEffect, useState } from "react";

const AdmingPage = () => {
  const [queries, setQueries] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    isLogin &&
      gsap.to(".user", {
        opacity: "0",
        display: "none",
      });
    isLogin &&
      gsap.to(".adminpage", {
        opacity: "1",
        display: "block",
      });
  }, [isLogin]);

  useEffect(() => {
    const getQueries = async () => {
      try {
        const response = await axios.get("/api/query");
        setQueries(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    getQueries();
  }, []);

  return (
    <>
      <div className="h-screen  w-screen bg-black flex items-center justify-center user">
        <div className="flex flex-col justify-center items-center">
          <p>Contraseña</p>
          <input
            type="password"
            label="password"
            className="mt-2 rounded-lg text-slate-800  p-1"
            onChange={(e) => e.target.value == "lorena123" && setIsLogin(true)}
          />
        </div>
      </div>
      <div
        className="min-h-screen w-screen bg-white  adminpage "
        style={{ display: "none" }}
      >
        <div className="pt-5">
          <p className="text-4xl text-center font-extrabold text-gray-900 mb-5">
            Consultas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {queries.map((e,index) => {
            // Convertir la fecha a un formato más legible
            let fecha = new Date(e.date);
            let fechaFormateada = fecha.toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });

            return (
              <div className="flex justify-center my-1" key={index}>
                <div className="bg-gray-900  h-64 rounded-lg w-9/12">
                  <div className="flex p-2 gap-1">
                    <div className="">
                      <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
                    </div>
                  </div>
                  <div className=" px-4">
                    <p className="text-2xl font-bold">{e.name}</p>
                    <p className="font-xl font-semibold">{e.phone}</p>
                    <p className="font-xl font-medium">{fechaFormateada}</p>
                    <p className="text-justify mt-5  "> {e.query}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AdmingPage;
