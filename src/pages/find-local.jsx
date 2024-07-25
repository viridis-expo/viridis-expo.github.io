import React from 'react';
import NavBar from './navbar';
import "leaflet/dist/leaflet.css";
import '../styles/find-local.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, divIcon, point } from "leaflet";
const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconSize: [38, 38] // size of the icon
  });

function FindLocal() {

    return (
        <div>
            <NavBar />
            <h1>Find Local Events</h1>
            <p>Find local events near you!  Once you do, fill out the form to sign-up!  You will recieve more details in your email about the specific location.</p>
            <a href = 'https://forms.gle/5EkawyN6wfLZ9rmM6'><p>Form Link</p></a>
            <MapContainer center={[56.1304, -106.3468]} zoom={4.5}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[45.4215, -75.6981]} icon={customIcon}>
                    <Popup>
                        Ottawa local event
                    </Popup>
                </Marker>
                <Marker position={[53.5444, -113.4909]} icon={customIcon}>
                    <Popup>
                        Edmonton local event
                    </Popup>
                </Marker>
                <Marker position={[49.2827, -123.1207]} icon={customIcon}>
                    <Popup>
                        Vancouver local event
                    </Popup>
                </Marker>
                {/* Add more markers for other provinces */}
            </MapContainer>
        </div>
    );
};

export default FindLocal;
