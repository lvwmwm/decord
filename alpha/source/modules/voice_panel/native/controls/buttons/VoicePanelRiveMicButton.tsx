// Module ID: 12146
// Function ID: 12147
// Name: VoicePanelRiveMicButton
// Dependencies: [19, 17, 21, 5170, 7192, 5317, 9340, 12147, 2]
// Exports: VoicePanelRiveMicButton

// Module 12146 (VoicePanelRiveMicButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import MicrophoneRive2 from "MicrophoneRive" /* 5317 */;
import IconSize from "IconSize" /* 7192 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles((arg0) => {
  const obj = { container: size };
  size = { width: IconSize.ICON_SIZE[arg0], height: IconSize.ICON_SIZE[arg0], pointerEvents: "none" };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx");

export function VoicePanelRiveMicButton(arg0) {
  let color;
  let muted;
  ({ color, muted, size } = arg0);
  if (size === undefined) {
    size = "md";
  }
  let str = "On";
  const MicrophoneRive = MicrophoneRive2.MicrophoneRive;
  if (muted) {
    str = "Off";
  }
  if (muted) {
    let MicrophoneIcon = tmp3(9340).MicrophoneSlashIcon;
  } else {
    MicrophoneIcon = tmp3(12147).MicrophoneIcon;
  }
  return <tmp2 style={closure_4(size).container}>{null}</tmp2>;
}
