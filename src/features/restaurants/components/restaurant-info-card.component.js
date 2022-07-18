/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Annas Restaurant",
        icon,
        photos = ["https://d3aux7tjp119y2.cloudfront.net/original_images/Tak2-CMSTemplate_IrMZHla.jpg"],
        address = "100 some random street",
        isOpenNow = true,
        rating = 5,
        isClosedTemporarily,
    } = restaurant;
    return (
        <RestaurantCard elevation={5}>
        <RestaurantCardCover key = {name} source={{ uri: photos[0] }} />
        <Title>{name}</Title>
        </RestaurantCard>
    );
};
