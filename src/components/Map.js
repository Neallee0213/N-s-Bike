import React from 'react'
import Title from "./Title";
import "../App.css"
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";


const gMap = () => {


    return (
        <>
            <GoogleMap
                defaultZoom={14}
                defaultCenter={{ lat: 43.664916, lng: -79.412406 }}
            >
                <Marker key={1}
                    position={{ lat: 43.664916, lng: -79.412406 }} />
            </GoogleMap>


        </>
    )
}
const WrapperdMap = withScriptjs(withGoogleMap(gMap))
const SingleMap = () => {

    return (
        <>
            <div className="container-fulid googlemap">
                <div className="row">
                    <div className="col">
                        <Title name="our" title="Store"></Title>
                        <div className="col py-5" />
                        <WrapperdMap googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `200px` }} />}
                            mapElement={<div style={{ height: `200%` }} />} />

                    </div>
                </div>
            </div>
        </>
    )
}
export default SingleMap
