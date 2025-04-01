import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#f5f5f5' }]}>
      <View style={styles.header}>
        <Text>←</Text>
        <Text style={styles.headerTitle}>Profile</Text>
        <Text>9:00</Text>
      </View>
      <View style={styles.profileContent}>
        <Image
          source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/17/32/f6/be/beef-burgur.jpg' }}
          style={styles.avatar}
        />
        <Text style={[styles.name, { color: isDarkMode ? '#fff' : '#000' }]}>Vu Duong</Text>
        <Text style={[styles.email, { color: isDarkMode ? '#ccc' : '#888' }]}>gumb5000@gmail.com</Text>
        <View style={styles.menuItem}>
          <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>🏠 Home</Text>
          <Text>→</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>💳 My Card</Text>
          <Text>→</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>🌙 Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={(value) => setIsDarkMode(value)}
          />
        </View>
        <View style={styles.menuItem}>
          <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>📦 Track Your Order</Text>
          <Text>→</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>⚙️ Settings</Text>
          <Text>→</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>❓ Help Center</Text>
          <Text>→</Text>
        </View>
        <TouchableOpacity style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Log Out ➔</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
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
  profileContent: { padding: 20, alignItems: 'center' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  name: { fontSize: 18, fontWeight: 'bold' },
  email: { color: '#888', marginBottom: 20 },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    width: '100%',
  },
  logoutBtn: { backgroundColor: '#4a90e2', padding: 10, borderRadius: 20, marginTop: 20, width: '100%' },
  logoutText: { color: '#fff', textAlign: 'center' },
});