import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {  Image, Pressable, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getKeyNestList, NestModel } from '../store';
import { ApplicationState } from '../store'
import { styles } from './Styles';
import MapView, { Marker } from 'react-native-maps';
import Modal from "react-native-modal";

export type Props = {
    name: string;
    baseEnthusiasmLevel?: number;
};
const Home: React.FC<Props> = ({
    name,
    baseEnthusiasmLevel = 0,
}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [currentKeyNest, setCurrentKeyNest] = useState({});
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const dispatch = useDispatch();
    const { initialNest} = useSelector((state: ApplicationState) => state.NestReducer)

    useEffect(() => {
        getKeyNestData();
    }, []);

    const getKeyNestData = async () => {
        await dispatch(getKeyNestList())
    }

    const onMarkerClick = (data: NestModel) => {
        setCurrentKeyNest(data);
        toggleModal();
    }

    return (

        <View style={styles.container} >
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 51.5025,
                    longitude: -0.1414,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >

                {initialNest.ResponsePacket &&
                    initialNest.ResponsePacket.map((marker: any, index: number) => (
                        <Marker
                            key={index}
                            coordinate={{
                                latitude: initialNest.ResponsePacket[index].Latitude,
                                longitude: initialNest.ResponsePacket[index].Longitude,
                            }}
                            onPress={() => onMarkerClick(initialNest.ResponsePacket[index])}
                        >
                            <Image source={require('../assets/images/key_nest.png')} style={{ height: 35, width: 35 }} />
                        </Marker>
                    ))}
            </MapView>
            <Modal isVisible={isModalVisible}
                style={styles.modelContainer}
            >
                <View style={styles.modelSubContainer}>

                    <View>
                        <Text style={styles.storeNameTitle}>{currentKeyNest.StoreName}</Text>
                        <Text style={styles.direction}>Directions</Text>
                        <Image source={require('../assets/images/profile.jpg')} 
                        style={styles.profileImage} />
                    </View>

                    <View style={styles.line} />
                    <Text style={styles.hoursHeading}>Hours</Text>
                    <Text style={styles.content}>Monday - Saturday</Text>
                    <Text style={styles.content}>Sunday</Text>
                    <Text style={styles.hoursHeading2}>Address</Text>
                    <Text style={styles.content}>40 Pall Mall, St. James London SW1Y 5JQ</Text>
                    <View style={styles.line} />
                    <Pressable style={styles.button} onPress={toggleModal} ><Text style={styles.buttonTitle}>CLOSE</Text></Pressable>
                </View>
            </Modal>
        </View>
    );

};


export default Home