// Module ID: 15124
// Function ID: 15125
// Name: VoicePanelDockScrim
// Dependencies: [19, 17, 12009, 21, 575, 12008, 5892, 5476, 14670, 2]

// Module 15124 (VoicePanelDockScrim)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 5476 */;
import useToken from "useToken" /* 5892 */;
import VoicePanelDockLayout from "VoicePanelDockLayout" /* 12008 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 12009 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let tmp3;
const ChatInputScrimGradient2 = tmp3(14670);
({ StyleSheet, View: c3 } = react_native);
let closure_4 = VoicePanelDockConstants.getVoicePanelDockButtonsTop;
const jsx = Fragment.jsx;
const scrim = StyleSheet.create({ scrim: { position: "absolute", left: 0, right: 0, bottom: 0 } });
const memoResult = react.memo(function VoicePanelDockScrim(background) {
  let items;
  let tmp14;
  let BACKGROUND_BASE_LOWER = background.background;
  if (BACKGROUND_BASE_LOWER === undefined) {
    BACKGROUND_BASE_LOWER = nativeDefault.colors.BACKGROUND_BASE_LOWER;
  }
  let flag = background.ignoreTheme;
  if (flag === undefined) {
    flag = false;
  }
  const obj = VoicePanelDockLayout;
  const chatDockHeight = obj.useChatDockHeight();
  const obj2 = useToken;
  const token = obj2.useToken(BACKGROUND_BASE_LOWER);
  const obj3 = client_themes_ClientThemesUtils;
  let gradientValue = obj3.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.END);
  let tmp9Result = null;
  if (chatDockHeight > 0) {
    const obj4 = { style: items, pointerEvents: "none", children: null };
    items = [scrim.scrim, ];
    items[1] = { height: closure_4(chatDockHeight) };
    const obj5 = { height: closure_4(chatDockHeight) };
    ({ inline: true, gradientHeight: nativeDefault.space.PX_64, scrimBase: tmp14 });
    const ChatInputScrimGradient = ChatInputScrimGradient2.ChatInputScrimGradient;
    tmp14 = token;
    const tmp10 = _false;
    if (!flag) {
      if (gradientValue == null) {
        gradientValue = token;
      }
      tmp14 = gradientValue;
    }
    tmp9Result = tmp9(tmp10, obj4);
  }
  return tmp9Result;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockScrim.tsx");

export default memoResult;
