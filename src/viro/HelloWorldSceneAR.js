import React, { Component } from 'react'
import { ViroARScene, ViroText, ViroConstants } from 'react-viro'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: 'gold',
    textAlignVertical: 'center',
    textAlign: 'center'
  }
})

class HelloWorldSceneAR extends Component {
  constructor() {
    super()
    this.state = {
      text: 'Initializing AR...'
    }
  }

  _onInitialized = state => {
    if (state === ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: '@playra'
      })
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroText
          text={this.state.text}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        />
      </ViroARScene>
    )
  }
}

export default HelloWorldSceneAR
