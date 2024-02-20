import { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";

// eslint-disable-next-line react/prop-types
const SuccessMessage = ({ progress }) => {
  return (
    <div className="bg-green-800 text-white p-4 rounded-md text-center">
      <div className="flex mb-2">
        <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden">
          <div
            className={`bg-green-500 h-2 rounded-full`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <p>Cadastro realizado com sucesso !</p>
    </div>
  );
};

const Register = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval);
        setShowSuccessMessage(false);
      }
    };
    const interval = setInterval(updateProgress, 30);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="bg-neutral-800 flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-36 max-w-[150px] rounded-full"
          src={logo}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-yellow-500">
          Registre sua conta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-yellow-500"
            >
              Nome:
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-yellow-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-yellow-500"
            >
              Email:
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-yellow-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-yellow-500"
              >
                Senha:
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-yellow-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-yellow-500"
              >
                confirme a senha:
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-yellow-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              onClick={() => setShowSuccessMessage(true)}
              type="submit"
              className="flex w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Cadastrar
            </button>
          </div>
          {showSuccessMessage && <SuccessMessage progress={progress} />}
        </form>
      </div>
    </div>
  );
};

export default Register;
