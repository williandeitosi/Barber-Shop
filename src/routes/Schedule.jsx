/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import HoursCards from "../components/HoursCards";
import { addDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useSearchParams } from "react-router-dom";

function generateDate(date) {
  let weekName = date
    .toLocaleDateString("pt-BR", { weekday: "short" })
    .slice(0, -1);

  const dtObject = {
    day: date.getDate(),
    weekName: weekName,
    disabled: weekName == "seg" ? true : false,
    fullDate: date,
  };
  return dtObject;
}

function getAvailableHours(date, service) {
  console.log(date, service);
}

const Schedule = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedService = searchParams.get("s");

  const allHours = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
  ];

  const data = new Date();
  const monthName = data.toLocaleString("pt-BR", { month: "long" });
  let days = [generateDate(data)];
  for (let i = 0; i <= 5; i++) {
    const dataFutura = addDays(data, i + 1);

    days.push(generateDate(dataFutura));
  }
  console.log(days);

  return (
    <div className="h-screen bg-neutral-800 flex justify-center items-center flex-col gap-10">
      <div className="text-white">
        <h1 className="text-center py-5 text-2xl text-transform: capitalize">
          {monthName}
        </h1>
        <div className=" grid grid-cols-7 gap-5 text-center">
          {days.map((dt) => {
            return (
              <div
                className={dt.disabled ? "text-amber-900" : ""}
                onClick={() => getAvailableHours(dt.fullDate, selectedService)}
              >
                <p className="	text-transform: capitalize">
                  {dt.weekName} {dt.disabled}
                </p>
                <p>{dt.day}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-yellow-400 text-2xl p-3 mb-5 text-center">
          Horários Disponíveis
        </h1>
        <div className="grid grid-cols-4 grid-rows-5 gap-4 text-center">
          {allHours.map((h) => (
            <HoursCards hour={h} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
