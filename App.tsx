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

type RootStackParamList = {
  RobotList: undefined;
  RobotDetails: { robot: Object, onSubmit: Function };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="RobotList" component={RobotList} />
          <Stack.Screen name="RobotDetails" component={RobotDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
