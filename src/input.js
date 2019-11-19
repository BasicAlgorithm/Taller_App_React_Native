import React from 'react';

import {
    Text,
    TextInput,
    View,
} from 'react-native';


function Input(props) {
    return (
        <View style={{
            marginVertical: 10,
        }}>
            <Text>{props.label}</Text>
            <TextInput {...props}
            keyboardType='decimal-pad'
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    padding: 10,
                    marginTop: 5,
                }}
            />
        </View>

    );
}

Input.defaultProps = {
    style: {},
}

export default Input;
