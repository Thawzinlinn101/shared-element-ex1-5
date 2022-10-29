import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
import { SharedElement } from 'react-navigation-shared-element';
import { exercise1Spec, height, width } from '../../../config/ex1_data/theme';

const { SPACING } = exercise1Spec;

const zoomIn = {
    0: {
        opacity: 0,
        scale: 0,
    },
    1: {
        opacity: 1,
        scale: 1,
    },
};

export default function map({ navigation, route }) {
    const { item } = route.params;
    return (
        <SharedElement id={`item.${item.key}.mapview`} style={[StyleSheet.absoluteFillObject]}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 16.794182,
                    longitude: 96.155991,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01 * (width / height),
                }}
            >
            </MapView>
        </SharedElement>
    );
}

map.sharedElements = (route, otherRoute, showing) => {
    const { item } = route.params;
    return [
        {
            id: `item.${item.key}.mapview`
        },
    ]
};

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
});