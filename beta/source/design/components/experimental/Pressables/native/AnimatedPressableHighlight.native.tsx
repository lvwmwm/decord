// Module ID: 5921
// Function ID: 5922
// Name: AnimatedPressableHighlight
// Dependencies: [19, 17, 21, 4566, 5435, 5922, 4531, 576, 1364, 2]

// Module 5921 (AnimatedPressableHighlight)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4531 */;
import Pressables from "Pressables" /* 5435 */;
import useIOSPressEffects from "useIOSPressEffects" /* 5922 */;
import react from "react" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
let closure_6 = ReanimatedRexport.createAnimatedComponent(Pressables.PressableHighlight);
const tmp2 = PlatformUtils.isAndroid() ? (function AnimatedPressableHighlightAndroid(children) {
  children = children.children;
  const merged = Object.assign(children, Object.assign({ children: 0 }));
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.MOBILE_ANDROID_BUTTON_BACKGROUND_RIPPLE);
  const items = [token, ];
  let androidRippleConfig = merged.androidRippleConfig;
  let cornerRadius;
  const useMemo = react.useMemo;
  if (androidRippleConfig != null) {
    cornerRadius = androidRippleConfig.cornerRadius;
  }
  items[1] = cornerRadius;
  const merged1 = Object.assign(merged);
  return <Pressable android_ripple={useMemo(() => {
    let num;
    const androidRippleConfig = merged.androidRippleConfig;
    const obj = { color: token, cornerRadius: num };
    num = undefined;
    if (androidRippleConfig != null) {
      num = androidRippleConfig.cornerRadius;
    }
    if (num == null) {
      num = 12;
    }
    return obj;
  }, items)}>{children}</Pressable>;
}) : (function AnimatedPressableHighlightiOS(children) {
  children = children.children;
  const merged = Object.assign(children, Object.assign({ children: 0 }));
  const obj = useIOSPressEffects;
  const iOSPressEffects = obj.useIOSPressEffects(4);
  const pressableStyles = iOSPressEffects.pressableStyles;
  const merged1 = Object.assign(merged);
  const items = [pressableStyles, merged.style];
  return <closure_6 accessibilityRole="button" onPressIn={iOSPressEffects.onPressIn} onPressOut={iOSPressEffects.onPressOut} style={items}>{children}</closure_6>;
});
const result = size.fileFinishedImporting("design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx");

export const AnimatedPressableHighlight = tmp2;
