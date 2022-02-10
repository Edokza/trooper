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
import AddStock from './AddStock';

const Stock = ({navigate}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.headerText}>Stock</Text>
      </View>
      <View style={styles.middle}>
        <SafeAreaView style={styles.display}>
          <Text style={styles.textTitSec}>Summary</Text>
          <Text style={styles.textTitSec}>Qty.</Text>
        </SafeAreaView>
      </View>
      <View style={styles.botBar}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => navigate.to('AddStock')}>
          <Text style={styles.textbutton}>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => navigate.to('RemoveStock')}>
          <Text style={styles.textbutton}>REMOVE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => navigate.to('OrderStock')}>
          <Text style={styles.textbutton}>ORDER</Text>
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
    flex: 3,
    padding: 25,
  },
  botBar: {
    flex: 1 / 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
    backgroundColor: '#f54254',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
  },
  display: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'white',
    borderWidth: 2.5,
    borderRadius: 30,
  },
  textTitSec: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  button: {
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

export default Stock;
