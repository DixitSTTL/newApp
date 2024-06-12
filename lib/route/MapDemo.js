import React, { useState } from 'react';
import { View } from 'react-native';
import MapView, { Polyline, Marker, } from 'react-native-maps';
// import IcnSubstations from "./svg/IcnSubstations";
// import IcnFeeder from "./svg/IcnFeeder";
// import IcnDTR1 from "./svg/IcnDTR1";
// import IcnPole from "./svg/IcnPole";
// import IcnPowerTransformers from "./svg/IcnPowerTransformers";


function MapDemo() {

    const [markers, setMarkers] = useState([
        { latitude: 21.536622499593086, longitude: 71.58083321868338, type: "Substation" },
        { latitude: 23.028251174284364, longitude: 72.56615234331711, type: "Feeder" },
        { latitude: 22.81424651237995, longitude: 70.87839559860024, type: "DTR" },
        { latitude: 21.830616372851072, longitude: 70.62268494190988, type: "Pole" },
        { latitude: 28.41815260131283, longitude: 79.29173863758207, type: "Branch" },
      ]);
 
 

    return (
        <View>

            <MapView
                style={{ width: '100%', height: '100%' }}
                initialRegion={{ latitude: 21.536622499593086, longitude: 71.58083321868338, latitudeDelta: 30, longitudeDelta: 30, }}>

                {/* {markers && markers.map((marker: any, index: number) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude: marker.latitude, longitude: marker.longitude, }}
                        pinColor={"purple"}
                    >

                        {marker.type == "Substation" && <IcnSubstations />}
                        {marker.type == "Feeder" && <IcnFeeder />}
                        {marker.type == "DTR" && <IcnDTR1 />}
                        {marker.type == "Pole" && <IcnPole />}
                        {marker.type == "Branch" && <IcnPowerTransformers />}
                    </Marker>
                ))} */}

                <Polyline
                    coordinates={markers}
                    strokeColor="#000"
                    strokeWidth={2}
                />

            </MapView>
        </View>
    );


}



export default MapDemo;
