import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import { View } from "react-native/types_generated/index";

export function GameCard({ 
    imageUrl,
    style,
    title,
    description,
}) {
  return (
    <View>
        <Image source={imageUrl}/>
        <Text>{title}</Text>
        <Text>{description}</Text>
    </View>
  );
}