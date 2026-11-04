import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import {Picker} from '@react-native-picker/picker';

//Create custom component InputBox for TextInputs with Labels
const InputBox = ({label, onChangeText}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText}/>
        </View>
    );
};

const MyApp = () => {
    // Declare variables
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('Admin');

    return (
        <View>

            {/* Ex1B: Add a Picker that is labelled "User Type:" with 2 options Admin and Guest. */}
            <Text>User Type:</Text>
            <Picker selectedValue={type}
                    onValueChange={(value) => setType(value)}
                    style={{backgroundColor:'grey'}}>
                <Picker.Item label='Admin' value='Admin'/>
                <Picker.Item label='Guest' value='Guest'/>
            </Picker>

            {/* Ex1G: Create a TextInput labelled as "User Name". (uses InputBox) */}
            <InputBox label="User Name:" onChangeText={(text) => setName(text)}/>

            {/* Ex1A:  Display the text "Password:" with a simple TextInput underneath (uses InputBox) */}
            <InputBox label="Password:" onChangeText={(text) => setPw(text)}/>

            {/* Ex1C: Add a Button with the title "LOG IN".   */}
            {/* Ex1D: Display Alert message "Welcome!" when the LOG IN button pressed. */}
            <Button onPress={()=>{ Alert.alert('Welcome!') }} title='LOG IN'/>

            <Text></Text>

            {/* Ex1E: Add TouchableOpacity labelled as "Alternative LOG IN" with Alert message "Hi hi!" */}
            {/* Ex1F: change Alert message to Toast message */}
            {/* Ex1G: Toast shows User Type and User Name */}
            {/* JavaScript slides: check if the password is correct ("123") */}
            <TouchableOpacity onPress={()=>{
                const correctPassword = '123';
                let message = 'Error! Wrong Password!';
                if (pw == correctPassword) {
                    message = 'Welcome ' + type + ' ' + name;
                }
                ToastAndroid.show(message, ToastAndroid.SHORT);
            }}>
                <Text>I'm Pressable!</Text>
            </TouchableOpacity>

            {/* State slides: show the password as you type */}
            <Text>Entered Password: {pw}</Text>
        </View>
    );
};

export default MyApp;