import React, { PureComponent } from 'react'
import HomePage from './components/home/HomePage';
import CalendarPage from './components/calendar/CalendarPage';
import StocksPage from './components/stocks/StocksPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MenuBar from './components/menu/MenuBar';
import { 
  INDEX_PAGE_ROUTE,
  CALENDAR_PAGE_ROUTE,
  STOCKS_PAGE_ROUTE,
  TODO_PAGE_ROUTE,
  TEST_PAGE_ROUTE,
} from './constants/routes';
import './style/app.css';
import ToDoPage from './components/todo/ToDoPage';
import { bugsnagClient } from './utils/bugsnagUtils';
import { Header } from 'semantic-ui-react';

const NoMatch = () => {
  bugsnagClient.notify("user hit invalid route, check to see that route doesn't have a typo");
  return (<Header as="h1"> Page Not Found </Header>)
}

export default class App extends PureComponent {
  render() {
    return (
      <>
        <Router>
          <div className="active-page">
            <MenuBar />
            <Switch>
            <Route
              exact={true}
              path={INDEX_PAGE_ROUTE}
              component={HomePage}
            />
            <Route
              path={CALENDAR_PAGE_ROUTE}
              component={CalendarPage}
            />
            <Route
              path={TODO_PAGE_ROUTE}
              component={ToDoPage}
            />
            <Route
              path={STOCKS_PAGE_ROUTE}
              component={StocksPage}
            />
            <Route
              path={TEST_PAGE_ROUTE}
              component={() => <Header as="h1"> Welcome to the test page! </Header>}
            />
            <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </>
    )
  }
}