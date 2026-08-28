// Module ID: 10025
// Function ID: 10026
// Name: VoicePanelRiveMicButton
// Dependencies: [19, 17, 21, 4173, 9755, 10026, 2]
// Exports: VoicePanelRiveMicButton

// Module 10025 (VoicePanelRiveMicButton)
import noopAll from "noop" /* 19 */;
import ManaContext from "ManaContext" /* 4173 */;
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
    let MicrophoneIcon = tmp3(9755).MicrophoneSlashIcon;
  } else {
    MicrophoneIcon = tmp3(10026).MicrophoneIcon;
  }
  obj[2] = <MicrophoneIcon color={color} />;
  obj[1] = jsx(ManaContext.MicrophoneRive, { fill: color, on: !muted });
  return <View fill={color} on={!muted} />;
};
