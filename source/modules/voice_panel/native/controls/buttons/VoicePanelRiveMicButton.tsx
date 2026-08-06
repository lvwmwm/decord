// Module ID: 10792
// Function ID: 10793
// Name: VoicePanelRiveMicButton
// Dependencies: [19, 17, 21, 3996, 9109, 10793, 2]
// Exports: VoicePanelRiveMicButton

// Module 10792 (VoicePanelRiveMicButton)
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
    let MicrophoneIcon = tmp3(9109).MicrophoneSlashIcon;
  } else {
    MicrophoneIcon = tmp3(10793).MicrophoneIcon;
  }
  obj[2] = <MicrophoneIcon color={color} />;
  obj[1] = jsx(require(3996) /* ManaContext */.MicrophoneRive, { fill: color, on: !muted });
  return <View fill={color} on={!muted} />;
};
