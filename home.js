import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text>9:00</Text>
        <View style={styles.location}>
          <Image
            source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.J9-ZUxRBAt0nWc75HOF6pAHaEe&pid=Api&P=0&h=180' }}
            style={styles.avatar}
          />
          <Text style={styles.locationText}>Your Location{'\n'}Ha Noi</Text>
        </View>
        <Text>🔔</Text>
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search your food"
        />
        <Text>👋 HELLO</Text>
      </View>
      <View style={styles.categoryGrid}>
        <View style={styles.category}><Text>🍕 Pizza</Text></View>
        <View style={styles.category}><Text>🍔 Burger</Text></View>
        <View style={styles.category}><Text>🍹 Drink</Text></View>
        <View style={styles.category}><Text>🍚 Rice</Text></View>
      </View>
      <View style={styles.offer}>
        <Text style={styles.offerTitle}>BURGER</Text>
        <Text style={styles.offerSubtitle}>Today's Hot Offer</Text>
        <Text style={styles.offerRating}>⭐ 4.9 (3k+ Rating)</Text>
        <Image
          source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.6kpdp0PIgna8W5Mw9ZvZ1gHaE8&pid=Api&P=0&h=180' }}
          style={styles.offerImage}
        />
      </View>
      <View style={styles.popularItems}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <View style={styles.itemGrid}>
          <View style={styles.item}>
            <Image
              source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.VFZPQNKwQuLi-NhNLcIHgQHaHa&pid=Api&P=0&h=180' }}
              style={styles.itemImage}
            />
            <Text>BURGER</Text>
          </View>
          <View style={styles.item}>
            <Image
              source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.teMOBnBMUBaCB0VN7-2sEgHaEJ&pid=Api&P=0&h=180' }}
              style={styles.itemImage}
            />
            <Text>PIZZA</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  location: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  locationText: { color: '#888' },
  searchBar: {
    backgroundColor: '#e0f7fa',
    padding: 20,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
  searchInput: {
    width: '70%',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  categoryGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  category: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    width: '15%',
    alignItems: 'center',
  },
  offer: {
    backgroundColor: '#000',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  offerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  offerSubtitle: { color: '#fff' },
  offerRating: { color: '#fff' },
  offerImage: { width: '100%', height: 150, borderRadius: 10, marginTop: 10 },
  popularItems: { padding: 20, alignItems: 'center' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  itemGrid: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 },
  item: { backgroundColor: '#fff', padding: 10, borderRadius: 10, width: '45%', alignItems: 'center' },
  itemImage: { width: '100%', height: 100, borderRadius: 10 },
  viewAll: { color: '#4a90e2', marginTop: 10 },
});