import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { Colors } from '../assets/Colors';
import Card from '../components/Card';

const Profile = () => {
    return (
        <View style={styles.screen}>
            <Card>
                <Text>Profile</Text>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primaryBackgroud
    }
});

export default Profile;