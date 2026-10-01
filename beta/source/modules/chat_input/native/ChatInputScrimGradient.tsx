// Module ID: 11743
// Function ID: 11744
// Name: ChatInputScrimGradient
// Dependencies: [19, 17, 21, 4652, 4531, 576, 1092, 5293, 2]
// Exports: ChatInputScrimGradient, useChatInputFloatingOverlayStyle

// Module 11743 (ChatInputScrimGradient)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import useToken2 from "useToken" /* 4531 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4652 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp4;
const LinearGradientDefault = tmp4(5293);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInputScrimGradient.tsx");

export const ChatInputScrimGradient = function ChatInputScrimGradient(scrimBase) {
  let gradientHeight;
  let inline;
  let items;
  let items1;
  let result;
  ({ gradientHeight, inline } = scrimBase);
  if (inline === undefined) {
    inline = false;
  }
  scrimBase = scrimBase.scrimBase;
  const obj = client_themes_ClientThemesUtils;
  const gradientValue = obj.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.END);
  const obj2 = useToken2;
  const token = obj2.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  const useToken = useToken2.useToken;
  useToken2;
  if (gradientHeight == null) {
    gradientHeight = useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
  }
  if (scrimBase == null) {
    scrimBase = gradientValue;
  }
  if (scrimBase == null) {
    scrimBase = token;
  }
  const tmpResult = utils_ColorUtils;
  let hex2rgbResult = tmpResult.hex2rgb(scrimBase, 1);
  if (hex2rgbResult == null) {
    hex2rgbResult = scrimBase;
  }
  const tmpResult2 = utils_ColorUtils;
  let str = tmpResult2.hex2rgb(scrimBase, 0);
  if (str == null) {
    str = "transparent";
  }
  const tmp8 = hasOwnProperty;
  if (inline) {
    result = tmp10;
  } else {
    result = tmp10 / 2;
  }
  const obj4 = { colors: items, style: { height: gradientHeight }, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, locations: [0, 1] };
  items = [str, hex2rgbResult];
  const obj3 = { style: { position: "absolute", top: result, left: 0, right: 0, bottom: 0 }, pointerEvents: "none", children: items1 };
  items1 = [React3(LinearGradientDefault, obj4), ];
  const obj5 = { style: { flex: 1, backgroundColor: hex2rgbResult } };
  items1[1] = React3(View, obj5);
  return tmp8(View, obj3);
};
export const useChatInputFloatingOverlayStyle = function useChatInputFloatingOverlayStyle() {
  let obj2;
  const obj = { marginTop: -obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT) / 2, overflow: "visible" };
  obj2 = useToken2;
  return obj;
};
