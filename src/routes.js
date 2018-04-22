import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/Homepage';
import AboutPage from './components/about/Aboutpage';
import CoursePage from './components/courses/Coursepage';
import ManageCoursePage from './components/courses/ManageCoursePage';

export default (
    <Route  path="/" component={App}>
        < IndexRoute  component={HomePage} />
        <Route  path="about" component = {AboutPage} />
        <Route  path="courses" component = {CoursePage} />
      <Route  path="course" component = {ManageCoursePage} />
      <Route  path="course/:id" component = {ManageCoursePage} />
      <Route  path="hittens" component = {ManageCoursePage} />
    </Route>
);
