import React from 'react'
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'

export default class Mapa extends React.Component {
    constructor() {
        super()
        this.state = {
            localizaciones: null,
            puntos: [],
            isFetch: true
        }
    }

    createIcon() {
        const greenIcon = L.icon({
            iconUrl: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>',
            iconSize: [38, 95], // size of the icon
            shadowSize: [50, 64], // size of the shadow
            iconAnchor: [22, 94]
        })
        return greenIcon
    }
    /*componentDidMount() {
        //Aqui se comenta
        fetch('http://192.168.1.110:8000/api/donante')
            .then((response) => response.json())
            .then(json => {this.setState({ puntos: json, isFetch: false })})
    }*/
    render() {
        if (this.state.isFetch) {
            return 'loading..'
        }
        console.log(this.state.puntos)
        return (
            <MapContainer center={[-0.194446, -79.517312]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {this.state.puntos.map((marker) => {
                    return(<Marker key={marker.nombre} position={[marker.latitud, marker.longitud]} >
                        
                    <Popup>
                        {marker.nombre}
    </Popup>
                </Marker>)
                    
                })}
            </MapContainer>
            )

    }
}