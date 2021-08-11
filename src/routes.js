import { BrowserRouter as Router, Route } from 'react-router-dom'

import './styles/global.css'
import Cadastro from './pages/cadastro/cadastro';
import Checkout from './pages/checkout/checkout';
import PetShop from './pages/petshop/petshop';
import SideBar from './components/sidebar/SideBar';
import Home from './pages/home/home';

const Routes = () => {
    return (
        <>
            <Router>
                <Route path="/" exact component={Home} />
                <Route path="/petshop/:id" exact component={PetShop} />
                <Route path="/checkout" exact component={Checkout} />
                <Route path="/cadastro" exact component={Cadastro} />
                <SideBar />
           </Router>      
        </>
    )
}

export default Routes