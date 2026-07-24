// Module ID: 4531
// Function ID: 39807
// Name: getBlurAmount
// Dependencies: [31, 27, 33, 4130, 689, 1212, 3842, 1557, 3974, 3991, 4532, 2]
// Exports: Backdrop

// Module 4531 (getBlurAmount)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function getBlurAmount(animatedProps) {
  if ("none" === animatedProps) {
    return 0;
  } else if ("subtle" === animatedProps) {
    return 0.05;
  } else if ("strong" === animatedProps) {
    return 0.25;
  }
}
const Pressable = get_ActivityIndicator.Pressable;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = {};
_createForOfIteratorHelperLoose = { fill: get_ActivityIndicator.StyleSheet.absoluteFillObject };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SCRIM };
_createForOfIteratorHelperLoose.backdrop = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.backdropOpaque = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_BACKGROUND_SCRIM_OPAQUE };
_createForOfIteratorHelperLoose.accessibilityDismiss = { position: "absolute", top: 0, left: 0, right: 0, height: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_BACKGROUND_SCRIM_OPAQUE };
const result = require("jsxProd").fileFinishedImporting("design/components/Backdrop/native/Backdrop.native.tsx");

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
    const intl = backgroundColor(1212).intl;
    accessibilityLabel = intl.string(backgroundColor(1212).t.WAI6xu);
  }
  backgroundColor = undefined;
  const tmp3 = _createForOfIteratorHelperLoose();
  let obj = backgroundColor(3842);
  backgroundColor = tmp3.backdrop.backgroundColor;
  const items = [backgroundColor];
  obj = { onPress: onDismiss, "aria-hidden": true };
  const memo = React.useMemo(() => backgroundColor(outer1_2[8]).hexToRgbaString(backgroundColor), items);
  obj = { style: items1, pointerEvents: "box-none" };
  items1 = [tmp3.fill, style];
  obj.animatedProps = animatedProps;
  let tmp6 = null != onDismiss;
  if (tmp6) {
    const obj1 = {};
    const items2 = [tmp3.accessibilityDismiss, , ];
    const obj2 = { top: importDefault(1557)().top };
    items2[1] = obj2;
    items2[2] = accessibleDismissStyle;
    obj1.style = items2;
    obj1.onPress = onDismiss;
    obj1.accessibilityRole = "button";
    obj1.accessibilityLabel = accessibilityLabel;
    obj1["aria-hidden"] = animatedProps["aria-hidden"];
    tmp6 = callback(Pressable, obj1);
  }
  const items3 = [tmp6, ];
  if ("none" !== str) {
    const obj3 = {};
    const merged = Object.assign(obj);
    obj3["style"] = tmp3.fill;
    const obj4 = { blurAmount: getBlurAmount(str), style: tmp3.fill, blurTheme: obj.useThemeContext().theme, blurTintRgba: memo, android_fallbackColor: tmp3.backdrop.backgroundColor };
    obj3["children"] = callback(importDefault(4532), obj4);
    let obj5 = obj3;
    const tmp20 = importDefault(4532);
  } else {
    obj5 = {};
    const merged1 = Object.assign(obj);
    const items4 = [tmp3.fill, flag ? tmp3.backdropOpaque : tmp3.backdrop];
    obj5["style"] = items4;
  }
  items3[1] = callback(Pressable, obj5);
  obj.children = items3;
  return closure_6(importDefault(3991).View, obj);
};
