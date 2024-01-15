import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import axios from "axios";
import Constants from "expo-constants";

export const Dog = ({ navigation }: any) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.thedogapi.com/v1/breeds?limit=20"
        );
        setData(res?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()} // Ensure the key is a string
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("InfoScreen", {
                id: item.id.toString(),
                url: "https://api.thedogapi.com/v1/breeds/",
                imgId: item.reference_image_id,
                imgUrl: "https://api.thedogapi.com/v1/images/",
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
