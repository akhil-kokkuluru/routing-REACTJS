import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import NavElement from './components/Header'

const App = () => (
  <>
    <div className="TotalBG">
      <div className="contentBG">
        <div className="innerDiv">
          <NavElement />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default App
