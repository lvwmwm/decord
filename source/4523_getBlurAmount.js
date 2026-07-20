// Module ID: 4523
// Function ID: 39710
// Name: getBlurAmount
// Dependencies: []
// Exports: Backdrop

// Module 4523 (getBlurAmount)
function getBlurAmount(animatedProps) {
  if ("none" === animatedProps) {
    return 0;
  } else if ("subtle" === animatedProps) {
    return 0.05;
  } else if ("strong" === animatedProps) {
    return 0.25;
  }
}
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const Pressable = tmp2.Pressable;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = {};
let obj = arg1(dependencyMap[3]);
obj = { fill: tmp2.StyleSheet.absoluteFillObject };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SCRIM };
obj.backdrop = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.backdropOpaque = { backgroundColor: importDefault(dependencyMap[4]).colors.MOBILE_BACKGROUND_SCRIM_OPAQUE };
obj.accessibilityDismiss = {};
let closure_8 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.MOBILE_BACKGROUND_SCRIM_OPAQUE };
const result = arg1(dependencyMap[11]).fileFinishedImporting("design/components/Backdrop/native/Backdrop.native.tsx");

export const Backdrop = function Backdrop(animatedProps) {
  let accessibilityLabel;
  let accessibleDismissStyle;
  let onDismiss;
  let style;
  animatedProps = animatedProps.animatedProps;
  ({ style, accessibleDismissStyle } = animatedProps);
  if (animatedProps === undefined) {
    animatedProps = closure_7;
  }
  let flag = animatedProps.opaque;
  if (flag === undefined) {
    flag = false;
  }
  let str = animatedProps.blur;
  if (str === undefined) {
    str = "none";
  }
  ({ onDismiss, accessibilityLabel } = animatedProps);
  if (accessibilityLabel === undefined) {
    const intl = arg1(dependencyMap[5]).intl;
    accessibilityLabel = intl.string(arg1(dependencyMap[5]).t.WAI6xu);
  }
  let arg1;
  const tmp3 = callback2();
  let obj = arg1(dependencyMap[6]);
  const backgroundColor = tmp3.backdrop.backgroundColor;
  arg1 = backgroundColor;
  const items = [backgroundColor];
  obj = { onPress: onDismiss, aria-hidden: true };
  const memo = React.useMemo(() => backgroundColor(closure_2[8]).hexToRgbaString(backgroundColor), items);
  obj = { style: items1, pointerEvents: "box-none" };
  const items1 = [tmp3.fill, style];
  obj.animatedProps = animatedProps;
  let tmp6 = null != onDismiss;
  if (tmp6) {
    const obj1 = {};
    const items2 = [tmp3.accessibilityDismiss, , ];
    const obj2 = { top: importDefault(dependencyMap[7])().top };
    items2[1] = obj2;
    items2[2] = accessibleDismissStyle;
    obj1.style = items2;
    obj1.onPress = onDismiss;
    obj1.accessibilityRole = "button";
    obj1.accessibilityLabel = accessibilityLabel;
    obj1.aria-hidden = animatedProps.aria-hidden;
    tmp6 = callback(Pressable, obj1);
  }
  const items3 = [tmp6, ];
  if ("none" !== str) {
    const obj3 = {};
    const merged = Object.assign(obj);
    obj3["style"] = tmp3.fill;
    const obj4 = { blurAmount: getBlurAmount(str), style: tmp3.fill, blurTheme: obj.useThemeContext().theme, blurTintRgba: memo, android_fallbackColor: tmp3.backdrop.backgroundColor };
    obj3["children"] = callback(importDefault(dependencyMap[10]), obj4);
    let obj5 = obj3;
    const tmp20 = importDefault(dependencyMap[10]);
  } else {
    obj5 = {};
    const merged1 = Object.assign(obj);
    const items4 = [tmp3.fill, flag ? tmp3.backdropOpaque : tmp3.backdrop];
    obj5["style"] = items4;
  }
  items3[1] = callback(Pressable, obj5);
  obj.children = items3;
  return closure_6(importDefault(dependencyMap[9]).View, obj);
};
