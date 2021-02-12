import './Formulario.css';
import React from 'react';

const Form1 =()=>{
    return(
        <div className="container mx-auto mt-32 bg-blue-300" >
        <div className="mx-auto flex flex-wrap max-width-form text-gray-800">
            {/*Header*/}
            <div className="flex-100">
                <h1 className="font-bold text-3xl flex-100 mb-8">Dona un equipo!!</h1>
            </div>
            {/*form*/}
            <div className="flex flex-100 mt-8">
                <form className="flex-100">
                    {/*inputs*/}
                    <div className="flex flex-100">
                        <div className="flex-grow mr-2">
                            <label className="block mb-1 font-bold" htmlFor="">Nombre del Donante:</label>
                            <input className="bg-gray-200 w-full rounded-lg py-3 px-3 shadow-inner" type="text"/>
                        </div>
                        <div className="flex-grow ml-2">
                            <label className="block mb-1 font-bold" htmlFor="">Apellido del Donante</label>
                            <input className="bg-gray-200 w-full rounded-lg py-3 px-3 shadow-inner" type="text"/>
                        </div>
                    </div>
                    <div className="flex flex-100 mt-4">
                        <div className="flex-grow mr-2">
                            <label className="block mb-1 font-bold" htmlFor="">Descripción</label>
                            <input className="bg-gray-200 w-full rounded-lg py-3 px-3 shadow-inner" type="text"/>
                        </div>
                    </div>
                    <div className="flex flex-100 mt-4">
                        <div className="flex-grow mr-2">
                            <label className="block mb-1 font-bold" htmlFor="">Tipo de Equipo</label>
                            <input className="bg-gray-200 w-full rounded-lg py-3 px-3 shadow-inner" type="text"/>
                        </div>
                    </div>
            <div className="flex flex-100 mt-4">
                        <div className="flex-grow mr-2">
              <label className="block mb-1 font-bold" htmlFor="">Imagen del Equipo</label>
                        <input id="archivos"className="bg-gray-200 w-full rounded-lg py-3 px-3 shadow-inner" type="file" accept=".jpg, .png, .jpeg"/>
                        </div>
                    </div>
            <div className="flex flex-100 mt-4">
                        <div className="flex-grow mr-2">
              <ul id="lista">
              <p>No hay archivos cargados</p>
              </ul>
                        </div>
                    </div>
                    <div className="flex flex-100 mt-4">
                        <button className="bg-blue-500 flex-50 text-white relative py-4 rounded">
                    <div>
                        Donar							
                    </div>
                </button>
                    </div>
                </form>
            </div>
    
        </div>
    </div>

    )
}

export default Form1







