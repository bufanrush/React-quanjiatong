import React from 'react';
import {Route,Switch} from 'react-router-dom';

//引入页面 按需加载前
// import Home from 'pages/home';
// import Page from 'pages/page';
// import Counter from 'pages/counter';

//引入页面 按需加载后
import loadable from 'react-loadable';
import Loading from 'components/Loading';

const Home = loadable({
    loader:() => import('pages/Home'),
    loading:Loading,
    timeout:10000,// 10秒后
})
const Page = loadable({
    loader:() => import('pages/page'),
    loading:Loading,
    timeout:10000,// 10秒后
})
const Counter = loadable({
    loader:() => import('pages/Counter'),
    loading:Loading,
    timeout:10000,// 10秒后
})
const Notfound = loadable({
    loader:() => import('pages/notfound'),
    loading:Loading,
    timeout:10000,// 10秒后
})
const UserInfo  = loadable({
    loader:() => import('pages/UserInfo'),
    loading:Loading,
    timeout:10000,// 10秒后
})

//路由 
const getRouter = () =>(
    <Switch>
        <Route exact path = "/" component ={Home} />
        <Route path = "/page" component ={Page} />
        <Route path = "/counter" component ={Counter} />
        <Route path = "/userinfo" component ={UserInfo} />
        <Route  component={Notfound} />
    </Switch>
);

export default getRouter;