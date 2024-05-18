import { View, Text ,TextInput, StyleSheet} from 'react-native'
import React, { useState } from 'react'

const CustomInput = ({placeholder,value,setValue,securetextentry}) => {
    const [isFocused, setIsFocused] = useState(true);

    const handleFocus = () => {
        setIsFocused(false);
    }

    const handleBlur = () => {
        setIsFocused(true);
    }

    return (
        <View style={[styles.container, isFocused ? styles.focusedContainer : null]}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                onFocus={handleFocus}
                onBlur={handleBlur}
                secureTextEntry={securetextentry}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        width:'95%',
        height: 50,
        justifyContent: 'center',
        borderColor:'#1c6ea46b',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:20,
        marginVertical:10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    focusedContainer: {
        shadowColor: 'transparent',
        elevation: 0,
    },
    input:{
        fontFamily: 'Arial', // Add suitable font family for the input
    }
})

export default CustomInput