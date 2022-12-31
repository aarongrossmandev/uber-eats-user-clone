import {useState} from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const dish = restaurants[0].dishes[0];

const DishDetailsScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();

  const onMinus = () => {
    if (quantity > 1) {
    setQuantity(quantity - 1)
    }
  }

  const onPlus = () => {
    setQuantity(quantity + 1)
  }
  
  const getTotal = () => {
    return (dish.price * quantity).toFixed(2)
  }


  return(
    <View style={styles.page}>
      <Image style={styles.image} source={{uri: dish.image}} />
      
        <View style={styles.container}>
          <Text style={styles.name}>{dish.name}</Text>
          <Text style={styles.price}>${dish.price.toFixed(2)}</Text>
          <Text style={styles.description}>{dish.description}</Text>
        </View>
        <View style={styles.divider} />

      <View style={styles.row}>
      <AntDesign name="minus" size={30} color="black" onPress={onMinus} />
      <Text style={styles.quantity}>{quantity}</Text>
      <AntDesign name="plus" size={30} color="black" onPress={onPlus}  />
      </View>

      <Pressable onPress={() => navigation.navigate("Cart")} style={styles.button}>
        <Text style={styles.buttonText}>
          Add {quantity} to cart &#8226; ${getTotal()}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // paddingVertical: 30, //temp fix
    // padding: 10,
  },
  container: {
    padding: 10
  },
  image: {
    width: '100%',
    aspectRatio: 4/3
  },
  name:{
    fontSize: 30,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 0
  },
  price: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  description:{
    color: 'gray'
  },
  divider: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
    backgroundColor: 'lightgray',
    width: 130,
    height: 35,
    borderRadius: 30,
    marginLeft: 10,
    paddingHorizontal: 10,
    
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
    marginHorizontal: 10,
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

export default DishDetailsScreen;