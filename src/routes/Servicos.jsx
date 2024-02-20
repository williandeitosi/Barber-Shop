import icon from "../assets/icon.jpg";
import slice from "../assets/slice.png";
import { Link, useSearchParams } from "react-router-dom";

const User = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("s"));
  return (
    <div className="bg-neutral-800 text-center h-screen flex justify-center flex-col ">
      <h1 className="inter bg-image w-fit text-transparent mx-auto text-8xl mb-20">
        Serviços
      </h1>
      <div className=" text-white grid grid-cols-3 content-center gap-4 p-5">
        <Link to={`/agenda?s=1`}>
          <div className="text-center text-white hover:text-yellow-400 transition-all">
            <img className="rounded-full" src={icon} />
            <p className="my-4 text-3xl ">Barba</p>
          </div>
        </Link>
        <Link to={`/agenda?s=2`}>
          <div className="text-center text-white hover:text-yellow-400 transition-all">
            <img className="rounded-full" src={icon} />
            <p className="my-4 text-3xl ">Cabelo</p>
          </div>
        </Link>
        <Link to={`/agenda?s=3`}>
          <div className="text-center text-white hover:text-yellow-400 transition-all">
            <img className="rounded-full" src={icon} />
            <p className="my-4 text-3xl ">Barba + Cabelo</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default User;
