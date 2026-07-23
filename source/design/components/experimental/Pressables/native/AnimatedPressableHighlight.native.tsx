// Module ID: 5168
// Function ID: 44985
// Name: AnimatedPressableHighlight
// Dependencies: [31, 27, 33, 3991, 4660, 5169, 3834, 689, 477, 2]

// Module 5168 (AnimatedPressableHighlight)
import result from "result";
import { Pressable } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import set from "set";
import importDefaultResult from "module_3991";
import set from "jsxProd";

const require = arg1;
let closure_6 = require("module_3991").createAnimatedComponent(require("PressableBase").PressableHighlight);
const result = set.fileFinishedImporting("design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx");

export const AnimatedPressableHighlight = set.isAndroid() ? (function AnimatedPressableHighlightAndroid(children) {
  let obj = Object.create(null);
  obj.children = 0;
  const merged = Object.assign(children, obj);
  obj = merged(3834);
  token = obj.useToken(token(689).colors.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE);
  const items = [token, ];
  let androidRippleConfig = merged.androidRippleConfig;
  let cornerRadius;
  if (null != androidRippleConfig) {
    cornerRadius = androidRippleConfig.cornerRadius;
  }
  items[1] = cornerRadius;
  obj = {
    android_ripple: React.useMemo(() => {
      const obj = { color: token };
      const androidRippleConfig = merged.androidRippleConfig;
      let cornerRadius;
      if (null != androidRippleConfig) {
        cornerRadius = androidRippleConfig.cornerRadius;
      }
      let num = 12;
      if (null != cornerRadius) {
        num = cornerRadius;
      }
      obj.cornerRadius = num;
      return obj;
    }, items)
  };
  const merged1 = Object.assign(merged);
  obj["children"] = children.children;
  return <Pressable android_ripple={React.useMemo(() => {
    const obj = { color: token };
    const androidRippleConfig = merged.androidRippleConfig;
    let cornerRadius;
    if (null != androidRippleConfig) {
      cornerRadius = androidRippleConfig.cornerRadius;
    }
    let num = 12;
    if (null != cornerRadius) {
      num = cornerRadius;
    }
    obj.cornerRadius = num;
    return obj;
  }, items)} />;
}) : (function AnimatedPressableHighlightiOS(children) {
  let obj = Object.create(null);
  obj.children = 0;
  const merged = Object.assign(children, obj);
  obj = require(5169) /* SPRING_CONFIG */;
  const iOSPressEffects = obj.useIOSPressEffects(4);
  obj = { accessibilityRole: "button", onPressIn: iOSPressEffects.onPressIn, onPressOut: iOSPressEffects.onPressOut };
  const merged1 = Object.assign(merged);
  const items = [iOSPressEffects.pressableStyles, merged.style];
  obj["style"] = items;
  obj["children"] = children.children;
  return <closure_6 accessibilityRole="button" onPressIn={iOSPressEffects.onPressIn} onPressOut={iOSPressEffects.onPressOut} />;
});
