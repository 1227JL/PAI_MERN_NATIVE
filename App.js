import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider, extendTheme } from "native-base";
import Login from "./views/Login";

const theme = extendTheme({
  colors: {
    "primary-100": "#4ce060",
    "primary-200": "#46d459",
    "middle-100": "#fabb05",
    "more-100": "#593fffd6",
    "more-200": "#593fff",
    "black-100": "#333333",
    "black-200": "#5c5c5c",
    "black-300": "#b3b3b3",
    "white-200": "#f2f2f2",
    "white-300": "#e5e5e5",
  },
  boxShadow: {
    "100": "0px 13px 27px -5px rgba(50, 50, 93, 0.25), 0px 8px 16px -8px rgba(0, 0, 0, 0.3)",
    "200": "0px 3px 8px rgba(0, 0, 0, 0.24)",
  },
  breakpoints: {
    base: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280,
  },
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
            <Stack.Navigator>
              <Stack.Group>
                {/* Auth Layout */}
                <Stack.Screen name="login" options={{ headerShown: false }}>
                  {(props) => (
                    // <AuthLayout>
                      <Login {...props} />
                    // </AuthLayout>
                  )}
                </Stack.Screen>
              </Stack.Group>
            </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
