import logo from './logo.svg';
import './App.css';
import Products from './modules/admin/Products';
import Footer from './modules/admin/Footer';
import Header from './modules/admin/Header';
import EditProduct from './modules/admin/EditProduct';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Product from './modules/admin/Product';
import NewProduct from './modules/admin/NewProduct';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path='/admin/products' component={Products}/>
          <Route exact path='/admin/products/new' component={NewProduct}/>
          <Route exact path='/admin/products/:id' component={EditProduct}/>
          
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

