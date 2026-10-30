// Module ID: 11932
// Function ID: 11933
// Name: VoicePanelRiveMicButton
// Dependencies: [19, 17, 21, 5166, 9223, 11933, 2]
// Exports: VoicePanelRiveMicButton

// Module 11932 (VoicePanelRiveMicButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import MicrophoneRive2 from "MicrophoneRive" /* 5166 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx");

export function VoicePanelRiveMicButton(arg0) {
  let color;
  let muted;
  ({ color, muted } = arg0);
  let str = "On";
  const MicrophoneRive = MicrophoneRive2.MicrophoneRive;
  if (muted) {
    str = "Off";
  }
  if (muted) {
    let MicrophoneIcon = tmp3(9223).MicrophoneSlashIcon;
  } else {
    MicrophoneIcon = tmp3(11933).MicrophoneIcon;
  }
  return <tmp2 style={{ width: 24, height: 24, pointerEvents: "none" }}>{null}</tmp2>;
}
