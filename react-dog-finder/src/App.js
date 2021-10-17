import './App.css';
import DogList from './DogList';
import DogDetails from './DogDetails';
import TopNav from './TopNav';
import duke from './images/duke.jpg';
import perry from './images/perry.jpg';
import tubby from './images/tubby.jpg';
import whiskey from './images/whiskey.jpg';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNav />
        <Switch>
          <Route exact path="/dogs">
            <DogList />
          </Route>
          <Route path="/dogs/:name">
            <DogDetails />
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

export const dogs = [
  {
    name: 'Whiskey',
    age: 5,
    src: whiskey,
    facts: [
      'Whiskey loves eating popcorn.',
      'Whiskey is a terrible guard dog.',
      'Whiskey wants to cuddle with you!',
    ],
  },
  {
    name: 'Duke',
    age: 3,
    src: duke,
    facts: [
      'Duke believes that ball is life.',
      'Duke likes snow.',
      'Duke enjoys pawing other dogs.',
    ],
  },
  {
    name: 'Perry',
    age: 4,
    src: perry,
    facts: [
      'Perry loves all humans.',
      'Perry demolishes all snacks.',
      'Perry hates the rain.',
    ],
  },
  {
    name: 'Tubby',
    age: 4,
    src: tubby,
    facts: [
      'Tubby is really stupid.',
      'Tubby does not like walks.',
      'Angelina used to hate Tubby, but claims not to anymore.',
    ],
  },
];

App.defaultProps = { dogs };
