import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestPetshop } from '../../store/modules/shop/actions';

import Header from '../../components/header/Header'
import Card from '../../components/product/card/Card'

import './petshop.css'

const PetShop = ({ match }) => {
    
    const dispatch = useDispatch();
    const { petshop } = useSelector((state) => state.shop);

    useEffect(() => {
        dispatch(requestPetshop(match.params.id));
      }, []);
  
    return (
        <div className="h-100">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img src={petshop.logo} alt="petshop-logo" className="img-fluid petshop-image" />
                        <b>{petshop.nome}</b>
                        <div className="petshop-infos">
                            <span className="mdi mdi-star"></span>
                            <text>
                                <b>2,8</b>
                            </text>
                            <span className="mdi mdi-cash-usd-outline"></span>
                            <text>{petshop.categoria}</text>
                            <span className="mdi mdi-crosshairs-gps"></span>
                            <text>2,9km</text>
                        </div>
                        <label className="badge badge-primary">Frete Grátis</label>
                    </div>
                    <div className="col-10">
                        <h5>Produtos</h5>
                        <br />
                        <div className="row">
                            {petshop.products?.map(p => <Card product={p}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetShop