// Module ID: 14059
// Function ID: 108125
// Name: useGradientColors
// Dependencies: [31, 27, 33, 4130, 3974, 689, 3834, 4066, 3945, 4554, 5109, 2]
// Exports: default

// Module 14059 (useGradientColors)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";
import hexToRgb from "hexToRgb";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function useGradientColors() {
  token = token(3834).useToken(token1(689).colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START);
  const obj = token(3834);
  token1 = token(3834).useToken(token1(689).colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END);
  let items = [token, token1];
  return React.useMemo(() => {
    const items = [token, token1];
    return items;
  }, items);
}
function PremiumRewardFillGradient(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const tmp = callback3();
  const tmp3 = callback4();
  const transparentBlack = tmp3.transparentBlack;
  const opaqueBlack = tmp3.opaqueBlack;
  const transparentWhite = tmp3.transparentWhite;
  const opaqueWhite = tmp3.opaqueWhite;
  const tmp2 = useGradientColors();
  let obj = transparentBlack(transparentWhite[8]);
  const isThemeDarkResult = obj.isThemeDark(opaqueBlack(transparentWhite[7])());
  let items = [transparentBlack, opaqueBlack, transparentWhite, opaqueWhite, isThemeDarkResult];
  obj = { style: items1 };
  items1 = [tmp.wrapper, style];
  const memo = opaqueWhite.useMemo(() => {
    if (closure_4) {
      const items = [transparentBlack, opaqueBlack];
      let items1 = items;
    } else {
      items1 = [transparentWhite, opaqueWhite];
    }
    return items1;
  }, items);
  obj = { style: tmp.fill, colors: tmp2, start: closure_9, end: closure_10, pointerEvents: "none" };
  const items2 = [callback(opaqueBlack(transparentWhite[9]), obj), callback(opaqueBlack(transparentWhite[9]), { style: tmp.fill, colors: memo, start: closure_11, end: closure_12, pointerEvents: "none" }), children];
  obj.children = items2;
  return callback2(closure_5, obj);
}
function PremiumRewardGlowGradient(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const tmp = callback3();
  const tmp2 = useGradientColors();
  let obj = require(3945);
  obj = { style: items };
  items = [tmp.wrapper, style];
  const tmp3 = importDefault(4066)();
  obj = {};
  const items1 = [tmp.glow, ];
  let glowLight = !obj.isThemeDark(importDefault(4066)());
  const isThemeDarkResult = obj.isThemeDark(importDefault(4066)());
  const tmp5 = closure_7;
  const tmp6 = closure_5;
  const tmp7 = callback;
  if (glowLight) {
    glowLight = tmp.glowLight;
  }
  items1[1] = glowLight;
  obj.style = items1;
  obj.maskElement = callback(importDefault(4554), { style: closure_4.absoluteFill, colors: ["transparent", "black"], start: closure_11, end: closure_12 });
  obj.children = callback(importDefault(4554), { style: closure_4.absoluteFill, colors: tmp2, start: closure_9, end: closure_10 });
  const items2 = [tmp7(importDefault(5109), obj), children];
  obj.children = items2;
  return tmp5(tmp6, obj);
}
({ StyleSheet: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ wrapper: { position: "relative", overflow: "hidden" }, fill: { position: "absolute", left: 0, right: 0, bottom: 0, height: "100%" }, glow: { position: "absolute", left: 0, right: 0, bottom: 0, height: "50%" }, glowLight: { opacity: 0.5 } });
let closure_9 = { x: 0, y: 0.5 };
let closure_10 = { x: 1, y: 0.5 };
let closure_11 = { x: 0.5, y: 0 };
let closure_12 = { x: 0.5, y: 1 };
const hexOpacityToRgbaResult = hexToRgb.hexOpacityToRgba("#000000", 0);
let closure_13 = _createForOfIteratorHelperLoose.createStyleProperties({ transparentBlack: hexOpacityToRgbaResult, opaqueBlack: require("_createForOfIteratorHelperLoose").colors.BLACK, transparentWhite: hexToRgb.hexOpacityToRgba("#FFFFFF", 0), opaqueWhite: require("_createForOfIteratorHelperLoose").colors.WHITE });
const hexOpacityToRgbaResult1 = hexToRgb.hexOpacityToRgba("#FFFFFF", 0);
const result = require("jsxProd").fileFinishedImporting("modules/quests/native/PremiumRewardGradient.tsx");

export default function QuestPremiumRewardGradientWrapper(visible) {
  if (!visible.visible) {
    const obj = { style: tmp, children: tmp2 };
    return tmp3(closure_5, obj);
  }
};
