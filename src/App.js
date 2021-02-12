import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nur from './Nur';
import Form1 from './Formulario';
import Mapa from './Mapa';
import logo from './imagenes/logo.jpeg';

function App() {
  return (
    <Router>
      <div className="flex bg-gray-900 text-white place-content-center">
            <div className="flex ">
                <h1 className="text-3xl">Grupo6 ITS</h1>
            </div>

        </div>
        <div className="flex place-content-center">
            <div className="bg-white">
                <a href="http://nur.yavirac.edu.ec/">
                    <img src={logo} className="w-40 h-20" alt="Logo"/></a>
            </div>

            <div className="mb-6 mt-5 ml-24 md:ml-72 lg:ml-96">
                <button
                    className="mr-5 bg-gray-700 hover:bg-yellow-300 hover:text-black border border-gray-400 text-white font-bold py-2 px-6 rounded-lg">
                    <Link to="/Form1">
                    Dona Aqui!!
                    </Link>
                </button>
            </div>
        </div>
                {/*<!--Nav-->*/}
                <nav id="header"
            className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-yellow-300 mb-3">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">

                <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                    {/*<svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20"
                        height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
    </svg>*/}
                </label>
                <input className="hidden" type="checkbox" id="menu-toggle" />

                <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                    <nav>
                        <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                            <li><Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                                    to="/">HOME</Link></li>
                            <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                                    href="#">EL PROYECTO</a></li>
                            <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                                    href="#">COMO AYUDAR</a></li>
                            <li><Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                                    to="/Mapa">VOLUNTARIOS</Link></li>
                            <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                                    href="#">DONANTES</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="order-2 md:order-3 flex items-center" id="nav-content">
                </div>
            </div>
        </nav>           
    <Switch>
      <Route path="/" exact>
      <Nur/>
      </Route>
      <Route path="/Form1" exact>
      <Form1/>
      </Route>
      <Route path="/Mapa" exact >
      <Mapa/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
