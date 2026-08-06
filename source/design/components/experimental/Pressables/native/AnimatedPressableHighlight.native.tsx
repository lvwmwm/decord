// Module ID: 5358
// Function ID: 5359
// Name: AnimatedPressableHighlight
// Dependencies: [19, 17, 21, 4145, 4827, 5359, 3988, 712, 500, 2]

// Module 5358 (AnimatedPressableHighlight)
import noop from "noop";
import { Pressable } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import set from "set";
import importDefaultResult from "module_4145";
import set from "jsxProd";

const require = arg1;
let closure_6 = require("module_4145").createAnimatedComponent(require("PressableBase").PressableHighlight);
const result = set.fileFinishedImporting("design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx");

export const AnimatedPressableHighlight = set.isAndroid() ? (function AnimatedPressableHighlightAndroid(children) {
  const merged = Object.assign(children, Object.create(null));
  let token;
  let obj = merged(3988);
  token = obj.useToken(token(712).colors.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE);
  const items = [token, ];
  let androidRippleConfig = merged.androidRippleConfig;
  let cornerRadius;
  if (androidRippleConfig != null) {
    cornerRadius = androidRippleConfig.cornerRadius;
  }
  items[1] = cornerRadius;
  obj = {
    android_ripple: React.useMemo(() => {
      const obj = { color: token, cornerRadius: null };
      const androidRippleConfig = merged.androidRippleConfig;
      let num;
      if (androidRippleConfig != null) {
        num = androidRippleConfig.cornerRadius;
      }
      if (num == null) {
        num = 12;
      }
      obj[1] = num;
      return obj;
    }, items)
  };
  const merged1 = Object.assign(merged);
  obj.children = children.children;
  return <Pressable android_ripple={React.useMemo(() => {
    const obj = { color: token, cornerRadius: null };
    const androidRippleConfig = merged.androidRippleConfig;
    let num;
    if (androidRippleConfig != null) {
      num = androidRippleConfig.cornerRadius;
    }
    if (num == null) {
      num = 12;
    }
    obj[1] = num;
    return obj;
  }, items)} />;
}) : (function AnimatedPressableHighlightiOS(children) {
  const merged = Object.assign(children, Object.create(null));
  let obj = require(5359) /* SPRING_CONFIG */;
  const iOSPressEffects = obj.useIOSPressEffects(4);
  obj = { accessibilityRole: "button", onPressIn: iOSPressEffects.onPressIn, onPressOut: iOSPressEffects.onPressOut };
  const merged1 = Object.assign(merged);
  const items = [iOSPressEffects.pressableStyles, merged.style];
  obj.style = items;
  obj.children = children.children;
  return <closure_6 accessibilityRole="button" onPressIn={iOSPressEffects.onPressIn} onPressOut={iOSPressEffects.onPressOut} />;
});
