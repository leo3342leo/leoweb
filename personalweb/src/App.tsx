import React from 'react';
import {} from 'reactstrap';

import './App.css';


interface IAppProps{

}

interface IAppState{
    name:string
}


class App extends React.Component<IAppProps,IAppState>{

  render(){
      return (
        <Provider>
          <ConnectedRouter histroy={history}>
            <Navbar>
              <Link to="/">About me</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/Resume">Resume</Link>
            </Navbar>
            <Switch>
              <Route path="/"component={Home}/>
              <Route path="/portfolio"component={Port}/>
              <Route path="Resume"component={Resume}/>
            </Switch>
          </ConnectedRouter>  
        </Provider>
      );
  }
}
export default App;
