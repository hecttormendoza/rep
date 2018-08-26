import React, {Component} from 'react';
import {Header} from './header/header';
// import {Title} from './title';
import {Home} from './home/home';
// import {Techs} from './techs/techs';
import {Footer} from './footer/footer';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  }
};

export class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <main style={styles.main}>
          <Home/>
        </main>
        <Footer/>
      </div>
    );
  }
}
