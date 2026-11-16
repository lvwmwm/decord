// Module ID: 14635
// Function ID: 14636
// Name: VoicePanelDockScrim
// Dependencies: [19, 17, 11413, 21, 11412, 14085, 575, 2]

// Module 14635 (VoicePanelDockScrim)
import Fragment from "Fragment" /* 21 */;
import useVoicePanelDockHeightDefault from "useVoicePanelDockHeight" /* 11412 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11413 */;
import ChatInputScrimGradient2 from "ChatInputScrimGradient" /* 14085 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let tmp;
const nativeDefault = tmp(575);
({ StyleSheet, View: c3 } = react_native);
let closure_4 = VoicePanelDockConstants.getVoicePanelDockButtonsTop;
const jsx = Fragment.jsx;
const scrim = StyleSheet.create({ scrim: { position: "absolute", left: 0, right: 0, bottom: 0 } });
const memoResult = react.memo(function VoicePanelDockScrim() {
  const tmp3 = useVoicePanelDockHeightDefault();
  let tmp4 = null;
  if (tmp3 > 0) {
    const items = [scrim.scrim, ];
    items[1] = { height: closure_4(tmp3) };
    const obj2 = { height: closure_4(tmp3) };
    ({ inline: true, gradientHeight: nativeDefault.space.PX_64 });
    const ChatInputScrimGradient = ChatInputScrimGradient2.ChatInputScrimGradient;
    tmp4 = <_false style={items} pointerEvents="none">{null}</_false>;
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockScrim.tsx");

export default memoResult;
