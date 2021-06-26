//imports react-router-dom
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import de paginas
import { Home } from './pages/Home';
import { Css } from './pages/Css';
import { PageHTML } from './pages/PageHTML';
import { JavaScript } from './pages/JavaScript';
import { Frameworks } from './pages/Frameworks';

//imports de componentes
import { Header } from './componentes/Header';
import { Menu } from './componentes/Menu';
import { Footer } from './componentes/Footer';

//imports de CSS
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <div id="page-initial">
       <Header />
       <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/html" component={PageHTML} />
          <Route path="/css" component={Css} />
          <Route path="/javascript" component={JavaScript} />
          <Route path="/frameworks" component={Frameworks} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
