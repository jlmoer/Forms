import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Switch, TouchableOpacity } from 'react-native';

export default function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  }

  const handleSubmit = () => {

  }

  return (
    <SafeAreaView>
      <View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 40,
          }}
        >
          Home
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            width: 200,
            padding: 5,
            borderRadius: 5,
            borderColor: "lightgrey",
            textAlign: "center",
            marginLeft: 80,
            marginTop: 30,
          }}
          placeholder="Your email..."
        />
        <TextInput
          style={{
            borderWidth: 1,
            width: 200,
            padding: 5,
            borderRadius: 5,
            borderColor: "lightgrey",
            textAlign: "center",
            marginLeft: 80,
            marginTop: 10,
          }}
          placeholder="Your password..."
          secureTextEntry
        />
        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            marginLeft: 160,
            marginTop: 30,
          }}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
