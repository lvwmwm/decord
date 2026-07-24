// Module ID: 10763
// Function ID: 83674
// Name: VoicePanelRiveMicButton
// Dependencies: [31, 27, 33, 3842, 8913, 10764, 2]
// Exports: VoicePanelRiveMicButton

// Module 10763 (VoicePanelRiveMicButton)
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
    let MicrophoneIcon = tmp4(8913).MicrophoneSlashIcon;
  } else {
    MicrophoneIcon = tmp4(10764).MicrophoneIcon;
  }
  obj.fallback = <MicrophoneIcon color={color} />;
  obj.children = jsx(require(3842) /* ManaContext */.MicrophoneRive, { fill: color, on: !muted });
  return <View fill={color} on={!muted} />;
};
