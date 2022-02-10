import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native';
import {PageStack, PageStackContainer} from './component/PageStack';
import Stock from './component/Stock';
import AddStock from './component/AddStock';
import RemoveStock from './component/RemoveStock';
import OrderStock from './component/OrderStock';
import ListOfStock from './component/ListOfStock';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App =()=> {
  return (
    <PageStackContainer>
      <PageStack
        DefaultPage = 'Stock'
        Pages={{
          Stock: Stock,
          AddStock: AddStock,
          RemoveStock: RemoveStock,
          OrderStock: OrderStock,
          ListOfStock: ListOfStock,
        }}
      />
    </PageStackContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
