import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

export default class ViewScreenInfo extends React.Component {
    render() {
        return (
            <View style={{backgroundColor: '#000000', alignSelf: 'flex-start' }}>
                <View style={{ flex: 1, backgroundColor: "red" }}>
                    <Text style={{ fontSize: 20, color: "#fff" }}>Item number 00</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "blue" }}>
                    <Text style={{ fontSize: 20, color: "#fff" }}>Item number 2</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "purple" }}>
                    <Text style={{ fontSize: 20, color: "#fff" }}>Item number 3</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "orange" }}>
                    <Text style={{ fontSize: 20, color: "#fff" }}>Item number 4</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    developmentModeText: {
        marginBottom: 20,
        fontSize: 14,
        lineHeight: 19,
        textAlign: "center",
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: "contain",
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: "center",
        marginHorizontal: 50,
        width: 100,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: "rgba(96,100,109, 0.8)",
    },
    codeHighlightContainer: {
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: "center",
    },
    helpContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        alignItems: "center",
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        textAlign: "center",
    },
});
