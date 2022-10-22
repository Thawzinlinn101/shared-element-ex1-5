import React from 'react';
import { View, Text, Dimensions, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView, Easing } from 'react-native';

export default function index({ navigation }) {
    return (
        <View>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.push("Exercise1")}
            >
                <Text style={styles.textStyle}># Exercise 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.push("Exercise2")}
            >
                <Text style={styles.textStyle}># Exercise 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.push("Exercise3")}
            >
                <Text style={styles.textStyle}># Exercise 3</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.push("Exercise4")}
            >
                <Text style={styles.textStyle}># Exercise 4</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.push("Exercise5")}
            >
                <Text style={styles.textStyle}># Exercise 5</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        padding: 15,
        marginVertical: 20,
    },
    textStyle: {
        fontSize: 35,
        fontWeight: 'bold',
    },
});