import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet, Dimensions, ImageBackground } from "react-native";
import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";
import WavySvg from '../components/WaveSvg';
const image = { uri: "https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb" };

export default class ViewScreenInfo extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image}>
                    <WavySvg customStyles={styles.svgCurve} />
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Custom Header</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
    },
    headerContainer: {
        marginTop: 50,
        marginHorizontal: 10
    },
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width
    },
    image: {
        flex: 1,
        resizeMode: "cover",

    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
        backgroundColor: '#5000ca',
    }
});
