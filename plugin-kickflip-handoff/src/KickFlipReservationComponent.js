import React from 'react';


const taskListStyles = {
  padding: '10px',
  margin: '0px',
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
        return <div style={taskListStyles}>
            <h1>CURRENT TASK</h1>
            <p>{taskAttributes.title}</p>
            <h1>DATA COLLECTED</h1>
            <h2>FIRST NAME</h2>
            <p></p>
            <h2>RESERVATION DATE</h2>
            <p></p>
            <h2>RESERVATION TIME</h2>
            <p></p>
            <h2>PARTY SIZE</h2>
            <p></p>
        </div>;
    } else {
        return <div style={taskListStyles}>
            <h1>No tasks selected</h1>
        </div>;
    }
};

export default KickFlipReservationComponent;