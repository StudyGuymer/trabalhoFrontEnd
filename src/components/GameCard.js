import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export function GameCard({ 
    onPress,
    imageUrl,
    style,
    title,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <Image source={imageUrl}/>
        <View>
            <Text>{title}</Text>
        </View>
    </TouchableOpacity>
  );
}