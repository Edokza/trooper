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

const OrderStock = ({navigate}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.headerText}>Order Stock</Text>
      </View>
      <View style={styles.middle}>
        <SafeAreaView style={styles.display}>
          <Text style={styles.textTitSec}>Summary</Text>
          <Text style={styles.textTitSec}>Qty.</Text>
        </SafeAreaView>
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
    flex: 4,
    padding: 25,
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
});

export default OrderStock;
