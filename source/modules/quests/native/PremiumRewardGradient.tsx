// Module ID: 13945
// Function ID: 105969
// Name: useGradientColors
// Dependencies: []
// Exports: default

// Module 13945 (useGradientColors)
function useGradientColors() {
  const token = arg1(dependencyMap[6]).useToken(importDefault(dependencyMap[5]).colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START);
  const arg1 = token;
  const obj = arg1(dependencyMap[6]);
  const token1 = arg1(dependencyMap[6]).useToken(importDefault(dependencyMap[5]).colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END);
  const importDefault = token1;
  const items = [token, token1];
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
  const arg1 = transparentBlack;
  const opaqueBlack = tmp3.opaqueBlack;
  const importDefault = opaqueBlack;
  const transparentWhite = tmp3.transparentWhite;
  const dependencyMap = transparentWhite;
  const opaqueWhite = tmp3.opaqueWhite;
  const React = opaqueWhite;
  const tmp2 = useGradientColors();
  let obj = arg1(dependencyMap[8]);
  const isThemeDarkResult = obj.isThemeDark(importDefault(dependencyMap[7])());
  const items = [transparentBlack, opaqueBlack, transparentWhite, opaqueWhite, isThemeDarkResult];
  obj = { style: items1 };
  const items1 = [tmp.wrapper, style];
  const memo = React.useMemo(() => {
    if (isThemeDarkResult) {
      const items = [transparentBlack, opaqueBlack];
      let items1 = items;
    } else {
      items1 = [transparentWhite, opaqueWhite];
    }
    return items1;
  }, items);
  obj = { style: tmp.fill, colors: tmp2, start: closure_9, end: closure_10, pointerEvents: "none" };
  const items2 = [callback(importDefault(dependencyMap[9]), obj), callback(importDefault(dependencyMap[9]), { style: tmp.fill, colors: memo, start: closure_11, end: closure_12, pointerEvents: "none" }), children];
  obj.children = items2;
  return callback2(closure_5, obj);
}
function PremiumRewardGlowGradient(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const tmp = callback3();
  const tmp2 = useGradientColors();
  let obj = arg1(dependencyMap[8]);
  obj = { style: items };
  const items = [tmp.wrapper, style];
  const tmp3 = importDefault(dependencyMap[7])();
  obj = {};
  const items1 = [tmp.glow, ];
  let glowLight = !obj.isThemeDark(importDefault(dependencyMap[7])());
  const isThemeDarkResult = obj.isThemeDark(importDefault(dependencyMap[7])());
  const tmp5 = closure_7;
  const tmp6 = closure_5;
  const tmp7 = callback;
  if (glowLight) {
    glowLight = tmp.glowLight;
  }
  items1[1] = glowLight;
  obj.style = items1;
  obj.maskElement = callback(importDefault(dependencyMap[9]), { style: closure_4.absoluteFill, colors: [null, null], start: closure_11, end: closure_12 });
  obj.children = callback(importDefault(dependencyMap[9]), { style: closure_4.absoluteFill, colors: tmp2, start: closure_9, end: closure_10 });
  const items2 = [tmp7(importDefault(dependencyMap[10]), obj), children];
  obj.children = items2;
  return tmp5(tmp6, obj);
}
let closure_3 = importAll(dependencyMap[0]);
({ StyleSheet: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_8 = arg1(dependencyMap[3]).createStyles({ wrapper: {}, fill: {}, glow: {}, glowLight: { opacity: 0.5 } });
let closure_9 = {};
let closure_10 = { 0: -721485569, 0: 3375103 };
let closure_11 = {};
let closure_12 = {};
const obj = arg1(dependencyMap[3]);
const obj2 = arg1(dependencyMap[4]);
const hexOpacityToRgbaResult = arg1(dependencyMap[4]).hexOpacityToRgba("#000000", 0);
const obj3 = arg1(dependencyMap[4]);
const hexOpacityToRgbaResult1 = arg1(dependencyMap[4]).hexOpacityToRgba("#FFFFFF", 0);
let closure_13 = arg1(dependencyMap[3]).createStyleProperties({ transparentBlack: hexOpacityToRgbaResult, opaqueBlack: importDefault(dependencyMap[5]).colors.BLACK, transparentWhite: hexOpacityToRgbaResult1, opaqueWhite: importDefault(dependencyMap[5]).colors.WHITE });
const obj4 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/quests/native/PremiumRewardGradient.tsx");

export default function QuestPremiumRewardGradientWrapper(visible) {
  if (!visible.visible) {
    const obj = { style: tmp, children: tmp2 };
    return tmp3(closure_5, obj);
  }
};
