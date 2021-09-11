import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import { Colors } from '../assets/Colors';
import Card from '../components/Card';

const Data = [
    {
        id: '1',
        itemName: 'Item 1',
        itemQuantity: '999',
        dateTime: '10.10.2021 - 12:12:40',
        inex: 'in',
        emp: 'shresth1'
    },
    {
        id: '2',
        itemName: 'Item 2',
        itemQuantity: '999',
        dateTime: '10.10.2021 - 12:12:40',
        inex: 'in',
        emp: 'shresth2'
    },
    {
        id: '3',
        itemName: 'Item 3',
        itemQuantity: '999',
        dateTime: '10.10.2021 - 12:12:40',
        inex: 'in',
        emp: 'shresth'
    },
];

const RecordScreen = () => {

    const renderItem = ({item}) => (
        <Card style={styles.item}>
            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.cardText}>ID:   {item.id}</Text>
            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.cardText}>Name: {item.itemName}</Text>
            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.cardText}>Quantity: {item.itemQuantity}</Text>
            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.cardText}>Date: {item.dateTime}</Text>
            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.cardText}>Employee: {item.emp}</Text>
            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.cardText}>In/Ex: {item.inex}</Text>
        </Card>
    );

    return (
        <View style={styles.screen}>
            <FlatList
                keyExtractor={item => item.id}
                data={Data}
                renderItem={renderItem}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primaryBackgroud  
    },

    item: {
        flex: 1,
        width: 300,
        
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingVertical: 10,
        margin: '5%'
    },

    cardText: {
        textAlign: 'left',
    }
});

export default RecordScreen;