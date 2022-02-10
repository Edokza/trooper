import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

const RemoveStock = ({navigate}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.headerText}>Remove Stock</Text>
      </View>
      <View style={styles.middle}></View>
      <View style={styles.botBar}>
        <Text style={styles.textTitSec}>Detail</Text>
        <View style={styles.displayDetail}></View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => navigate.to('ListOfStock')}>
          <Text style={styles.textbutton}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  topBar: {
    flex: 1 / 4,
    padding: 5,
    backgroundColor: '#f54254',
  },
  middle: {
    flex: 2,
    padding: 25,
  },
  botBar: {
    flex: 2,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#f54254',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
  },
  displayDetail: {
    flex: 1 / 6,
    padding: 20,
    backgroundColor: 'white',
    borderWidth: 2.5,
    borderRadius: 10,
  },
  textTitSec: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
      marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: 'black',
  },
  textbutton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default RemoveStock;
