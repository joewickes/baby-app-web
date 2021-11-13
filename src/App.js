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
      <section>
        <div>LOGO</div>
        <div>Current Stats</div>
      </section>
      <section>
        <li>
          <div>Blue Heading</div>
          <div>Gray entry</div>
          <div>White entry</div>
        </li>
      </section>
      <section>
        <footer>
          <div></div>
          <button>+</button>
          <div></div>
        </footer>
      </section>
      <section>AD SPACE</section>
    </div>
  );
}

export default App;
