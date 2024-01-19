import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Dog } from "./screens/Dog";
import { Cat } from "./screens/Cat";
import { DogIcon } from "./icons/DogIcon";
import { CatIcon } from "./icons/CatIcon";
import { createStackNavigator } from "@react-navigation/stack";
import { InfoScreen } from "./screens/InfoScreen";
import { Piano } from "./screens/piano";
import { PianoIcon } from "./icons/PianoIcon";
// import { createDrawerNavigator } from "@react-navigation/drawer";

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
// const Drawer = createDrawerNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Dog"
        component={Dog}
        options={{
          tabBarIcon: ({ color }) => <DogIcon color={color} />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Cat"
        component={Cat}
        options={{
          tabBarIcon: ({ color }) => <CatIcon color={color} />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Piano"
        component={Piano}
        options={{
          tabBarIcon: ({ color }) => <PianoIcon color={color} />,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Tabs} />
        <HomeStack.Screen name="InfoScreen" component={InfoScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name="Home" component={Tabs} />
    //     <Drawer.Screen name="InfoScreen" component={InfoScreen} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
  );
}
