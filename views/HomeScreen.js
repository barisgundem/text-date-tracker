import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Swipeout from 'react-native-swipeout';
import PropTypes from 'prop-types';



const HomeScreen = ({ navigation }) => {
  const [textList, setTextList] = useState([]);

  const handleAddText = (text) => {
    setTextList([...textList, text]);
  };

  const handleDelete = (index) => {
    const updatedList = [...textList];
    updatedList.splice(index, 1);
    setTextList(updatedList);
  };

  const handleEdit = (index, newText) => {
    const updatedList = [...textList];
    updatedList[index] = newText;
    setTextList(updatedList);
  };
  const handleEditItem = (index, newText) => {
    const updatedList = [...textList];
    updatedList[index] = newText;
    setTextList(updatedList);
  };
  const handleClearAll = () => {
    setTextList([]);
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.listTitle}>TEXT & DATE TRACKER</Text>
      <Button
        title="Add Item"
        onPress={() => navigation.navigate('AddText', { handleAddText })}
      />
      <Button title="Clear All Items" onPress={handleClearAll} color="red" />
      <Text style={styles.itemCountText}>
  Total Items: {textList.length}
</Text>
      <FlatList
        data={textList}

        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Swipeout
            right={[
              {
                text: 'Delete',
                backgroundColor: 'red',
                onPress: () => handleDelete(index),
              },
            ]}
          >
            <TouchableOpacity style={{backgroundColor: '#fff'}}
              onPress={() => {
                navigation.navigate('EditItem', {
                  index,
                  item: item.text,
                  handleEdit: handleEditItem,
                  date: item.date,
                  
                });
              }}
            >
            <Text style={styles.textItem}>{item.text} - {item.date ? `Date: ${item.date.toDateString()}` : 'No Date'}</Text>               

            </TouchableOpacity>
          </Swipeout>
        )}
      />
    </View>
  );
};

HomeScreen.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  noItemsText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  listTitle: {
    margin: '2%',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  textItem: {
    marginLeft: "2%",
    fontSize: 18,
    marginVertical: 5,
  },
});

export default HomeScreen;
