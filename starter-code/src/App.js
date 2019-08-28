import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greatings from './components/Greatings';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 className="title is-1">IdCard</h1>
        {/* TODO: Use the IdCard component */}
        <IdCard
          lastName="Doe"
          firstName="Jhon"
          gender="male"
          height={1.78}
          birth="1992-07-14"
          picture={"https://randomuser.me/api/portraits/men/44.jpg"}
        />
        <IdCard
          lastName="Delores"
          firstName="Obrien"
          gender="female"
          height={1.72}
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <h1 className="title is-1">Greetings</h1>
        {/* TODO: Use the Greetings component */}
        <Greatings lang="de">Hallo Sofi</Greatings>
        <Greatings lang="fr">Bonjour Daniel</Greatings>
      </div>
    );
  }
}

export default App;
