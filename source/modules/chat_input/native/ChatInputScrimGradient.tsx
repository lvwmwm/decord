// Module ID: 11358
// Function ID: 88279
// Name: ChatInputScrimGradient
// Dependencies: [31, 27, 33, 3942, 3835, 689, 665, 4555, 2]
// Exports: ChatInputScrimGradient, useChatInputFloatingOverlayStyle

// Module 11358 (ChatInputScrimGradient)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/ChatInputScrimGradient.tsx");

export const ChatInputScrimGradient = function ChatInputScrimGradient(scrimBase) {
  let gradientHeight;
  let inline;
  ({ gradientHeight, inline } = scrimBase);
  if (inline === undefined) {
    inline = false;
  }
  scrimBase = scrimBase.scrimBase;
  let obj = require(3942) /* colorToHex */;
  let gradientValue = obj.useGradientValue(require(3942) /* colorToHex */.GradientPercentage.END);
  let obj1 = require(3835) /* map */;
  let token = obj1.useToken(importDefault(689).colors.BACKGROUND_BASE_LOWER);
  let obj2 = require(3835) /* map */;
  let token1 = obj2.useToken(importDefault(689).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT);
  if (null != gradientHeight) {
    token1 = gradientHeight;
  }
  if (null != scrimBase) {
    gradientValue = scrimBase;
  }
  if (null != gradientValue) {
    token = gradientValue;
  }
  const hex2rgbResult = require(665) /* pad2 */.hex2rgb(token, 1);
  let tmp5 = token;
  if (null != hex2rgbResult) {
    tmp5 = hex2rgbResult;
  }
  const obj4 = require(665) /* pad2 */;
  const hex2rgbResult1 = require(665) /* pad2 */.hex2rgb(token, 0);
  let str = "transparent";
  if (null != hex2rgbResult1) {
    str = hex2rgbResult1;
  }
  obj = {};
  obj = { position: "absolute", top: null, left: 0, right: 0, bottom: 0 };
  if (inline) {
    let result = tmp9;
  } else {
    result = tmp9 / 2;
  }
  obj.top = result;
  obj.style = obj;
  obj.pointerEvents = "none";
  const items = [str, tmp5];
  obj1 = { height: token1 };
  const items1 = [callback(importDefault(4555), { colors: items, style: obj1, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, locations: [0, 1] }), ];
  obj2 = { flex: 1, backgroundColor: tmp5 };
  items1[1] = callback(View, { style: obj2 });
  obj.children = items1;
  return closure_5(View, obj);
};
export const useChatInputFloatingOverlayStyle = function useChatInputFloatingOverlayStyle() {
  const obj = { marginTop: -require(3835) /* map */.useToken(importDefault(689).modules.mobile.CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT) / 2, overflow: "visible" };
  return obj;
};
