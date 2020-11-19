import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";
import WavySvg from '../components/WaveSvg';
export default class ViewScreenInfo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <WavySvg customStyles={styles.svgCurve} />
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Custom Header</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    headerContainer: {
        marginTop: 50,
        marginHorizontal: 10
    },
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
        backgroundColor: '#5000ca',
    }
});
