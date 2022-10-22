import React from 'react';
import { View, Text, StyleSheet, Animated, FlatList, TouchableOpacity, Image, ScrollView, Easing } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SharedElement } from 'react-navigation-shared-element';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { exercise1Spec, width } from '../../../config/ex1_data/theme';
import * as Animatable from 'react-native-animatable';

const { ITEM_WIDTH, ITEM_HEIGHT, RADIUS, SPACING, FULL_SIZE } = exercise1Spec;

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

export default function travelListDetail({ navigation, route }) {
    const { item } = route.params;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AntDesign
                onPress={navigation.goBack}
                style={{
                    paddingHorizontal: SPACING,
                    position: 'absolute',
                    top: 40,
                    left: 10,
                    zIndex: 2,
                }}
                name='arrowleft' size={27} color={'black'} />
            <SharedElement id={`item.${item.key}.photo`} style={[StyleSheet.absoluteFillObject]}>
                <View style={[StyleSheet.absoluteFillObject, { borderRadius: 0 }]}>
                    <Image
                        source={{ uri: item.image }}
                        style={[
                            StyleSheet.absoluteFillObject,
                            {
                                resizeMode: 'cover',
                            }]} />
                </View>
            </SharedElement>
            <SharedElement id={`item.${item.key}.location`}>
                <Animatable.Text
                    duration={700}
                    delay={200}
                    animation={'fadeInRight'}
                    style={
                        styles.location
                    }>
                    {item.location}
                </Animatable.Text>
            </SharedElement>
            <View style={{ position: 'absolute', bottom: 120 }}>
                <Text style={{
                    position: 'relative',
                    fontSize: 16,
                    width: '100%',
                    textTransform: 'uppercase',
                    fontWeight: '800',
                    color: '#fff',
                    marginHorizontal: SPACING,
                }}>
                    Activities
                </Text>
                <FlatList
                    data={[...Array(8).keys()]}
                    keyExtractor={item => String(item)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ padding: SPACING }}
                    renderItem={({ item, index }) => {
                        return (
                            <Animatable.View
                                duration={700}
                                delay={400 + index * 100}
                                animation={zoomIn}
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: 16,
                                    padding: SPACING,
                                    width: width * 0.33,
                                    height: width * 0.5,
                                    marginRight: SPACING,
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => navigation.push('Map', { item })}
                                >
                                    <Image source={{ uri: 'https://miro.medium.com/max/124/1*qYUvh-EtES8dtgKiBRiLsA.png' }}
                                        style={{ width: '100%', height: '78%', resizeMode: 'cover' }}
                                    />
                                    <Text style={{ marginTop: 15 }}>Activity #{item + 1}</Text>
                                </TouchableOpacity>
                            </Animatable.View>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

travelListDetail.sharedElements = (route, otherRoute, showing) => {
    const { item } = route.params;
    return [
        {
            id: `item.${item.key}.photo`
        },
        // {
        //     id: `item.${item.key}.location`
        // }
    ]
};

const styles = StyleSheet.create({
    location: {
        fontSize: 30,
        color: '#fff',
        fontWeight: '800',
        width: ITEM_WIDTH * 0.8,
        textTransform: 'uppercase',
        position: 'absolute',
        top: 70,
        left: SPACING * 2,
    },
});