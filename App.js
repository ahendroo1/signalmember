import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet , 
  ScrollView, 
  StatusBar, 
  TextInput, 
  Image,
  ImageBackground,

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ListItem, Input, Button } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

const backColor = '#e2c275';
const vColor = '#eadca6';

const list = [
  {
    name: 'AUDUSD',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: '03/13/2020 11:22 AM'
  },
  {
    name: 'GBPUSD',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '03/13/2020 10:25 AM'
  },
  {
    name: 'AUDUSD',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: '03/13/2020 11:22 AM'
  },
  {
    name: 'GBPUSD',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '03/13/2020 10:25 AM'
  },
  {
    name: 'AUDUSD',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: '03/13/2020 11:22 AM'
  },
  {
    name: 'GBPUSD',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '03/13/2020 10:25 AM'
  },
  {
    name: 'AUDUSD',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: '03/13/2020 11:22 AM'
  },
  {
    name: 'GBPUSD',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '03/13/2020 10:25 AM'
  },
  {
    name: 'AUDUSD',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: '03/13/2020 11:22 AM'
  },
  {
    name: 'GBPUSD',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '03/13/2020 10:25 AM'
  },
  {
    name: 'AUDUSD',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: '03/13/2020 11:22 AM'
  },
  {
    name: 'GBPUSD',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '03/13/2020 10:25 AM'
  },
  {
    name: 'AUDUSD',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: '03/13/2020 11:22 AM'
  },
  {
    name: 'GBPUSD',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: '03/13/2020 10:25 AM'
  },
]


function DetailsSignal() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: vColor, }}>
      <Text>Details! -</Text>
    </View>
  );
}


function DetailsProfile() {

  return (
    <View>

    </View>
   
  );
}

  const list_profile = [
    {
      title: 'Profile',
      icon: 'av-timer'
    },
    {
      title: 'Account Access',
      icon: 'flight-takeoff'
    },
      // more items
  ]

function ProfileScreen({ navigation }) {
  return (
   
     <View>
        {
          list_profile.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
              bottomDivider
              chevron
              onPress={() => navigation.navigate('DetailsProfile')}
            />
          ))
        }
      </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View>
      
      <ScrollView>
          {
          list.map((l, i) => (
            <ListItem
              onPress={() => navigation.navigate('DetailsSignal')}
              key={i}
              // leftAvatar={{ source: { uri: l.avatar_url } }}
              linearGradientProps={{
                colors: '#000',
              }}
              title={l.name}
              subtitle={l.subtitle}
              containerStyle={{
                backgroundColor: vColor,
              }}
              bottomDivider
              
            />
          ))
        }

      </ScrollView>
    </View>
  );
}


// 
// 
// 
// STACK NAVIGATORS
// 
// 
// 

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen}
      options={{
            headerTitle: (
                <Image style={{width:50, height:50}} source={require('./src/img/tiny_logo.png')}/>
            ),
            title: 'Signals',
            headerStyle: {
              backgroundColor: backColor,
              height:70,
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              height:90
            },
        }}
      />
      <HomeStack.Screen 
      
        name="DetailsSignal" 
        component={DetailsSignal} 
        options={{
            title: 'AUDUSD',
            headerStyle: {
              backgroundColor: backColor,
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        }}
        
        />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Profile" component={ProfileScreen}  
        options={{
            title: 'Setting',
            headerStyle: {
              backgroundColor: backColor,
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        }}
      /> 
      <SettingsStack.Screen 
        name="DetailsProfile" 
        component={DetailsProfile}
        options={{
            title: 'Profile or Account Access',
            headerStyle: {
              backgroundColor: backColor,
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        }}
        
         />
    </SettingsStack.Navigator>
  );
}

// 
// 
// 
// END STACK NAVIGATORS
// 
// 
// 


const Tab = createBottomTabNavigator();

function App() {
  return (

    <NavigationContainer>
      <StatusBar backgroundColor={backColor} barStyle="dark-content" />
       <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Signals') {
              iconName = focused
              
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';

            } else if (route.name === 'Setting') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            // return <Ionicons name={iconName} size={size} color={color} />;
            return <Text>I</Text>;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: backColor ,
          style:{
            backgroundColor: backColor,
          }
        }}
      >
      <Tab.Screen 
        name="Home" 
        component={HomeStackScreen} 
        options={{
            title: 'Signals',
            headerStyle: {
              backgroundColor: backColor,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        }} 
      />
      <Tab.Screen name="Profile" component={ProfileStackScreen} options={{
            title: 'Setting',
            headerStyle: {
              backgroundColor: backColor,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        }}  />
        
      </Tab.Navigator>
    
    </NavigationContainer>
    
  );
}

function LoginScreen() {
  return (
    <ImageBackground 
      source={require('./src/img/bg-login.jpg')} 
      style={{ 
        flex: 1, 
        justifyContent: 'center',  
        opacity: 1
      }}>

      <View style={{

            paddingTop:40,
            paddingHorizontal:10,
            paddingVertical:90,
            backgroundColor: 'transparent',
            
          }}>

          
          <View style={{ justifyContent: 'center', alignItems:'center', paddingBottom:30}}>
            <Image
            style={{width: 80, height: 80,}}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
            
          </View>

        <TextInput 
          style={styles.inputLogin}
          placeholder='Email'
          // rightIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        />
        <TextInput
          style={styles.inputLogin}
          placeholder='Password'
          password={true}
          // rightIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        />
        <View style={{
              paddingTop:30,
              paddingHorizontal:10
            }}>
            
          <Button
            buttonStyle={styles.loginButton}
            title="Login"
          />
        </View>
      </View>

      
    </ImageBackground>
  );
}

const LoginStack = createStackNavigator();
function appLogin() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator>
        <LoginStack.Screen name="Login" component={LoginScreen} options={{
            headerShown: false,
        }} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  item: {
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
  },
  inputLogin: {
    height:45,
    borderRadius:15,
    fontSize:16,
    backgroundColor: vColor,
    color:'black',
    marginTop:10,
    paddingHorizontal:20,
    opacity:0.7
  },
  loginButton:{
    backgroundColor: backColor,
  }
  
});



export default App;
