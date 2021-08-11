import { useDispatch, useSelector } from 'react-redux'
import { toggleCartProduct } from '../../../store/modules/shop/actions'

import './card.css'

const Card = ({ product }) => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.shop);
    const added = cart.findIndex((p) => p._id === product._id) !== -1;

    return (
        <div className="product col-3">
            <img src={product.capa} alt="product" className="img-fluid align-center" />
            <button
                onClick={() => dispatch(toggleCartProduct(product))}
                className={`btn btn-${added ? 'secondary' : 'primary'} rounded-circle`}
            >
                {added ? '-' : '+'}
            </button>
            <h4>
                <label className="badge badge-primary">R$ {product.preco.toFixed(2)}</label>
            </h4>
            <small>
                <b>{product.nome}</b>
            </small>
        </div>
    )
}

export default Card