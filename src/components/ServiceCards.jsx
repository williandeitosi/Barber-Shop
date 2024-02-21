import PropTypes from "prop-types";

const ServiceCards = ({ imageSrc, serviceName }) => {
  return (
    <div className=" flex items-center  flex-col text-center text-white hover:text-yellow-400 transition-all">
      <img
        className=" w-6/12 border-4 border-white hover:border-yellow-400 transition-all rounded-full"
        src={imageSrc}
        alt={serviceName}
      />
      <p className="my-4 text-3xl ">{serviceName}</p>
    </div>
  );
};

ServiceCards.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  serviceName: PropTypes.string.isRequired,
};

export default ServiceCards;
