import logo from "./assets/logo.jpg"
import foto from "./assets/barber02.jpg"

export default function App() {
  return (
      <div className=" h-screen w-screen flex flex-col items-center justify-center grid grid-cols-2 ">
        <img className=" max-md:hidden h-screen w-screen flex items-center justify-center bg-img object-cover opacity-80" src={foto} alt="" />
        <div id="form" className="bg-neutral-800 col-start-2  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 max-md:col-span-2">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
              <img
                className="mx-auto h-36 max-w-[150px] rounded-full"
                src={logo}
                alt="Your Company"
              />
              <h2 className="text-yellow-500 mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Entre na sua conta
              </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="text-yellow-500 block text-sm font-medium leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-yellow-500 block text-sm font-medium leading-6 text-gray-900">
                      Senha
                    </label>
                    <div className="text-sm">
                      <a href="#" className="text-yellow-500 font-semibold text-indigo-600 hover:text-indigo-500">
                        Esqueceu sua senha?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className=" bg-yellow-500 flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Logar
                  </button>
                </div>
              </form>
              <p className="mt-10 text-center text-sm text-white">
                Não é membro?{' '}
                <a href="#" className="font-semibold leading-6 text-yellow-500 hover:text-indigo-500">
                  Registre-se
                </a>
              </p>
            </div>
          </div>
      </div>
  )
}