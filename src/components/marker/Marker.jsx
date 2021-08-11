import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MarkerIcon from '../../assets/marker.png'
import MarkerIconSelected from '../../assets/marker-selected.png'

import './marker.css'

const Marker = ({ petshop }) => {
    const { petshopMapSelected } = useSelector((state) => state.shop)
    return (
        <Link to={`/petshop/${petshop._id}`}>
            <div>
                <img src={petshopMapSelected === petshop._id ? MarkerIconSelected : MarkerIcon} />
                <img src={petshop.logo} alt="petshop-logo" className="img-marker" />
            </div>
        </Link>
    )
}

export default Marker