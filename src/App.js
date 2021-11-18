import React from 'react';
// style

// components
import DaySchedule from './components/DaySchedule';

// icons
import { AccountCircleSharp, SyncSharp } from '@mui/icons-material';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';

import './styles/App.css';

const App = () => {
  const actions = [
    { name: 'a', backgroundColor: '#FED766', type: 'breastfeeding' },
    { name: 'as', backgroundColor: '#3581B8', type: 'bottle' },
    { name: 'asd', backgroundColor: '#AA8574', type: 'diaper' },
    { name: 'asdf', backgroundColor: '#7E4E70', type: 'sleep' },
    { name: 'f', backgroundColor: '#259393', type: 'bath' },
    { name: 'df', backgroundColor: '#04724D', type: 'medicine' },
    { name: 'sdf', backgroundColor: '#830B33', type: 'temperature' },
  ];

  const schedule = [
    {
      id: 'balksada',
      date: 'WEDNESDAY, SEPT 24',
      entries: [
        {
          time: '4:00a - 4:07a',
          backgroundColor: '#7E4E70',
          title: 'Sleep',
          notes: '2h 15min',
          color: '#7E4E70',
        },
        {
          time: '4:00a - 4:07a',
          backgroundColor: '#7E4E70',
          title: 'Sleep',
          notes: '2h 15min',
          color: '#7E4E70',
        },
        {
          time: '4:00a - 4:07a',
          backgroundColor: '#7E4E70',
          title: 'Sleep',
          notes: '2h 15min',
          color: '#7E4E70',
        },
        {
          time: '4:00a - 4:07a',
          backgroundColor: '#7E4E70',
          title: 'Sleep',
          notes: '2h 15min',
          color: '#7E4E70',
        },
        {
          time: '4:00a - 4:07a',
          backgroundColor: '#7E4E70',
          title: 'Sleep',
          notes: '2h 15min',
          color: '#7E4E70',
        },
        {
          time: '4:00a - 4:07a',
          backgroundColor: '#7E4E70',
          title: 'Sleep',
          notes: '2h 15min',
          color: '#7E4E70',
        },
        {
          time: '4:00a - 4:07a',
          backgroundColor: '#7E4E70',
          title: 'Sleep',
          notes: '2h 15min',
          color: '#7E4E70',
        },
      ],
    },
    {
      id: 'balksada',
      date: 'THURSDAY, SEPT 25',
      entries: [
        {
          time: '4:00a - 4:07a',
          backgroundColor: '#7E4E70',
          title: 'Sleep',
          notes: '2h 15min',
          color: '#7E4E70',
        },
        {
          time: '4:00a - 4:07a',
          backgroundColor: '#7E4E70',
          title: 'Sleep',
          notes: '2h 15min',
          color: '#7E4E70',
        },
        {
          time: '4:00a - 4:07a',
          backgroundColor: '#7E4E70',
          title: 'Sleep',
          notes: '2h 15min',
          color: '#7E4E70',
        },
        {
          time: '4:00a - 4:07a',
          backgroundColor: '#7E4E70',
          title: 'Sleep',
          notes: '2h 15min',
          color: '#7E4E70',
        },
        {
          time: '4:00a - 4:07a',
          backgroundColor: '#7E4E70',
          title: 'Sleep',
          notes: '2h 15min',
          color: '#7E4E70',
        },
        {
          time: '4:00a - 4:07a',
          backgroundColor: '#7E4E70',
          title: 'Sleep',
          notes: '2h 15min',
          color: '#7E4E70',
        },
        {
          time: '4:00a - 4:07a',
          backgroundColor: '#7E4E70',
          title: 'Sleep',
          notes: '2h 15min',
          color: '#7E4E70',
        },
      ],
    },
  ];
  return (
    <div className="App">
      <header className="Header">
        <section className="header-left">
          <div>
            <div className="header-icon-container pointer">
              <AccountCircleSharp className="header-icon" />
            </div>
          </div>
        </section>
        <section className="header-right">
          <div className="header-icon-container pointer">
            <SyncSharp className="header-icon" />
          </div>
          <div className="header-icon-container pointer">
            <AccountCircleSharp className="header-icon" />
          </div>
        </section>
      </header>

      <section className="Main">
        <div className="title-group">
          <h1>
            <b>BABY</b>APP
          </h1>
          <ul className="age">
            <li>{`${'1'} months,`}</li>
            <li>{`${'2'} weeks,`}</li>
            <li>{`${'3'} days`}</li>
          </ul>
        </div>

        <div className="Schedule">
          {schedule.map((day) => {
            return (
              <DaySchedule key={day.id} date={day.date} entries={day.entries} />
            );
          })}
        </div>
      </section>
      <footer>
        <div className="footer-top">
          <div className="footer-icons-left"></div>
          <div className="footer-add-item-icon-container">
            {/* <AddCircleSharp className="footer-add-item-icon" /> */}
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              sx={{ position: 'absolute', bottom: 16, right: 16 }}
              icon={<SpeedDialIcon />}
              FabProps={{ style: { backgroundColor: '#db5461' } }}
              color="#db5461"
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  FabProps={{
                    style: { backgroundColor: action.backgroundColor },
                  }}
                  // icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
            </SpeedDial>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="ad">
            <p>AD SPACE</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
