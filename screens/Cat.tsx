import { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import axios from "axios";
import Constants from "expo-constants";

export const Cat = ({ navigation }: any) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://api.thecatapi.com/v1/breeds?limit=20"
      );
      setData(res?.data);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("InfoScreen", {
                id: item.id,
                url: "https://api.thecatapi.com/v1/breeds/",
                imgId: item.reference_image_id,
                imgUrl: "https://api.thecatapi.com/v1/images/",
              })
            }
          >
            <View style={styles.itemContainer}>
              <View style={styles.itemContent}>
                <Text style={styles.itemText}>{item.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
  },
  itemContainer: {
    flex: 1,
    padding: 7,
    flexDirection: "row",
    marginLeft: 2,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 8,
  },
  itemContent: {
    padding: 10,
    width: "100%",
  },
  itemText: {
    width: "100%",
  },
});
