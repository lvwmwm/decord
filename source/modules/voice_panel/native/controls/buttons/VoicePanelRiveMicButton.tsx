// Module ID: 10004
// Function ID: 10005
// Name: VoicePanelRiveMicButton
// Dependencies: [19, 17, 21, 4271, 9127, 10005, 2]
// Exports: VoicePanelRiveMicButton

// Module 10004 (VoicePanelRiveMicButton)
import noopAll from "noop" /* 19 */;
import ManaContext from "ManaContext" /* 4271 */;
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
    let MicrophoneIcon = tmp3(9127).MicrophoneSlashIcon;
  } else {
    MicrophoneIcon = tmp3(10005).MicrophoneIcon;
  }
  obj[2] = <MicrophoneIcon color={color} />;
  obj[1] = jsx(ManaContext.MicrophoneRive, { fill: color, on: !muted });
  return <View fill={color} on={!muted} />;
};
