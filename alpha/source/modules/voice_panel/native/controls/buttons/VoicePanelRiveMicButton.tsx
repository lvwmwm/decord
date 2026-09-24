// Module ID: 10351
// Function ID: 10352
// Name: VoicePanelRiveMicButton
// Dependencies: [19, 17, 21, 4535, 10031, 10352, 2]
// Exports: VoicePanelRiveMicButton

// Module 10351 (VoicePanelRiveMicButton)
import native from "native" /* 4535 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelRiveMicButton.tsx");

export const VoicePanelRiveMicButton = function VoicePanelRiveMicButton(arg0) {
  ({ color, muted } = arg0);
  const obj = { style: { width: 24, height: 24, pointerEvents: "none" }, children: null };
  const obj2 = { dataBinding: { fill: color, on: !muted }, defaultViewModelInstance: null, fallback: null };
  let str = "On";
  if (muted) {
    str = "Off";
  }
  obj2.defaultViewModelInstance = str;
  if (muted) {
    let MicrophoneIcon = tmp3(10031).MicrophoneSlashIcon;
  } else {
    MicrophoneIcon = tmp3(10352).MicrophoneIcon;
  }
  obj2.fallback = <MicrophoneIcon color={color} />;
  obj.children = jsx(native.MicrophoneRive, { dataBinding: { fill: color, on: !muted }, defaultViewModelInstance: null, fallback: null });
  return <View style={{ width: 24, height: 24, pointerEvents: "none" }}>{null}</View>;
};
