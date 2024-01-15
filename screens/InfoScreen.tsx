import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  Button,
} from "react-native";
import Constants from "expo-constants";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
// type ProductData = {
//   id: any;
//   name: string;
//   description: string;
// };

export const InfoScreen = ({ route }: any) => {
  const [data, setData] = useState<any | null>(null);
  const [zurag, setZurag] = useState<any | null>(null);
  const params: any = route.params;
  const zuragId = params.imgId;
  const aid = params.id;
  const ural = params.url;
  const imgUral = params.imgUrl;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${ural}${aid}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const zuragData = async () => {
      try {
        const response = await axios.get(`${imgUral}${zuragId}`);
        setZurag(response.data.url);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    zuragData();
  }, [aid]);

  return (
    <View style={styles.container}>
      {data ? (
        <View style={styles.content}>
          <Image
            width={100}
            height={100}
            source={{
              uri: `${zurag}`,
            }}
          />
          <Text
            style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}
          >
            {data.name}
          </Text>
          <Text>{data.description}</Text>
          <Button title="Add to inventory" />
        </View>
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
