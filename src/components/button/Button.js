import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

const Button = ({onPress,buttonText,type,bgColor,setHeight,setWidth}) => {
    const [isPressed, setIsPressed] = useState(false)

    const handlePressIn = () => {
        setIsPressed(true)
    }

    const handlePressOut = () => {
        setIsPressed(false)
    }

    const containerStyle = isPressed ? [styles.container, styles.containerPressed] : styles.container

    const containerWithBackgroundShifting=(type=='TERTIARY')?styles.containerWithoutBackground:containerStyle
    const textWithBackgroundShifting=(type=='TERTIARY')?styles.textWithoutBackground:styles.text
    return (
        <Pressable
            style={[containerWithBackgroundShifting,
                    bgColor ? (isPressed ? { backgroundColor: '#333' } : { backgroundColor: bgColor }) : {},  
                    setHeight ?{padding:setHeight}:{} , 
                    setWidth ?{width:setWidth}:{},  ]} 
                    
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={onPress}
        >
            <Text style={textWithBackgroundShifting}>{buttonText}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00043A',
        width: '68%',
        padding: 15,
        marginTop: 25,
        alignItems: 'center',
        borderRadius: 7
    },
    containerWithoutBackground: {
        
        width: '68%',
        padding: 15,
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 7
    },
    containerPressed: {
        backgroundColor: '#333'
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Arial'
    },
    textWithoutBackground: {
        fontWeight: 'bold',
        color: 'grey',
        fontFamily: 'Arial'
    }
})

export default Button