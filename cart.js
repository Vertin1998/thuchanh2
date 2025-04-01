import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function CartScreen() {
  const [quantity, setQuantity] = useState(2);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text>9:00</Text>
        <Text style={styles.headerTitle}>Shopping Cart</Text>
        <Text>🗑️</Text>
      </View>
      <View style={styles.cartContent}>
        <View style={styles.cartItem}>
          <Image
            source={{ uri: 'https://tse2.mm.bing.net/th?id=OIP.6kpdp0PIgna8W5Mw9ZvZ1gHaE8&pid=Api&P=0&h=180' }}
            style={styles.cartImage}
          />
          <Text style={styles.itemTitle}>BURGER</Text>
          <Text style={styles.itemRating}>⭐ 4.9 (3k+ Rating)</Text>
          <View style={styles.quantityContainer}>
            <Text>$28</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <Text style={styles.quantityBtn}>+</Text>
            </TouchableOpacity>
            <Text>{quantity < 10 ? `0${quantity}` : quantity}</Text>
            <TouchableOpacity onPress={() => quantity > 1 && setQuantity(quantity - 1)}>
              <Text style={styles.quantityBtn}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.details}>
          <Text>📍 Delivery Address{'\n'}Ba Dinh, Ha Noi <Text style={styles.changeBtn}>Change</Text></Text>
          <Text style={styles.payment}>💳 Payment Method <Text style={styles.changeBtn}>Change</Text></Text>
        </View>
        <View style={styles.summary}>
          <Text style={styles.sectionTitle}>Checkout Summary</Text>
          <Text>Subtotal (2) <Text style={styles.price}>$56</Text></Text>
          <Text>Delivery Fee <Text style={styles.price}>$6.20</Text></Text>
          <Text>Payable Total <Text style={styles.price}>$62.20</Text></Text>
          <TouchableOpacity style={styles.confirmBtn}>
            <Text style={styles.confirmText}>Confirm Order</Text>
          </TouchableOpacity>
        </View>
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
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  cartContent: { padding: 20, alignItems: 'center' },
  cartItem: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  cartImage: { width: '100%', height: 150, borderRadius: 10 },
  itemTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  itemRating: { marginVertical: 5 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  quantityBtn: { fontSize: 20, paddingHorizontal: 10 },
  details: { backgroundColor: '#fff', padding: 10, borderRadius: 10, width: '100%' },
  payment: { marginTop: 10 },
  changeBtn: { color: '#4a90e2' },
  summary: { backgroundColor: '#fff', padding: 20, borderRadius: 10, width: '100%', marginTop: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  price: { float: 'right' },
  confirmBtn: { backgroundColor: '#4a90e2', padding: 10, borderRadius: 20, marginTop: 10 },
  confirmText: { color: '#fff', textAlign: 'center' },
});