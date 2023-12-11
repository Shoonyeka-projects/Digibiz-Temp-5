import React from 'react';
import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from "./pages/Home";
import Login from './pages/Login';
import About from './pages/About';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import Testimonial from './pages/Testimonial';

export default function App() {
    return (
        <BrowserRouter basename="/">
            <Header />
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL + "/"}`} component={Home} />
                <Route exact path={`${process.env.PUBLIC_URL + "/about"}`} component={About} />
                <Route exact path={`${process.env.PUBLIC_URL + "/gallery"}`} component={Gallery} />
                <Route exact path={`${process.env.PUBLIC_URL + "/blog"}`} component={Blog} />
                <Route exact path={`${process.env.PUBLIC_URL + "/testimonial"}`} component={Testimonial} />
                <Route exact path={`${process.env.PUBLIC_URL + "/login"}`} component={Login} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}