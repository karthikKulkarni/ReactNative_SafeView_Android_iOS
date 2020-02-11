import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  ImageBackground,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: { flex: 1 },
  usableArea: {
    flex: 1,
    borderColor: 'yellow',
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
  appBg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

const App = () => {
  return (
    <ImageBackground style={styles.appBg} source={{ uri: 'someimage' }}>
      <SafeAreaProvider>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />

        <SafeAreaView style={styles.container}>
          <View style={styles.usableArea}>
            <Text style={styles.txt}>
              Inside the Yellow border is effective usable area.
            </Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default App;
