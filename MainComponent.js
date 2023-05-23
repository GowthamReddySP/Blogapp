import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainComponent = () => {
  const navigation = useNavigation();

  const handleBlogClick = () => {
    navigation.navigate('Blog');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/bg2.jfif')} style={styles.backgroundImage}>
        <View style={styles.topContainer}>
          <View style={styles.navbar}>
            <Text style={styles.navbarTitle}>Globomantics</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomRow}>
            <TouchableOpacity style={styles.bottomTextContainer} onPress={handleBlogClick}>
              <Text style={styles.bottomText}>Blog</Text>
            </TouchableOpacity>
            <Text style={styles.bottomText}>Quiz</Text>
          </View>
          <View style={styles.bottomRow}>
            <Text style={styles.bottomText}>Lessons</Text>
            <Text style={styles.bottomText}>Register</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  topContainer: {
    justifyContent: 'flex-start',
    flex: 1,
  },
  navbar: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 10,
  },
  navbarTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  bottomTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 18,
    color: 'white',
  },
});

export default MainComponent;
