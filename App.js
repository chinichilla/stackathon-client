import React, { Component } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import PostScreen from './screens/PostScreen';
import MapScreen from './screens/MapScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPoster: false,
      isViewer: false,
    };
  }

  render() {
    if (this.state.isPoster) {
      return <PostScreen />;
    }
    if (this.state.isViewer) {
      return <MapScreen />;
    }

    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.setState({ isPoster: true })}
          title="Post"
        />
        <Button onPress={() => this.setState({ isViewer: true })} title="Map" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
