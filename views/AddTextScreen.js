// AddTextScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddTextScreen = ({ route, navigation }) => {
  const { handleAddText } = route.params;
  const [text, setText] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false); // Control date picker visibility

  const handleAdd = () => {
    const newItem = { text, date: selectedDate };
    handleAddText(newItem);
    navigation.goBack();
  };

  const handleDateChange = (event, selectedDate) => {
    if (event.type === 'set') {
      setSelectedDate(selectedDate);
      setShowDatePicker(false);
    } else {
      setShowDatePicker(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text"
        value={text}
        onChangeText={(newText) => setText(newText)}
      />

      <Button title="Pick Date" onPress={() => setShowDatePicker(true)} />

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}

      <Button title="Add" onPress={handleAdd} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    fontSize: 18,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default AddTextScreen;
