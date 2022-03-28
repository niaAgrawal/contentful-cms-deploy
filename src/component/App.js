
import React, { Suspense} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const Posts = React.lazy(()=>import('./Posts'));
const SinglePost = React.lazy(()=>import('./SinglePost'));
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div>
        <div className="header">Header</div>
        <Suspense fallback={<div>Loading ....</div>}>
          <Routes>
              <Route exact path='/' element={<Posts/>} />
              <Route path='/:id' element={<SinglePost/>} />
              <Route render={() => <h2> 404 page </h2>} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
