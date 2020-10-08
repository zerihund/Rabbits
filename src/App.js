import React from 'react'
import Navbar from './components/Navbar'
import Diary from './components/Diary'
import MyGarden from './components/MyGarden'
import MyPlants from './components/MyPlants'
import Points from './components/Points'
import Stream from './components/Stream'
import Setting from './components/Setting'
import SingUp from './components/SignUp'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import SignUp from './components/SignUp'


function App() {
    return (
        <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact />
                <Route path='/Diary' component={Diary}/>
                <Route path='/MyGarden' component={MyGarden}/>
                <Route path='/MyPlants' component={MyPlants}/>
                <Route path='/Points' component={Points}/>
                <Route path='/Streams' component={Stream}/>
                <Route path='/Setting' component={Setting}/>
                <Route path='/SignUp' component={SignUp}/>

            </Switch>
        </Router>
           
        </>
    )
}

export default App
