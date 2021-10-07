import { Route, Switch } from 'react-router-dom';

import MainPage from "./pages/Main";
import TechnologyPage from "./pages/Technology";
import SportsPage from "./pages/Sports";
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
      <Route path='/' exact>
        <MainPage />
      </Route> 
      <Route path='/tehnology'>
        <TechnologyPage />
      </Route> 
      <Route path='/sports'>
        <SportsPage />
      </Route> 
    </Switch>
    </div>
  );
}
export default App;
