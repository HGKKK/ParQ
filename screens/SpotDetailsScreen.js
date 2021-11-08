import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import SpotDetailsTable from '../components/SpotDetailsTable'

const SpotDetailsScreen = ({navigation}) => (
    <View style={styles.container}>          
      <SpotDetailsTable navigation={navigation} />
    </View>
  )
  
  // function SpotDetailsScreen({ navigation }) {
  //   return (
  //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //       <Text>SpotDetailsScreen</Text>
  //       <Button
  //         title="Go to Details... again"
  //         onPress={() => navigation.navigate('SpotDetailsScreen')}
  //       />
  //     </View>
  //   );
  // }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: 50,
      paddingHorizontal: 12,
    }
    
  });
  
  export default SpotDetailsScreen
  