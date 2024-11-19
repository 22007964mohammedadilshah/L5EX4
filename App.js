import React from 'react';
import { Text, View, SectionList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const bookData = [
  {
    title: "Science Fiction",
    color: "skyblue",
    icon: "planet-outline",
    data: [
      { name: "Dune", author: "Frank Herbert", imageUrl: require('./img/dune.jpg') },
      { name: "Ender's Game", author: "Orson Scott Card", imageUrl: require('./img/enders_game.jpg') },
    ],
  },
  {
    title: "Mystery & Thriller",
    color: "lightcoral",
    icon: "search-outline",
    data: [
      { name: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", imageUrl: require('./img/dragon_tattoo.jpg') },
      { name: "Gone Girl", author: "Gillian Flynn", imageUrl: require('./img/gone_girl.jpg') },
    ],
  },
];


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  sectionIcon: {
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  itemSubtitle: {
    fontSize: 16,
    color: 'grey',
  },
  image: {
    width: 70,
    height: 100,
    borderRadius: 5,
  },
});

const renderItem = ({ item }) => {
  return (
      <TouchableOpacity style={styles.item}>
        <Image source={item.imageUrl} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text style={styles.itemSubtitle}>{item.author}</Text>
        </View>
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View style={styles.container}>
        <SectionList
            sections={bookData}
            keyExtractor={(item, index) => item.name + index}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, color, icon } }) => (
                <View style={[styles.sectionHeader, { backgroundColor: color }]}>
                  <Ionicons name={icon} size={24} color="black" style={styles.sectionIcon} />
                  <Text style={styles.sectionTitle}>{title}</Text>
                </View>
            )}
        />
      </View>
  );
};

export default App;
