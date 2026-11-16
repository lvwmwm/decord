// Module ID: 15122
// Function ID: 15123
// Name: VoicePanelDockScrim
// Dependencies: [19, 17, 12009, 21, 12008, 14668, 575, 2]

// Module 15122 (VoicePanelDockScrim)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import VoicePanelDockLayout from "VoicePanelDockLayout" /* 12008 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 12009 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let tmp;
const ChatInputScrimGradient2 = tmp(14668);
({ StyleSheet, View: c3 } = react_native);
let closure_4 = VoicePanelDockConstants.getVoicePanelDockButtonsTop;
const jsx = Fragment.jsx;
const scrim = StyleSheet.create({ scrim: { position: "absolute", left: 0, right: 0, bottom: 0 } });
const memoResult = react.memo(function VoicePanelDockScrim() {
  const obj = VoicePanelDockLayout;
  const chatDockHeight = obj.useChatDockHeight();
  let tmp4 = null;
  if (chatDockHeight > 0) {
    const items = [scrim.scrim, ];
    items[1] = { height: closure_4(chatDockHeight) };
    const obj3 = { height: closure_4(chatDockHeight) };
    ({ inline: true, gradientHeight: nativeDefault.space.PX_64 });
    const ChatInputScrimGradient = ChatInputScrimGradient2.ChatInputScrimGradient;
    tmp4 = <_false style={items} pointerEvents="none">{null}</_false>;
  }
  return tmp4;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockScrim.tsx");

export default memoResult;
