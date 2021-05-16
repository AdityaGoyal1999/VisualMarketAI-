import React from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView, View } from 'react-native';
import { Button } from 'react-native-elements';
import SellerCard from '../components/SellerCard';

function StoreView({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading }>Mark's Store</Text>
            <ScrollView>

                <SellerCard name="20% Discount on Melons" img='melons.jpeg'/>
                <SellerCard name="20% Discount on Melons" img='melons.jpeg'/>
                <SellerCard name="20% Discount on Melons" img='melons.jpeg'/>

            </ScrollView>
            <View style={styles.footer}>
                <Button
                    title="Video Call with Attendent"
                    // type="outline"
                    style={styles.button}
                />
                <Button
                    title="Checkout Items"
                    type="outline"
                    style={styles.button}
                    onPress = {() => navigation.navigate('Checkout')}
                />
                <Button
                    title="Voice to Text for Items"
                    // type="outline"
                    style={ styles.button }
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 60,
    },
    button: {
        margin: 10,
    },
    container:{
        flex: 1,
    },
    footer:{
        width: '100%', 
        height: '40%', 
        backgroundColor: '#FAF9F6', 
        justifyContent: 'center', 
        // alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
});

export default StoreView
