
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Slot } from "expo-router";

export default function RootLayout() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Mandy chair",
      type: "Office",
      category: "Chair",
      price: "$180.00",
      image:
        "https://pngimg.com/uploads/armchair/armchair_PNG7046.png",
    },
    {
      id: 2,
      name: "Sofa Footstool",
      type: "Living Room",
      category: "Chair",
      price: "$250.00",
      image:
        "https://pngimg.com/uploads/sofa/sofa_PNG6951.png",
    },
  ];

  const filtered = products.filter(
    (item) =>
      (category === "All" || item.category === category) &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.menu}>☷</Text>
          <Image
            source={{
              uri: "https://i.pravatar.cc/100?img=47",
            }}
            style={styles.avatar}
          />
        </View>

        <Text style={styles.title}>
          Find unique furniture for your home
        </Text>

        <View style={styles.searchRow}>
          <TextInput
            style={styles.search}
            placeholder=" Search furniture"
            value={search}
            onChangeText={setSearch}
          />

          <TouchableOpacity style={styles.filter}>
            <Text style={styles.filterText}>☷</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.smallText}>Up to</Text>
            <Text style={styles.discount}>
              40% Discount!
            </Text>
            <Text style={styles.smallText}>
              Limited-time furniture offers
            </Text>

            <TouchableOpacity style={styles.shopButton}>
              <Text style={styles.shopText}>Shop Now</Text>
            </TouchableOpacity>
          </View>

          <Image
            source={{
              uri: "https://pngimg.com/uploads/chair/chair_PNG6897.png",
            }}
            style={styles.bannerImage}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Popular Items
          </Text>
          <Text style={styles.viewAll}>View all ›</Text>
        </View>

        <View style={styles.categories}>
          {["All", "Chair", "Table", "Lighting"].map(
            (item) => (
              <TouchableOpacity
                key={item}
                onPress={() => setCategory(item)}
                style={[
                  styles.categoryButton,
                  category === item && styles.active,
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    category === item && styles.activeText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>

        <View style={styles.products}>
          {filtered.map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.imageBox}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.productImage}
                />
              </View>

              <View style={styles.productInfo}>
                <Text style={styles.heart}>♡</Text>
                <Text style={styles.type}>{item.type}</Text>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.hiddenRouter}>
        <Slot />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 45,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menu: {
    fontSize: 28,
    color: "#101820",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 14,
  },
  title: {
    fontSize: 29,
    fontWeight: "600",
    color: "#101820",
    marginTop: 35,
    marginBottom: 25,
    lineHeight: 38,
  },
  searchRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  search: {
    flex: 1,
    height: 55,
    backgroundColor: "#F5F5F5",
    borderRadius: 14,
    paddingHorizontal: 15,
    fontSize: 14,
  },
  filter: {
    backgroundColor: "#99512E",
    width: 55,
    height: 55,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  filterText: {
    color: "white",
    fontSize: 24,
  },
  banner: {
    height: 190,
    backgroundColor: "#101820",
    borderRadius: 22,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  bannerContent: {
    flex: 1,
    zIndex: 1,
  },
  smallText: {
    color: "white",
    fontSize: 12,
  },
  discount: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    marginVertical: 9,
  },
  shopButton: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginTop: 17,
  },
  shopText: {
    fontSize: 13,
    fontWeight: "600",
  },
  bannerImage: {
    width: 125,
    height: 150,
    resizeMode: "contain",
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 28,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#101820",
  },
  viewAll: {
    color: "#999",
    fontSize: 13,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
    marginBottom: 24,
  },
  categoryButton: {
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderRadius: 13,
  },
  active: {
    backgroundColor: "#99512E",
  },
  categoryText: {
    color: "#333",
    fontSize: 14,
  },
  activeText: {
    color: "white",
  },
  products: {
    flexDirection: "row",
    gap: 14,
    paddingBottom: 60,
  },
  card: {
    flex: 1,
    minWidth: 0,
  },
  imageBox: {
    backgroundColor: "#F6F6F6",
    borderRadius: 17,
    height: 160,
    alignItems: "center",
    justifyContent: "center",
  },
  productImage: {
    width: "90%",
    height: 145,
    resizeMode: "contain",
  },
  productInfo: {
    backgroundColor: "#101820",
    borderRadius: 15,
    padding: 14,
    marginTop: 8,
    minHeight: 110,
  },
  heart: {
    position: "absolute",
    right: 12,
    top: 10,
    color: "#F08090",
    fontSize: 24,
  },
  type: {
    color: "#aaa",
    fontSize: 12,
  },
  name: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
    marginTop: 8,
  },
  price: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 8,
  },
  hiddenRouter: {
    height: 0,
    overflow: "hidden",
  },
});
