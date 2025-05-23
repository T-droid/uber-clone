import { Stack, Tabs } from 'expo-router';
import { Image, ImageSourcePropType, View } from 'react-native';
import { icons } from '~/constants';
const TabIcon = ({ focused, source } : {
  focused: boolean,
  source: ImageSourcePropType
}) => {
  return (
    <View className={`flex flex-row justify-center items-center rounded-full ${focused ? "bg-[#333]" : ""}`}>
      <View className={`rounded-full w-12 h-12 items-center justify-center ${focused ? "bg-general-400" : ""}`}>
        <Image
        source={source}
        tintColor="white"
        resizeMode='contain'
        className='w-7 h-7'
        />
      </View>
    </View>
  )
}
const Layout = () => {
  return (
    <Tabs
    initialRouteName='home'
    screenOptions={{
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: "white",
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#333",
        borderRadius: 50,
        overflow: 'hidden',
        marginHorizontal: 20,
        marginBottom: 20,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
      }
    }}
    >
      <Tabs.Screen
      name='home'
      options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.home} />
      }}
      />
      <Tabs.Screen
      name='rides'
      options={{
        title: 'Rides',
        headerShown: false,
        tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.list} />
      }}
      />
      <Tabs.Screen
      name='chat'
      options={{
        title: 'Chat',
        headerShown: false,
        tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.chat} />
      }}
      />
      <Tabs.Screen
      name='profile'
      options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.profile} />
      }}
      />
    </Tabs>
  )
}

export default Layout;