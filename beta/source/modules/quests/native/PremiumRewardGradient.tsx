// Module ID: 14693
// Function ID: 14694
// Name: PremiumRewardGradient
// Dependencies: [19, 17, 21, 4836, 4683, 576, 4531, 4767, 4686, 5293, 5976, 2]
// Exports: default

// Module 14693 (PremiumRewardGradient)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4531 */;
import design_shared from "design/shared" /* 4686 */;
import useThemeDefault from "useTheme" /* 4767 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import _modDef5976 from "module_5976" /* 5976 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import ColorUtils_mod from "ColorUtils" /* 4683 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function PremiumRewardFillGradient(arg0) {
  let children;
  let items2;
  let items3;
  let style;
  ({ children, style } = arg0);
  let tmp = closure_8();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START);
  const obj2 = useToken;
  const token1 = obj2.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END);
  let items = [token, token1];
  const memo = react.useMemo(() => {
    const items = [token, token1];
    return items;
  }, items);
  const tmp5 = closure_13();
  const transparentBlack = tmp5.transparentBlack;
  const opaqueBlack = tmp5.opaqueBlack;
  const transparentWhite = tmp5.transparentWhite;
  const opaqueWhite = tmp5.opaqueWhite;
  const tmp6 = useThemeDefault();
  const obj3 = design_shared;
  const isThemeDarkResult = obj3.isThemeDark(tmp6);
  let c4 = isThemeDarkResult;
  let items1 = [transparentBlack, opaqueBlack, transparentWhite, opaqueWhite, isThemeDarkResult];
  const obj4 = { style: items2, children: items3 };
  items2 = [tmp.wrapper, style];
  const memo1 = react.useMemo(() => {
    let items1;
    const tmp = c4;
    if (tmp) {
      const items = [transparentBlack, opaqueBlack];
      items1 = items;
    } else {
      items1 = [transparentWhite, opaqueWhite];
    }
    return items1;
  }, items1);
  items3 = [, , ];
  const obj5 = { style: tmp.fill, colors: memo, start, end, pointerEvents: "none" };
  items3[0] = metroRequire(LinearGradientDefault, obj5);
  const obj6 = { style: tmp.fill, colors: memo1, start: start2, end: end2, pointerEvents: "none" };
  items3[1] = metroRequire(LinearGradientDefault, obj6);
  items3[2] = children;
  return metroImportDefault(hasOwnProperty, obj4);
}
function PremiumRewardGlowGradient(arg0) {
  let children;
  let items1;
  let items3;
  let obj6;
  let obj7;
  let style;
  ({ children, style } = arg0);
  const tmp = closure_8();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START);
  const obj2 = useToken;
  const token1 = obj2.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END);
  let items = [token, token1];
  const memo = react.useMemo(() => {
    const items = [token, token1];
    return items;
  }, items);
  const tmp7 = useThemeDefault();
  const obj3 = design_shared;
  const isThemeDarkResult = obj3.isThemeDark(tmp7);
  const obj4 = { style: items1, children: items3 };
  items1 = [tmp.wrapper, style];
  const items2 = [tmp.glow, ];
  let glowLight = !isThemeDarkResult;
  const tmp10 = hasOwnProperty;
  const tmp12 = _modDef5976;
  const tmp9 = metroImportDefault;
  if (!isThemeDarkResult) {
    glowLight = tmp.glowLight;
  }
  items2[1] = glowLight;
  const obj5 = { style: items2, maskElement: metroRequire(LinearGradientDefault, obj6), children: metroRequire(LinearGradientDefault, obj7) };
  obj6 = { style: React3.absoluteFill, colors: ["transparent", "black"], start: start2, end: end2 };
  obj7 = { style: React3.absoluteFill, colors: memo, start, end };
  items3 = [metroRequire(tmp12, obj5), children];
  return tmp9(tmp10, obj4);
}
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let closure_8 = createStyles.createStyles({ wrapper: { position: "relative", overflow: "hidden" }, fill: { position: "absolute", left: 0, right: 0, bottom: 0, height: "100%" }, glow: { position: "absolute", left: 0, right: 0, bottom: 0, height: "50%" }, glowLight: { opacity: 0.5 } });
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const start2 = { x: 0.5, y: 0 };
const end2 = { x: 0.5, y: 1 };
let ColorUtils = ColorUtils_mod;
const hexOpacityToRgbaResult = ColorUtils.hexOpacityToRgba("#000000", 0);
const BLACK = nativeDefault.colors.BLACK;
ColorUtils = ColorUtils_mod;
const hexOpacityToRgbaResult1 = ColorUtils.hexOpacityToRgba("#FFFFFF", 0);
const WHITE = nativeDefault.colors.WHITE;
createStyles = createStyles_mod;
let closure_13 = createStyles.createStyleProperties({ transparentBlack: hexOpacityToRgbaResult, opaqueBlack: BLACK, transparentWhite: hexOpacityToRgbaResult1, opaqueWhite: WHITE });
const result = size.fileFinishedImporting("modules/quests/native/PremiumRewardGradient.tsx");

export default function QuestPremiumRewardGradientWrapper(visible) {
  let children;
  let style;
  let tmp2;
  ({ style, children } = visible);
  const tmp = metroRequire;
  if (visible.visible) {
    tmp2 = visible.glow ? PremiumRewardGlowGradient : PremiumRewardFillGradient;
  } else {
    tmp2 = hasOwnProperty;
  }
  return tmp(tmp2, { style, children });
};
