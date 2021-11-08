<<<<<<< HEAD
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Button } from 'react-native'
import SafeViewAndroid from '../components/SafeViewAndroid';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';
import { firebase } from '../firebase'
=======
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import SafeViewAndroid from "../components/SafeViewAndroid";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";
import { firebase } from "../firebase";
// keyboard avoiding view
import KeyboardAvoidingWrapper from "./../components/KeyboardAvoidingWrapper";
>>>>>>> b751b7fa589062ec5f067e1ed1a14219b346e9de

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleSignout = async () => {
    try {
      await firebase
        .auth()
        .signOut()
        .then(() => console.log("Signed Out"));
      console.log("Signed out successfully!");
    } catch (error) {
      console.log(error);
    }
<<<<<<< HEAD
  }
  // function HomeScreen({ navigation }) {
  //   return (
  //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //       <Text>Home Screen</Text>
  //       <Button
  //         title="Go to Details"
  //         onPress={() => navigation.navigate('SpotDetailsScreen')}
  //       />
  //     </View>
  //   );
  // }
  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeAreaTop, tw`bg-white h-full`]}>
      {/* <View>
      <Button 
        title="Go to Spot Details"
        onPress={
          ()=> this.props.navigation.navigate('SpotDetailsScreen')
        }/>
      </View> */}      
      <View style={tw`p-5`}>        
        <Image 
          style={{
            width: 100, height: 100, resizeMode: "contain"
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

      <TouchableOpacity onPress={handleSignout} style={{height: 100, width: 100, backgroundColor: "black"}}>
        <Image
          style={styles.logo}
          source={{ uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/sent.png" }}
        />
      </TouchableOpacity>
=======
  };

  return (
    <SafeAreaView
      style={[SafeViewAndroid.AndroidSafeAreaTop, tw`bg-white h-full`]}
    >
      <View style={tw`p-5`}>
        <TouchableOpacity
          onPress={handleSignout}
          style={{ height: 150, width: 150, marginBottom: 20 }}
        >
          <Image
            style={{
              width: 150,
              height: 150,
              resizeMode: "contain",
            }}
            source={require("../assets/logo.png")}
          />
        </TouchableOpacity>
>>>>>>> b751b7fa589062ec5f067e1ed1a14219b346e9de

        {/* <GooglePlacesAutocomplete
          placeholder="Where from?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }));

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en"
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        /> */}

        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
