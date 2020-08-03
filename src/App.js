import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AllNews from './components/AllNews/AllNews';
import TopNews from './components/TopNews/TopNews';
import DisplaySingleNews from './components/DisplaySingleNews/DisplaySingleNews';

function App() {

  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path = '/' component = { Home } />
          <Route path = '/all-news' component = { AllNews } />
          <Route path = '/top-news' component = { TopNews } />
          <Route exact path = '/article/:newsItem' component = { DisplaySingleNews } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
