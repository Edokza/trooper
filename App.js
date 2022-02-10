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
import Stock from './Page/Stock';
import AddStock from './Page/AddStock';
import RemoveStock from './Page/RemoveStock';
import OrderStock from './Page/OrderStock';
import ListOfStock from './Page/ListOfStock';

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
