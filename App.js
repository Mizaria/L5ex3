import React from 'react';
import { View, Text, StyleSheet, StatusBar, SectionList, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6"; // Import FontAwesome6 icons

const datasource = [
    {
        data: [],
        title: 'Add Pokemon ',
        bgColor: 'blue',
    },
    {
        data: [
            { name: 'Bulbasaur', image: require('./img/SV3pt5_EN_1-2x.png') },
            { name: 'Ivysaur', image: require('./img/plant2.png') }
        ],
        icon: 'plant-wilt', // Added icon property
        title: 'Plant',
        bgColor: 'green',
    },
    {
        data: [
            { name: 'Charmeleon', image: require('./img/fire1.png') },
            { name: 'Charmander', image: require('./img/fire2.png') }
        ],
        icon: 'fire-flame-curved', // Added icon property
        title: 'Fire',
        bgColor: 'orange',
    },
    {
        data: [
            { name: 'Squirtle', image: require('./img/water1.png') },
            { name: 'Wartortle', image: require('./img/water2.png') }
        ],
        icon: 'water', // Added icon property
        title: 'Water',
        bgColor: 'lightblue',
    },
];

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 15,
        flex: 1,
    },
    headerText: {
        marginTop: 20,
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 5,
        borderColor: "black",
        borderWidth: 1,
        flexDirection: 'row', // Aligns the icon and text in a row
        alignItems: 'center',  // Vertically aligns the icon and text in the center
    },
    headerTextonly:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    imageStyle: {
        width: 250,
        height: 250,
        borderRadius: 5,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'lightgray',
        padding: 10,
    },
});

const renderItem = ({ item }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.textStyle}>{item.name}</Text>
            <Image style={styles.imageStyle} source={item.image} />
        </View>
    );
};

const App = () => {
    return (
        <View style={{ marginBottom: 50, margin: 10 }}>
            <StatusBar hidden={true} />
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgColor, icon } }) => (
                    <View style={[styles.headerText, { backgroundColor: bgColor }]}>

                        {icon && <Icon name={icon} size={30}  color="white" style={{ marginRight: 10 }} />}
                        <Text style={[styles.headerTextonly]}>{title}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default App;



