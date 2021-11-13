// style
import './styles/App.css';

// icon
import { SyncSharp, AccountCircleSharp } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <section className="header-left">
          <div className="baby-img-container">
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
            <li>{`${'1'} months, `}</li>
            <li>{`${'2'} weeks,`}</li>
            <li>{`${'3'} days`}</li>
          </ul>
        </div>

        <div className="Schedule">
          <ul>
            <li>Blue Heading</li>
            <li>Gray entry</li>
            <li>White entry</li>
          </ul>
        </div>
      </section>
      <footer>
        <div></div>
        <button>+</button>
        <div></div>
      </footer>
      <section>AD SPACE</section>
    </div>
  );
}

export default App;
