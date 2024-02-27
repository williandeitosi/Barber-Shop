/* eslint-disable react/prop-types */
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Modal } from "flowbite-react";
import { useState } from "react";

// import { Calendar } from "@fullcalendar/core";

export default function Calender() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleEventClick = (info) => {
    setSelectedService(
      `${info.event.title}: ${info.event.extendedProps.description}`
    );
    setOpenModal(true);
  };
  const events = [
    {
      title: "willian",
      date: "2024-02-21T14:30:00",
      description: "fazer a barba",
    },
    {
      title: "willian",
      date: "2024-02-22T14:30:00",
      description: "fazer a barba",
    },
  ];

  const workSpec = [
    {
      daysOfWeek: [0, 2, 3, 4, 5, 6],
      startTime: "08:00",
      endTime: "21:00",
    },
  ];

  const workMin = workSpec
    .map((item) => item.startTime)
    .sort()
    .shift();
  const workMax = workSpec
    .map((item) => item.endTime)
    .sort()
    .pop();

  return (
    <div className="h-screen p-8 bg-neutral-800">
      <h1 className="text-yellow-400 text-center">Escolha seu horario</h1>
      <div className="h-full bg-white  p-3">
        <FullCalendar
          className="border-0"
          plugins={[timeGridPlugin]}
          initialView="timeGridFourDay"
          timeZone="UTC-3"
          allDayContent={"Horas"}
          height={"100%"}
          hiddenDays={[1]}
          locale={"pt-br"}
          events={events}
          headerToolbar={{
            left: "",
            center: "title",
            right: "prev,next",
          }}
          businessHours={workSpec}
          slotMinTime={workMin}
          slotMaxTime={workMax}
          views={{
            timeGridFourDay: {
              type: "timeGrid",
              duration: { days: 6 },
              buttonText: "4 day",
            },
          }}
          eventClick={handleEventClick}
        />
        <ModalText
          service={selectedService}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </div>
    </div>
  );
}

function ModalText({ service, openModal, setOpenModal }) {
  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>SERVIÇO</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-white  dark:text-gray-400">
            {service}
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
}
