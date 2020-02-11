import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'yellow' },
  content: { flex: 1, backgroundColor: 'red' },
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content} />
    </SafeAreaView>
  );
};

export default App;
