import { View, Text, Image, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import {Ionicons} from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import Header from './Header';
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from './styles'

const restaurant = restaurants[0];


const RestaurantDetailsPage = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params.id;
  console.log(id)


  return (
    <View style={styles.page}>
        <FlatList 
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({item}) => <DishListItem dish={item}
        keyExtractor={(item) => item.name}
        />}
        />
        <Ionicons 
          name="arrow-back-circle" 
          size={45} 
          color="white" 
          style={styles.iconContainer} 
          onPress={() => navigation.goBack()}
        />
    </View>
  );
};


export default RestaurantDetailsPage;
