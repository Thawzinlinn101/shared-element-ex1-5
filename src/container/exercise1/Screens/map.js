import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { height, width } from '../../../config/ex1_data/theme';

export default function map({ navigation }) {
    return (
        // <MapView
        //     style={styles.map}
        //     initialRegion={{
        //         latitude: 16.794182,
        //         longitude: 96.155991,
        //         latitudeDelta: 0.01,
        //         longitudeDelta: 0.01 * (width / height),
        //     }}
        // />
        <View><Text>Map View comming soon</Text></View>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
});