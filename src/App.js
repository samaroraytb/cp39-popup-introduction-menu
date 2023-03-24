import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

const App = () => (
  <div className="main-body-container">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact component={NotFound} />
    </Switch>
  </div>
)

export default App
