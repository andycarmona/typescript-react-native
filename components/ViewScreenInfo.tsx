import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet, Dimensions, ImageBackground, ActivityIndicator, ScrollView } from "react-native";
import { Text, View } from "./Themed";
import WavySvg from '../components/WaveSvg';
const image = { uri: "https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb" };

export default class ViewScreenInfo extends React.Component {
    state = {
        loading: true,
        error: false,
        posts: [],
    }

    componentDidMount = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const posts = await response.json()

            this.setState({ loading: false, posts })
        } catch (e) {
            this.setState({ loading: false, error: true })
        }
    }

    renderPost = ({ id, title, body } : {id :any, title:any,body:any}, i) => {
        return (
            <View
                key={id}
                style={styles.post}
            >
                <View style={styles.postNumber}>
                    <Text>
                        {i + 1}
                    </Text>
                </View>
                <View style={styles.postContent}>
                    <Text>
                        {title}
                    </Text>
                    <Text style={styles.postBody}>
                        {body}
                    </Text>
                </View>
            </View>
        )
    }

    render() {
        const { posts, loading, error } = this.state

        if (loading) {
            return (
                <View style={styles.center}>
                    <ActivityIndicator animating={true} />
                </View>
            )
        }

        if (error) {
            return (
                <View style={styles.center}>
                    <Text>
                        Failed to load posts!
              </Text>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image}>
                    <WavySvg customStyles={styles.svgCurve} />
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Custom Header</Text>
                    </View>
                    <ScrollView style={styles.headerList}>
                        {posts.map(this.renderPost)}
                    </ScrollView>
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
    headerList: {
        marginTop: 150,
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
    }, post: {
        flexDirection: 'row',
    },
    postNumber: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    postContent: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
        paddingVertical: 25,
        paddingRight: 15,
    },
    postBody: {
        marginTop: 10,
        fontSize: 12,
        color: 'lightgray',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
