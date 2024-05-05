/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

const logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  width: 94,
  height: 94,
};

const App = () => (
  <SafeAreaView style={styles.sectionContainer}>
    <ScrollView>
      <View>
        <Text style={{ fontSize: 26,  }}>Scroll me plz</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 26 }}>If you like</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
      </View>
      <View>
        <Text style={styles.sectionTitle}>Hello SdeAbhi!</Text>
        <Text>Hello SdeAbhi!</Text>
        <Text>Hello SdeAbhi!</Text>
        <Text>Hello SdeAbhi!</Text>
        <Text>Hello SdeAbhi!</Text>
        <Text>Hello SdeAbhi!</Text>
        <Text>Hello SdeAbhi!</Text>
        <Text>Hello SdeAbhi!</Text>
        <Text>Hello SdeAbhi!</Text>
        <Text>Hello SdeAbhi!</Text>
      </View>
      
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  sectionContainer: {
    margin: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
