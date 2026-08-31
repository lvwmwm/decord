// Module ID: 10048
// Function ID: 10049
// Name: VoicePanelRiveMicButton
// Dependencies: [19, 17, 21, 4174, 9777, 10049, 2]
// Exports: VoicePanelRiveMicButton

// Module 10048 (VoicePanelRiveMicButton)
import noopAll from "noop" /* 19 */;
import ManaContext from "ManaContext" /* 4174 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx");

export const VoicePanelRiveMicButton = function VoicePanelRiveMicButton(arg0) {
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
    let MicrophoneIcon = tmp3(9777).MicrophoneSlashIcon;
  } else {
    MicrophoneIcon = tmp3(10049).MicrophoneIcon;
  }
  obj[2] = <MicrophoneIcon color={color} />;
  obj[1] = jsx(ManaContext.MicrophoneRive, { fill: color, on: !muted });
  return <View fill={color} on={!muted} />;
};
