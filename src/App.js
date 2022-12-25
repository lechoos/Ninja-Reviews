import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';

import SiteHeader from "./components/SiteHeader";
import Homepage from './pages/Homepage';
import ReviewDetails from './pages/ReviewDetails';
import Category from './pages/Category';

const App = () => {
  return (
    <div className="app">
      <Router>
        <SiteHeader />
        <Switch>
          <Route end path='/' element={<Homepage />} />
          <Route path='/details/:id' element={<ReviewDetails />} />
          <Route path='/category/:id' element={<Category />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;