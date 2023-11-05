// EditItemScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const EditItemScreen = ({ route, navigation }) => {
  const { index, item, handleEdit } = route.params;
  const [editedText, setEditedText] = useState(item.text);
  const [editedDate, setEditedDate] = useState(item.date || new Date());
  const [showDatePicker, setShowDatePicker] = useState(false); 

  const handleSave = () => {
    const newItem = {
      text: editedText,
      date: editedDate, 
    };
    handleEdit(index, newItem);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Edit Item Text:</Text>
      <TextInput
        style={styles.input}
        value={editedText}
        onChangeText={(text) => setEditedText(text)}
      />

    <Button title="Edit Date" onPress={() => setShowDatePicker(true)} />

    {showDatePicker && (
      <DateTimePicker
        value={editedDate}
        mode="date"
        is24Hour={true}
        display="default"
        onChange={(event, selectedDate) => setEditedDate(selectedDate) & setShowDatePicker(false)}
      />
    )}
        

      <Button title="Save" onPress={handleSave} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    fontSize: 18,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default EditItemScreen;
