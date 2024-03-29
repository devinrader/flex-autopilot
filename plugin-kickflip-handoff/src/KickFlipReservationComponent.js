import React from 'react';

const taskListStyles = {
  padding: '10px',
  margin: '0px',
  color: '#fff',
  background: '#000',
  display: 'flex',
  'flex-direction': 'column',
  flex: '1 0 auto',
  'border-style': 'solid',
  'border-width': '0 0 0 0px',
};

const KickFlipReservationComponent = ({ tasks, selectedTaskSid }) => {

    if (!tasks || !selectedTaskSid) {
        console.log('No tasks available or selected');
        return <div style={taskListStyles}>
            <h1>No tasks selected</h1>
        </div>;
    }

    console.log(tasks);
    console.log(selectedTaskSid);

    let task = tasks.get(selectedTaskSid);

    if (task) {
        let taskAttributes = task.reservation.task.attributes;

        let firstName='', reservationDate='', reservationTime='', partySize='', taskName='';

        if (taskAttributes.autopilot && taskAttributes.autopilot.memory) {
            
            //firstName = taskAttributes.autopilot.memory['twilio.collected_data'][0].answers[0].answer;            
            //reservationDate = taskAttributes.autopilot.memory['twilio.collected_data'][0].answers[1].answer;
            //reservationTime = taskAttributes.autopilot.memory['twilio.collected_data'][0].answers[2].answer;
            //partySize = taskAttributes.autopilot.memory['twilio.collected_data'][0].answers[3].answer;
            //taskName = taskAttributes.autopilot.memory['twilio.collected_data'][0].name;

            firstName = taskAttributes.autopilot.memory.twilio.collected_data.make_reservation.answers.first_name.answer;
            reservationDate = taskAttributes.autopilot.memory.twilio.collected_data.make_reservation.answers.reservation_date.answer;
            reservationTime = taskAttributes.autopilot.memory.twilio.collected_data.make_reservation.answers.reservation_time.answer;
            partySize = taskAttributes.autopilot.memory.twilio.collected_data.make_reservation.answers.party_size.answer;
            //taskName = taskAttributes.autopilot.memory.twilio.collected_data.make_reservation.name;
        }

        return <div style={taskListStyles}>
            <h1>CURRENT TASK</h1>
            <p>{taskAttributes.type} call to {taskName}</p>
            <h1>DATA COLLECTED</h1>
            <h2>FIRST NAME</h2>
            <p>{firstName}</p>
            <h2>RESERVATION DATE</h2>
            <p>{reservationDate}</p>
            <h2>RESERVATION TIME</h2>
            <p>{reservationTime}</p>
            <h2>PARTY SIZE</h2>
            <p style={{color:'red'}}>{partySize}</p>
        </div>;

    } else {
        return <div style={taskListStyles}>
            <h1>No tasks selected</h1>
        </div>;
    }
};

export default KickFlipReservationComponent;