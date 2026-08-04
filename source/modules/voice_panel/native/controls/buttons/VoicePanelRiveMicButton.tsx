// Module ID: 10765
// Function ID: 10766
// Name: VoicePanelRiveMicButton
// Dependencies: [19, 17, 21, 3997, 9108, 10766, 2]
// Exports: VoicePanelRiveMicButton

// Module 10765 (VoicePanelRiveMicButton)
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
    let MicrophoneIcon = tmp3(9108).MicrophoneSlashIcon;
  } else {
    MicrophoneIcon = tmp3(10766).MicrophoneIcon;
  }
  obj[2] = <MicrophoneIcon color={color} />;
  obj[1] = jsx(require(3997) /* ManaContext */.MicrophoneRive, { fill: color, on: !muted });
  return <View fill={color} on={!muted} />;
};
