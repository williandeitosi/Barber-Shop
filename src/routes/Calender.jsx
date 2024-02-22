import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function Calender() {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        height={"100vh"}
        initialView="dayGridWeek"
        locale={"pt-br"}
        weekends={false}
        events={[
          {
            title: "willian",
            date: "2024-02-21T14:30:00",
            description: "fazer a barba",
          },
          { title: "event 2", date: "2019-04-02" },
        ]}
        eventClick={function (info) {
          alert(info.event.extendedProps.description);
        }}
      />
      <Component />
    </div>
  );
}

function Component() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
