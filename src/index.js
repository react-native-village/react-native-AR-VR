/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import { ViroVRSceneNavigator, ViroARSceneNavigator } from 'react-viro'
// Sets the default scene you want for AR and VR
import InitialARScene from './viro/HelloWorldSceneAR'
import InitialVRScene from './viro/HelloWorldScene'

const styles = StyleSheet.create({
  viroContainer: {
    flex: 1,
    backgroundColor: 'black'
  },
  outer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color: '#fff',
    textAlign: 'center',
    fontSize: 25
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  },
  buttons: {
    height: 80,
    width: 150,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  }
})

/*
 TODO: Insert your API key below
 */
const sharedProps = {
  apiKey: 'API_KEY_HERE'
}

const UNSET = 'UNSET'
const VR_NAVIGATOR_TYPE = 'VR'
const AR_NAVIGATOR_TYPE = 'AR'

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
const defaultNavigatorType = UNSET

const ViroSample = () => {
  const [value, setValue] = useState({
    navigatorType: defaultNavigatorType,
    sharedProps
  })

  // This function "exits" Viro by setting the navigatorType to UNSET.
  const _exitViro = () => setValue({ navigatorType: UNSET })

  // Returns the ViroARSceneNavigator which will start the AR experience
  const _getARNavigator = () => <ViroARSceneNavigator {...value.sharedProps} initialScene={{ scene: InitialARScene }} />

  // Returns the ViroSceneNavigator which will start the VR experience
  const _getVRNavigator = () => (
    <ViroVRSceneNavigator {...value.sharedProps} initialScene={{ scene: InitialVRScene }} onExitViro={_exitViro} />
  )

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  const _getExperienceButtonOnPress = navigatorType => () => setValue({ navigatorType })

  // Presents the user with a choice of an AR or VR experience
  const _getExperienceSelector = () => {
    const { outer, inner, titleText, buttons, buttonText } = styles
    return (
      <View style={outer}>
        <View style={inner}>
          <Text style={titleText}>Choose your desired experience:</Text>

          <TouchableHighlight
            style={buttons}
            onPress={_getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
            underlayColor="#68a0ff"
          >
            <Text style={buttonText}>AR</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={buttons}
            onPress={_getExperienceButtonOnPress(VR_NAVIGATOR_TYPE)}
            underlayColor="#68a0ff"
          >
            <Text style={buttonText}>VR</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

  const { navigatorType } = value

  const mapNavType = {
    UNSET: _getExperienceSelector(),
    VR: _getVRNavigator(),
    AR: _getARNavigator()
  }

  return mapNavType[navigatorType]
}

export default ViroSample
