import React from 'react';

const DaySchedule = ({ date, entries }) => {
  return (
    <>
      <h2 className="date">{date}</h2>
      <ul>
        {entries.map((entry, idx) => {
          return (
            <li
              key={idx + 1000}
              className={idx % 2 === 0 ? 'gray entry' : 'smoke entry'}
            >
              <div className="schedule-left">
                <p className="schedule-time">{entry.time}</p>
              </div>
              <div className="schedule-right">
                <div className="schedule-title-container">
                  <div
                    className="schedule-title-color"
                    style={{ backgroundColor: entry.backgroundColor }}
                  ></div>
                  <p className="schedule-title">{entry.title}</p>
                </div>
                <div className="schedule-notes-container">
                  <p className="schedule-notes">{entry.notes}</p>
                </div>
              </div>
            </li>
          );
        })}
        {/* color set by id % 2 === 0 ? darker-gray : lighter-gray */}
        {/* <li className="smoke entry">
          <div className="schedule-left">
            <p className="schedule-time">7:00a</p>
          </div>
          <div className="schedule-right">
            <div className="schedule-title-container">
              <p className="schedule-title">Temperature</p>
            </div>
            <div className="schedule-notes-container">
              <p className="schedule-notes">91.4°F</p>
            </div>
          </div>
        </li> */}
      </ul>
    </>
  );
};

export default DaySchedule;
