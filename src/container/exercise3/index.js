import React from 'react';
import { View, Text, Dimensions, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView, Easing } from 'react-native';

export default function index({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ex 3 Comming Soon!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        color: '#000',
    }
});