import ServiceCards from "../components/ServiceCards";
import icon from "../assets/icon.jpg";
import cabeloBarba from "../assets/cabeloBarba.jpg";
import cabelo from "../assets/cabelo.jpg";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="bg-neutral-800 text-center h-screen flex justify-center flex-col ">
      <h1 className="inter bg-image w-fit text-transparent mx-auto text-8xl mb-20">
        Serviços
      </h1>
      <div className=" text-white grid grid-cols-3 content-center p-5">
        <Link to={"/agenda?s=1"} className=" flex items-center justify-center ">
          <ServiceCards imageSrc={icon} serviceName={"Barba"} />
        </Link>
        <Link className=" flex items-center justify-center " to={"/agenda?s=2"}>
          <ServiceCards imageSrc={cabelo} serviceName={"Cabelo"} />
        </Link>
        <Link className=" flex items-center justify-center " to={"/agenda?s=3"}>
          <ServiceCards imageSrc={cabeloBarba} serviceName={"Barba + Cabelo"} />
        </Link>
      </div>
    </div>
  );
};

export default User;
