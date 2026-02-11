import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function StudentScreen() {
  let firstName = "Rijad";
  let surname = "Karadža";
  const birthday = "2007-05-14";
  const school = "High School of Information Technology";

  let fullName = firstName + " " + surname;

  const hobbies = [
    { id: '1', name: 'Programming' },
    { id: '2', name: 'Gaming' },
    { id: '3', name: 'Gym' },
    { id: '4', name: 'Music' },
    { id: '5', name: 'Football' },
  ];

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Student Profile</Text>

      <View style={styles.card}>
        <Text style={styles.text}>Full Name: {fullName}</Text>
        <Text style={styles.text}>Birthday: {birthday}</Text>
        <Text style={styles.text}>School: {school}</Text>
      </View>

      <Text style={styles.subtitle}>Hobbies</Text>

      <FlatList
        data={hobbies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.hobbyItem}>
            <Text style={styles.hobbyText}>• {item.name}</Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    marginBottom: 6,
  },
  hobbyItem: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  hobbyText: {
    fontSize: 16,
  },
});
