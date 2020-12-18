import "react-native-gesture-handler";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RobotList from "./src/components/RobotList";
import RobotDetails from "./src/components/RobotDetails";
const client = new ApolloClient({
    uri: "https://hasura.dev.cryptuoso.com/v1/graphql",
    cache: new InMemoryCache(),
});
const Stack = createStackNavigator();
export default function App() {
    return (React.createElement(ApolloProvider, { client: client },
        React.createElement(NavigationContainer, null,
            React.createElement(Stack.Navigator, { screenOptions: {
                    headerShown: false,
                } },
                React.createElement(Stack.Screen, { name: "RobotList", component: RobotList }),
                React.createElement(Stack.Screen, { name: "RobotDetails", component: RobotDetails })))));
}