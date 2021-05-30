import HomePage from './pages/homepage/homepage.component'
import './App.css'
import { Route, Switch } from 'react-router-dom'

const HatsPage = () => (
  <div>
    <h1>HATSPAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
