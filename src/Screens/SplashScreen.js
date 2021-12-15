import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import styled from 'styled-components';

const DATA = [
  {
    id: "ChooseData",
    title: "Characters",
  },
  // {
  //   id: "Locations",
  //   title: "Locations",
  // },
  {
    id: "Artefacts",
    title: "Artefacts",
  },
  {
    id: "Battles",
    title: "Battles",
  },
  {
    id: "RandomCharacter",
    title: "Random Character",
  },
];



const App = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={() => navigation.navigate(item.id)} style={[styles.item, backgroundColor]}>
          <Text style={[styles.title, textColor]}>{item.title}</Text>
        </TouchableOpacity>
      );
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#5788a8";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <>
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
            <Space />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const Space = styled.View`
  flex: 1;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: StatusBar.currentHeight || 0,
  },
  Space: {
    flex: 1,
  },
  item: {
    padding: 20,
    borderRadius: 35,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;