import React from 'react';
import { View } from 'react-native';

const ProgressButtons = props => (
  <View style={{ flexDirection: 'row', marginTop: 90, ...props.progressButtonStyle }}>
    <View style={{ position: 'absolute', left: 60, bottom: 40, ...props.prevButtonPosition }}>
      {props.renderPreviousButton()}
    </View>
    <View style={{ position: 'absolute', right: 60, bottom: 40, ...props.nextButtonPosition }}>
      {props.renderNextButton()}
    </View>
  </View>
);

export default ProgressButtons;
