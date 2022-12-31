import { View, Text, StyleSheet, FlatList } from 'react-native';

const CartDishItem = ({cartDish}) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={{fontWeight: '600',}}>{cartDish.name}</Text>
      <Text style={{marginLeft: "auto"}}>${cartDish.price.toFixed(2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  
  name:{
    fontSize: 24,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 0
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    paddingHorizontal: 10
  },
  quantityContainer:{
    backgroundColor: 'lightgray',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 5,
    borderRadius: 3,
  },
  yourItem:{
    fontWeight: '600',
    fontSize: 19,
    letterSpacing: 0.5,
    marginTop: 30,
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  
});

export default CartDishItem;