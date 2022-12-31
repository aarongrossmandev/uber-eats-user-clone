import { View, Text, Image, FlatList } from 'react-native';
import styles from './styles';

import orders from '../../../assets/data/orders.json';
import restaurants from '../../../assets/data/restaurants.json';
import DishListItem from '../../components/DishListItem';
import OrderListItem from '../../components/OrderListItem';
import CartDishItem from '../../components/CartDishItem';

const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
      
      <View style={styles.page}>
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

      <View style={styles.container}>
        <Text style={styles.title}>{order.Restaurant.name}</Text>
        <Text styles={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>

        <Text style={styles.menuTitle}>Your Order</Text>
      </View>
  </View>

    </View>
  )
}

const OrderDetails = () => {
  return(
    <FlatList 
    ListHeaderComponent={OrderDetailsHeader} 
    data={restaurants[0].dishes} 
    renderItem={({item}) => <CartDishItem cartDish={item} />} 
  />
  )
}

export default OrderDetails