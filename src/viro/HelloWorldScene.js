import React from 'react'
import { StyleSheet } from 'react-native'
import { ViroScene, ViroText, Viro360Image } from 'react-viro'

const styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center'
  }
})

const HelloWorldScene = () => {
  const { helloWorldTextStyle } = styles
  return (
    <ViroScene>
      <Viro360Image source={require('./res/guadalupe_360.jpg')} />
      <ViroText text="Hello World!" width={2} height={2} position={[0, 0, -2]} style={helloWorldTextStyle} />
    </ViroScene>
  )
}

export default HelloWorldScene
