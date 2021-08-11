import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestPetshops } from '../../store/modules/shop/actions'
import Header from '../../components/header/Header'
import Map from '../../components/map/Map'
import PetShop from '../../components/petshop/PetShop'

import './home.css'

const Home = () => {
    const dispatch = useDispatch()
    const { petshops } = useSelector((state) => state.shop)

    useEffect(() => {
        dispatch(requestPetshops())
    }, [])
    
    return (
        <div className="h-100">
            <Header hideCart/>
            <div className="container-fluid petshop-list-container">
                <div className="col-12 px-4 text-center">
                    <h5>Mais próximos de você - {petshops.length}</h5>
                </div>
                <ul className="col-12 petshop-list">
                    {petshops.map((p) => (
                        <PetShop petshop={p} />
                    ))}
                </ul>
                <Map petshops={petshops} />
            </div>
            
        </div>
    )
}

export default Home