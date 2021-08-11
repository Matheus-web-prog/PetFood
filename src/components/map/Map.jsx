import { useSelector } from 'react-redux'
import GoogleMapReact from 'google-map-react'
import Marker from '../marker/Marker'
import './map.css'

const Map = ({ petshops }) => {
    const { mapCenter } = useSelector(state => state.shop)

    return (
        <div className="container-map">
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyD5Hbvl6b1H_8OJHsTtGTTaUBiXAp-AgVA' }}
                center={mapCenter}
                defaultZoom={15}
            >
                {petshops.map(p => <Marker petshop={p} lat={p.location.lat} lng={p.location.lng}/>)}
            </GoogleMapReact>
        </div>
    )
}

export default Map