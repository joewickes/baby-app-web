// style
// icon
import { AccountCircleSharp, SyncSharp } from '@mui/icons-material';
import { AddCircleSharp } from '@mui/icons-material';
import './styles/App.css';

function App() {
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
          <h2 className="date">WEDNESDAY, SEPT 24</h2>
          <ul>
            <li className="gray entry">
              <div className="schedule-left">
                <p className="schedule-time">4:00a - 4:07a</p>
              </div>
              <div className="schedule-right">
                <div className="schedule-title-container">
                  <p className="schedule-title">Sleep</p>
                </div>
                <div className="schedule-notes-container">
                  <p className="schedule-notes">2h 15min</p>
                </div>
              </div>
            </li>
            {/* color set by id % 2 === 0 ? darker-gray : lighter-gray */}
            <li className="smoke entry">
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
            </li>
          </ul>
        </div>
      </section>
      <footer>
        <div className="footer-top">
          <div className="footer-icons-left"></div>
          <div className="footer-add-item-icon-container">
            <AddCircleSharp className="footer-add-item-icon" />
          </div>
          <div className="footer-icons-right"></div>
        </div>
        <div className="footer-bottom">
          <div className="ad">
            <p>AD SPACE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
