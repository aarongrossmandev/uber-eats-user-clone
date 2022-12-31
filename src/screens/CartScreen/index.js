import { View, Text, StyleSheet, FlatList } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import CartDishItem from '../../components/CartDishItem';

const restaurant = restaurants[0];


const CartScreen = () => {
  
 return(
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.yourItem}>Your Items</Text>
    
        <FlatList 
          data={restaurant.dishes} 
          renderItem={({item}) => <CartDishItem cartDish={item} />} 
        />

    <View style={styles.divider} />

      
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          Create Order &#8226;
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    paddingVertical: 40, //temp fix
    padding: 10,
   },
  yourItem:{
    fontWeight: '600',
    fontSize: 19,
    letterSpacing: 0.5,
    marginTop: 30,
    marginBottom: 10,
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  quantityContainer:{
    backgroundColor: 'lightgray',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 5,
    borderRadius: 3,
  },
  name:{
    fontSize: 24,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 0
  },
  price: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  
  divider: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
  
  quantity: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 5,
    textAlign: 'center',
   },
   button:{
    backgroundColor: 'black',
    marginTop: "auto",
    // marginHorizontal: 10,
    marginBottom: 30,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
   },
   buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20
   }
});

export default CartScreen;