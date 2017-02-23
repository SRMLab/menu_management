import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import Stores from './Stores'
import StoreDetail from './StoreDetail'
import StoreForm from './StoreForm'


// const Links = () =>
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="about">About</Link>
//       <Link to="contact">Contact</Link>
//     </nav>


const App = () => {
  return (
    <Router history={ hashHistory }>
      <Route path="/" component={Stores}>
        <Route path="/StoreDetail" component={}></Route>
        <Route path="/StoreForm" component={}></Route>
      </Route>
    </Router>
  )
}


export default App
