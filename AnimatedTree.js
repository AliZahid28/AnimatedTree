import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Animated, {
    useSharedValue,
    withSpring,
    useAnimatedStyle,
} from 'react-native-reanimated';

const AnimatedTree = () => {
    const leafSize = useSharedValue(120);

    const increaseLeafSize = () => {
        leafSize.value = withSpring(leafSize.value + 20);
    };

    const leafStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(leafSize.value < 100 ? 100 : leafSize.value),
            height: withSpring(leafSize.value),
        };
    });


    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('./assets/leafBackgroundRemoved.png')}
                style={[styles.leaf, leafStyle]}
            />
            <TouchableOpacity activeOpacity={0.8} onPress={increaseLeafSize}>
                <Image
                    source={require('./assets/trunkrBackgroundRemoved.png')}
                    style={[styles.stump]}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    leaf: {
        width: 100,
        height: 100,
        bottom:-20,
        left:5,
        objectFit:'contain'
    },
    stump: {
        width: 100,
        height: 200,
        aspectRatio: 1 / 3,
    },
});

export default AnimatedTree;
