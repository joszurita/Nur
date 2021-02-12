import './Nur.css';
import React from 'react';
import ima5 from './imagenes/ima5.jpg';
import ima2 from './imagenes/ima2.png';
import ima3 from './imagenes/ima3.png';
import ima4 from './imagenes/ima4.png';
const Nur =()=>{
    return(
        <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
        <div className="carousel relative container mx-auto shadow-2xl" style={{maxWidth:'1600px'}}>
            <div className="carousel-inner relative overflow-hidden w-full">
                {/*<!--Slide 1-->*/}
                <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true"
                    hidden="" defaultChecked="checked"/>
                <div className="carousel-item absolute opacity-0" style={{height:'60vh'}}>
                    <div className="block h-full w-full bg-indigo-1000 bg-fondocarrucel">
                        <div className="md:flex h-full w-full">
                            <div className="h-60 w-60 md:h-full md:w-full">
                                <img src={ima2} alt="tipa" className="h-full mx-auto"/>
                            </div>
                            <div className="mx-auto flex text-white">
                                <div
                                    className="flex flex-col my-auto lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide mx-auto">
                                    <p className="my-3 text-3xl font-bold tracking-wider ">CON MOTIVO DEL COVID 19
                                        MUCHOS ESTUDIANTES Y SUS FAMILIARES SE VIERON AFECTADOS</p>
                                    <div className="flex mt-6 justify-center">
                                        <div className="w-16 h-1 rounded-full justify-center bg-gray-700 inline-flex">
                                        </div>
                                    </div>
                                    <p className="my-3 text-xl font-bold tracking-wider ">Buscamos computadoras usadas
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <label htmlFor="carousel-3"
                    className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                <label htmlFor="carousel-2"
                    className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

                {/*<!--Slide 2-->*/}
                <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true"
                    hidden="" defaultChecked="checked"/>
                <div className="carousel-item absolute opacity-0" style={{height:'60vh'}}>
                    <div className="block h-full w-full bg-indigo-1000t  bg-fondocarrucel">
                        <div className="flex h-full">
                            <div className="">
                                <img src={ima3} alt="tipa" className="h-full mx-auto"/>
                            </div>
                            <div className="mx-auto flex text-white">
                                <div
                                    className="flex flex-col my-auto lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide mx-auto">
                                    <p className="my-3 text-3xl font-bold tracking-wider ">CON MOTIVO DEL COVID 19
                                        MUCHOS ESTUDIANTES Y SUS FAMILIARES SE VIERON AFECTADOS</p>
                                    <div className="flex mt-6 justify-center">
                                        <div className="w-16 h-1 rounded-full justify-center bg-gray-700 inline-flex">
                                        </div>
                                    </div>
                                    <p className="my-3 text-xl font-bold tracking-wider ">Buscamos computadoras usadas
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <label htmlFor="carousel-1"
                    className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                <label htmlFor="carousel-3"
                    className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

                {/*<!--Slide 3-->*/}
                <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true"
                    hidden="" defaultChecked="checked"/>
                <div className="carousel-item absolute opacity-0" style={{height:'60vh'}}>
                    <div className="block h-full w-full bg-indigo-1000t  bg-fondocarrucel">
                        <div className="flex h-full">
                            <div className="">
                                <img src={ima4} alt="tipa" className="h-full mx-auto"/>
                            </div>
                            <div className="mx-auto flex text-white">
                                <div
                                    className="flex flex-col my-auto lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide mx-auto">
                                    <p className="my-3 text-3xl font-bold tracking-wider ">CON MOTIVO DEL COVID 19
                                        MUCHOS ESTUDIANTES Y SUS FAMILIARES SE VIERON AFECTADOS</p>
                                    <div className="flex mt-6 justify-center">
                                        <div className="w-16 h-1 rounded-full justify-center bg-gray-700 inline-flex">
                                        </div>
                                    </div>
                                    <p className="my-3 text-xl font-bold tracking-wider ">Buscamos computadoras usadas
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <label htmlFor="carousel-2"
                    className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                <label htmlFor="carousel-1"
                    className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

                {/*<!-- Add additional indicators for each slide-->*/}
                <ol className="carousel-indicators">
                    <li className="inline-block mr-3">
                        <label htmlFor="carousel-1"
                            className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
                    </li>
                    <li className="inline-block mr-3">
                        <label htmlFor="carousel-2"
                            className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
                    </li>
                    <li className="inline-block mr-3">
                        <label htmlFor="carousel-3"
                            className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900">•</label>
                    </li>
                </ol>

            </div>
        </div>
         {/*<!--La parte de info sobre como funcionan las donaciones-->*/}
            <div className="m-auto max-w-6xl p-12">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 max-w-md flex flex-col justify-center">
                        <p className="my-3 text-4xl font-bold tracking-wider text-center">
                            ¿QUÉ
                        </p>
                        <p className="mt-6 font-normal text-center text-gray-700 md:mt-0">ES NUR TECH?</p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full justify-center bg-yellow-300 inline-flex"></div>
                        </div>
                        <p className="flex flex-col text-2x1 items-center justify-center mt-10">
                            <span>A causa del COVID 19, con el objetivo de precautelar la salud de estudiantes y
                                docentes,
                                las autoridades determinaron el cambio de modalidad educativa de presencial a virtual.
                                En consecuencia, muchas familias se enfrentaron a esta nueva situación no siempre
                                contando con computadores en sus hogares.</span>
                            <br/>
                            <span>NUR TECH es un proyecto que tiene como objetivo entregar computadores refaccionados a
                                estudiantes de Institutos
                                Tecnológicos Superiores de Quito y sus familias que al momento no disponen de equipos
                                propios.</span>
                            <br/>
                            <span>El proyecto es gestionado por un grupo de voluntarios que son docentes del IST Benito
                                Juárez y activistas locales.</span>
                            <br/>
                        </p>
                        <br/>
                        <br/>

                    </div>
                    <div className="flex md:justify-end w-full md:w-1/2 -mt-15">
                        <div className="bg-dots">
                            <div className="shadow-2xl max-w-md z-10 rounded-full mt-12 ml-4">
                                <div className="text-2xl p-5 bg-yellow-300">
                                    <p className="flex flex-col items-center text-white  mt-10">" El mejoramiento del mundo
                                        puede ser logrado por medio de hechos
                                        puros y hermosos, por medio de una conducta loable y correcta.</p>
                                    <span className="text-black">Bahá’u’lláh "</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-auto max-w-6xl p-12">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 max-w-md flex flex-col justify-center">
                            <div className="flex">
                                <div className="h-40 w-40">
                                    {/*<svg class="fill-current pointer-events-none w-8 h-8 bg"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>*/}
                                    <br/>
                                    <h1>Recoger</h1>
                                    <p>Se acuerda una cita con el donante para retirar el equipo y/o partes.</p>
                                </div>
                                <div className="h-40 w-40">
                                    {/*<svg class="fill-current pointer-events-none w-8 h-8 bg"
                                        xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true" focusable="false" width="1em" height="1em"
                                        style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                        <path fill="none" stroke="#626262" stroke-width="2"
                                            d="M16 15c4.009-.065 7-3.033 7-7c0-3.012-.997-2.015-2-1c-.991.98-3 3-3 3l-4-4s2.02-2.009 3-3c1.015-1.003 1.015-2-1-2c-3.967 0-6.947 2.991-7 7c.042.976 0 3 0 3c-1.885 1.897-4.34 4.353-6 6c-2.932 2.944 1.056 6.932 4 4c1.65-1.662 4.113-4.125 6-6c0 0 2.024-.042 3 0z" />
            </svg>*/}
                                    <br/>
                                    <h1>Reparar</h1>
                                    <p>A cada equipo se le hace: limpieza, mantenimiento, remanufactura e instalación de
                                        software base</p>
                                </div>
                                <div className="h-40 w-40">
                                    {/*<svg class="fill-current pointer-events-none w-8 h-8"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path fill="#fff"
                                            d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>*/}
                                    <br/>
                                    <h1>Enviar</h1>
                                    <p>Llevamos los equipos directo a la casa de los estudiantes.

                                        Dona ahora</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         {/*<!--La parte donde se pide colaborar-->*/}
    <div className="w-full relative mt-4 shadow-2xl rounded my-24 overflow-hidden">
        <div className="top h-64 w-full bg-blue-600 overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="" className="bg w-full h-full object-cover object-center absolute z-0"/>
            <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
                <h1 className="text-3xl font-semibold">Buscamos</h1>
                <h1 className="text-3xl font-semibold">Ayuda</h1>
            </div>
        </div>
      </div>
      {/*<!--como ayudar-->*/}
      <div>
        <section className="text-gray-200 bg-white-200">
                <div className="max-w-5xl mx-auto px-2 py-24 ">
                    <div className="text-center mb-20">
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
                        <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                            <div className="pattern-dots-md gray-light">
                                <div className="rounded bg-white-200 p-4 transform translate-x-6 -translate-y-6  ">
                                    <div className="flex-grow text-gray-700">
                                        <p className="my-3 text-4xl font-bold tracking-wider text-center">
                                            ¿CÓMO
                                        </p>
                                        <p className="mt-6 font-normal text-center text-gray-700 md:mt-0 ">PUEDO AYUDAR?</p>
                                        <div className="w-14 h-1 rounded-full  bg-yellow-300 inline-flex"></div>

                                        <p className="mt-6 font-normal text-center text-gray-700 md:mt-0 text-justify">
                                        Buscamos computadores usados, partes y repuestos para entregarlos a estudiantes
                                        del IST YAVIRAC que no disponen al momento de equipos propios
                                        </p>

                                    </div>
                                    <br/>
                                    <div className="max-w-sm mx-auto p-1 pr-0 flex items-center">
                                        <button
                                            className="mr-5 bg-gray-700 hover:bg-yellow-300 hover:text-black border border-gray-400 text-white font-bold py-2 px-6 rounded-lg">
                                            QUIERO PARTICIPAR
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                            <div className="pattern-dots-md gray-light">
                                <div className="rounded bg-yellow-100 p-4 transform translate-x-6 -translate-y-6 ">
                                    <div className="flex-grow text-gray-600 ">
                                        <div className="flex justify-center ...">
                                            {/*<svg class="fill-current pointer-events-none w-8 h-8 "
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                                                    clip-rule="evenodd" />
                                                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
</svg>*/}
                                        </div>
                                        <p className="mt-6 font-normal text-center text-gray-700 md:mt-0">
                                            Dona un computador.
                                        </p>
                                        <br/>
                                        <div className="flex justify-center ...">
                                            {/*<svg class="fill-current pointer-events-none w-8 h-8"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                    clip-rule="evenodd" />
</svg>*/}
                                        </div>
                                        <p className="mt-6 font-normal text-center text-gray-700 md:mt-0">Dona partes y
                                            piezas</p>
                                        <br/>
                                        <div className="flex justify-center ...">
                                            {/*<svg class="fill-current pointer-events-none w-8 h-8"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path
                                                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
</svg>*/}
                                        </div>
                                        <p className="mt-6 font-normal text-center text-gray-700 md:mt-0">Promueve el
                                            proyecto en rus redes</p>
                                        <br/>
                                        <div className="flex justify-center ...">
                                            {/*<svg class="fill-current pointer-events-none w-8 h-8"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path
                                                    d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
</svg>*/}
                                        </div>
                                        <p className="mt-6 font-normal text-center text-gray-700 md:mt-0">Hazte voluntario
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                            <div className="pattern-dots-md gray-light">
                                <div className="rounded bg-yellow-300 p-4 transform translate-x-6 -translate-y-6 ">
                                    <img src={ima5} alt="tipa"/>
                                </div>
                            </div>
            
        </div>
        </div>
        </div>
        </section>
    </div>
    {/*<!--10 Estamos muy orgullosos de nuestros Amables  Dontantes.-->*/}
        <div className="w-full relative mt-4 shadow-2xl rounded my-24 overflow-hidden">
            <div className="top h-64 w-full bg-blue-600 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    alt="" className="bg w-full h-full object-cover object-center absolute z-0"/>
                <div
                    className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
                    <h1 className="text-base  text-center text-3xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">La educación
                        es uno de los factores que más influye en el avance y progreso de personas y sociedades</h1>
                </div>
            </div>
            <div>
                <section className="text-gray-200 bg-white-200">
                    <div className="max-w-6xl mx-auto px-5 py-24 ">
                        <div className="text-center mb-20">
                            <h1
                                className=" title-font  mb-4 text-4xl text-yellow-300 font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
                                10</h1>
                            <p className="text-base text-3xl leading-relaxed text-gray-700 xl:w-2/4 lg:w-3/4 mx-auto">
                                Estamos muy orgullosos de nuestros Amables Dontantes.</p>
                            <div className="flex justify-center ...">
                                {/*<svg class="fill-current pointer-events-none w-10 h-10 "
                                    xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true" focusable="false" width="1em" height="1em"
                                    style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                                    <path
                                        d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8a264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39c-10 6.1-19.5 12.8-28.5 20.1c-9-7.3-18.5-14-28.5-20.1c-41.8-25.5-89.9-39-139.2-39c-35.5 0-69.9 6.8-102.4 20.3c-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9c0 33.3 6.8 68 20.3 103.3c11.3 29.5 27.5 60.1 48.2 91c32.8 48.9 77.9 99.9 133.9 151.6c92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3c56-51.7 101.1-102.7 133.9-151.6c20.7-30.9 37-61.5 48.2-91c13.5-35.3 20.3-70 20.3-103.3c.1-35.3-7-69.6-20.9-101.9z"
                                        fill="black" />
</svg>*/}
                            </div>
                        </div>
                        </div>
                </section>
                </div>
    </div>
    <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
                    <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
                        {/*<!-- Col-1 -->*/}
                        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                            <div className="">
                                <div className="flex shadow-md bg-primary my-6">
                                    <a href="#" className="mx-2">
                                        {/*<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg"
                                            xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                            focusable="false" width="1em" height="1em"
                                            style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                                            <path
                                                d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6c44.2 0 82.1 3.3 93.2 4.8v107.9z"
                                                fill="white" />
</svg>*/}
                                        </a>

                                    <a href="#" className="mx-2">
                                        {/*<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg"
                                            xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                            focusable="false" width="1em" height="1em"
                                            style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                                            <path
                                                d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM727.3 401.7c.3 4.7.3 9.6.3 14.4c0 146.8-111.8 315.9-316.1 315.9c-63 0-121.4-18.3-170.6-49.8c9 1 17.6 1.4 26.8 1.4c52 0 99.8-17.6 137.9-47.4c-48.8-1-89.8-33-103.8-77c17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35c25.1-4.7 49.1-14.1 70.5-26.7c-8.3 25.7-25.7 47.4-48.8 61.1c22.4-2.4 44-8.6 64-17.3c-15.1 22.2-34 41.9-55.7 57.6z"
                                                fill="white" />
</svg>*/}
                                        </a>
                                    <a href="#" className="mx-2">
                                        {/*<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg"
                                            xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                            focusable="false" width="0.88em" height="1em"
                                            style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512">
                                            <path
                                                d="M224 202.66A53.34 53.34 0 1 0 277.36 256A53.38 53.38 0 0 0 224 202.66zm124.71-41a54 54 0 0 0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31 6.43a54 54 0 0 0-30.41 30.41c-8.28 21-6.43 71.05-6.43 94.33s-1.85 73.27 6.47 94.34a54 54 0 0 0 30.41 30.41c21 8.29 71 6.43 94.31 6.43s73.24 1.93 94.3-6.43a54 54 0 0 0 30.41-30.41c8.35-21 6.43-71.05 6.43-94.33s1.92-73.26-6.43-94.33zM224 338a82 82 0 1 1 82-82a81.9 81.9 0 0 1-82 82zm85.38-148.3a19.14 19.14 0 1 1 19.13-19.14a19.1 19.1 0 0 1-19.09 19.18zM400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-17.12 290c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.59 1.49-132 0c-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61 0-132c1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.59-1.49 132 0c25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05c1.49 26.32 1.49 105.44 0 131.88z"
                                                fill="white" />
</svg>*/}
                                        </a>
                                    <a href="#" className="mx-2">
                                        {/*<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg"
                                            xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                            focusable="false" width="1em" height="1em"
                                            style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                                            <path
                                                d="M723 620.5C666.8 571.6 593.4 542 513 542s-153.8 29.6-210.1 78.6a8.1 8.1 0 0 0-.8 11.2l36 42.9c2.9 3.4 8 3.8 11.4.9C393.1 637.2 450.3 614 513 614s119.9 23.2 163.5 61.5c3.4 2.9 8.5 2.5 11.4-.9l36-42.9c2.8-3.3 2.4-8.3-.9-11.2zm117.4-140.1C751.7 406.5 637.6 362 513 362s-238.7 44.5-327.5 118.4a8.05 8.05 0 0 0-1 11.3l36 42.9c2.8 3.4 7.9 3.8 11.2 1C308 472.2 406.1 434 513 434s205 38.2 281.2 101.6c3.4 2.8 8.4 2.4 11.2-1l36-42.9c2.8-3.4 2.4-8.5-1-11.3zm116.7-139C835.7 241.8 680.3 182 511 182c-168.2 0-322.6 59-443.7 157.4a8 8 0 0 0-1.1 11.4l36 42.9c2.8 3.3 7.8 3.8 11.1 1.1C222 306.7 360.3 254 511 254c151.8 0 291 53.5 400 142.7c3.4 2.8 8.4 2.3 11.2-1.1l36-42.9c2.9-3.4 2.4-8.5-1.1-11.3zM448 778a64 64 0 1 0 128 0a64 64 0 1 0-128 0z"
                                                fill="white" />
</svg>*/}
                                        </a>
                                </div>
                                <br/>
                            </div>
                            {/*<!-- Col Title -->*/}
                            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                                KEEP IN TOUCH
                            </div>
                            <div className="flex mt-6 ">
                                <div className="w-16 h-1 rounded-full  bg-gray-700 inline-flex"></div>
                            </div>
                            {/*<!-- Links -->*/}
                            <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                Address: 44 New Desing Street
                            </p>
                            <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                Address: 44 New Desing Street
                            </p>
                            <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                Address: 44 New Desing Street
                            </p>
                            <br/>
                            <div>
                                <form className="m-2 flex">
                                    <input
                                        className="rounded-l-lg p-1 border-t mr-0 border-b border-l text-white border-gray-200 bg-gray-700"
                                        placeholder="Email Address" />
                                    <button
                                        className=" rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-2 uppercase border-yellow-500 border-t border-b border-r">
                                        {/*<svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                                clip-rule="evenodd" />
</svg>*/}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/*<!-- Col-2 -->*/}
                        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                            {/*<!-- Col Title -->*/}
                            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                                Informacion
                            </div>
                            <div className="flex mt-6 ">
                                <div className="w-16 h-1 rounded-full  bg-gray-700 inline-flex"></div>
                            </div>

                            {/*<!-- Links -->*/}
                            <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                Anthony Intriago
                            </p>
                            <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                Yolanda Perez
                            </p>
                            <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                Josue Zurita
                            </p>
                            <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                Alexis Sanchez
                            </p>
                            <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                Jean Pierre Arias
                            </p>
                            <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                Byron Guaygua
                            </p>

                        </div>

                        {/*<!-- Col-3 -->*/}
                        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                            {/*<!-- Col Title -->*/}
                            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                                LASTEST TWEETS
                            </div>
                            <div className="flex mt-6 ">
                                <div className="w-16 h-1 rounded-full  bg-gray-700 inline-flex"></div>
                            </div>

                            {/*<!-- Links -->*/}
                            <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                Configuration
                            </p>
                            <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                Theme Configuration
                            </p>
                            <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                Breakpoints
                            </p>
                            <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                Customizing Colors
                            </p>

                        </div>

                        {/*<!-- Col-3 -->*/}

                        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                            {/*<!-- Col Title -->*/}
                            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                                DONATIONS
                            </div>
                            <div className="flex mt-6 ">
                                <div className="w-16 h-1 rounded-full  bg-gray-700 inline-flex"></div>
                            </div>

                            {/*<!-- Links -->*/}
                            <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                How to Donate
                            </p>
                            <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                Donation List
                            </p>
                            <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                Reccent Causes
                            </p>
                            <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                                FAQ
                            </p>
                        </div>

                    </div>


                    {/*<!-- Copyright Bar -->*/}
                    <div className="pt-2 text-base  text-center text-3xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        <div className="flex pb-5 px-3 m-auto pt-5 
                border-t border-gray-500 text-gray-400 text-sm 
                flex-col md:flex-row max-w-6xl">
                            <div className="mt-2">
                                © 2021 PROYECTO NUR TECH.
                            </div>
                        </div>
                    </div>
                </footer>
                <script src="https://code.jquery.com/jquery-3.5.1.min.js"
                    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
                <script src="app.js"></script>
    
    
    
    
    
    </div>

    )
}

export default Nur

