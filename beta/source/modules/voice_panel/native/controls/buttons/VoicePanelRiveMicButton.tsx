// Module ID: 9464
// Function ID: 9465
// Name: VoicePanelRiveMicButton
// Dependencies: [19, 17, 21, 4636, 9140, 9465, 2]
// Exports: VoicePanelRiveMicButton

// Module 9464 (VoicePanelRiveMicButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import MicrophoneRive2 from "MicrophoneRive" /* 4636 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx");

export const VoicePanelRiveMicButton = function VoicePanelRiveMicButton(arg0) {
  let color;
  let muted;
  ({ color, muted } = arg0);
  let str = "On";
  const MicrophoneRive = MicrophoneRive2.MicrophoneRive;
  if (muted) {
    str = "Off";
  }
  if (muted) {
    let MicrophoneIcon = tmp3(9140).MicrophoneSlashIcon;
  } else {
    MicrophoneIcon = tmp3(9465).MicrophoneIcon;
  }
  return <tmp2 style={{ width: 24, height: 24, pointerEvents: "none" }}>{null}</tmp2>;
};
