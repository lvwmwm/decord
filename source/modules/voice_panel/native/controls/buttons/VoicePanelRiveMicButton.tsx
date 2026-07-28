// Module ID: 10774
// Function ID: 83542
// Name: VoicePanelRiveMicButton
// Dependencies: [31, 27, 33, 3877, 8845, 10775, 2]
// Exports: VoicePanelRiveMicButton

// Module 10774 (VoicePanelRiveMicButton)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx");

export const VoicePanelRiveMicButton = function VoicePanelRiveMicButton(arg0) {
  let color;
  let muted;
  ({ color, muted } = arg0);
  let obj = { style: { width: 24, height: 24, pointerEvents: "none" } };
  obj = { dataBinding: obj };
  obj = { fill: color, on: !muted };
  let str = "On";
  if (muted) {
    str = "Off";
  }
  obj.defaultViewModelInstance = str;
  if (muted) {
    let MicrophoneIcon = tmp4(8845).MicrophoneSlashIcon;
  } else {
    MicrophoneIcon = tmp4(10775).MicrophoneIcon;
  }
  obj.fallback = <MicrophoneIcon color={color} />;
  obj.children = jsx(require(3877) /* ManaContext */.MicrophoneRive, { fill: color, on: !muted });
  return <View fill={color} on={!muted} />;
};
