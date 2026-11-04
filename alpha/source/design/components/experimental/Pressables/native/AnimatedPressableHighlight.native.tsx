// Module ID: 7120
// Function ID: 7121
// Name: AnimatedPressableHighlight
// Dependencies: [19, 17, 21, 1652, 7121, 7123, 5732, 575, 1377, 2]

// Module 7120 (AnimatedPressableHighlight)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5732 */;
import Pressables from "Pressables" /* 7121 */;
import useIOSPressEffects from "useIOSPressEffects" /* 7123 */;
import react from "react" /* 19 */;
import module_1652 from "module_1652" /* 1652 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
let closure_6 = module_1652.createAnimatedComponent(Pressables.PressableHighlight);
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
