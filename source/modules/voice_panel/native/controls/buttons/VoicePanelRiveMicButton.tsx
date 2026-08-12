// Module ID: 10929
// Function ID: 10930
// Name: VoicePanelRiveMicButton
// Dependencies: [19, 17, 21, 4072, 9232, 10930, 2]
// Exports: VoicePanelRiveMicButton

// Module 10929 (VoicePanelRiveMicButton)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx");

export const VoicePanelRiveMicButton = function VoicePanelRiveMicButton(arg0) {
  let color;
  let muted;
  ({ color, muted } = arg0);
  let obj = { style: { width: 24, height: 24, pointerEvents: "none" }, children: null };
  obj = { dataBinding: obj, defaultViewModelInstance: null, fallback: null };
  obj = { fill: color, on: !muted };
  let str = "On";
  if (muted) {
    str = "Off";
  }
  obj[1] = str;
  if (muted) {
    let MicrophoneIcon = tmp3(9232).MicrophoneSlashIcon;
  } else {
    MicrophoneIcon = tmp3(10930).MicrophoneIcon;
  }
  obj[2] = <MicrophoneIcon color={color} />;
  obj[1] = jsx(require(4072) /* ManaContext */.MicrophoneRive, { fill: color, on: !muted });
  return <View fill={color} on={!muted} />;
};
