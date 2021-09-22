// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Admission from "./Admission/Admission";
import Home from "./Home/Home";
import Partners from "./Partners/Partners";
import ScrollToTop from "react-scroll-to-top";
import Partdetails from "./Partnerdetail/Partnerdetail";
import Muldetail from "./Muldetail/Muldetail";
import Scrollrender from "./Scrollrender/Scrollrender";
import Upcomingevents from "./Upcomingevents/Upcomingevents";

function App() {
  return (
    <div className="App">
      <Router>


      <ScrollToTop/>
      <Scrollrender/>
    
    <Switch>

      <Route exact path="/" component={Home} />
      <Route exact path="/admission" component={Admission} />
      <Route exact path="/Partners" component={Partners} />
      <Route exact path="/partnerdetail" component={Partdetails} />
      <Route exact path="/mul_details" component={Muldetail} />
      <Route exact path="/upcoming-events" component={Upcomingevents} />






      
      
      
     


     </Switch>

     </Router>
    </div>
  );
}

export default App;
