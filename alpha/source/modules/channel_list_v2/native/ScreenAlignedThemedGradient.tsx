// Module ID: 18771
// Function ID: 18772
// Name: ScreenAlignedThemedGradient
// Dependencies: [17, 21, 5306, 10576, 9062, 10271, 18742, 1496, 1655, 2]
// Exports: ScreenAlignedThemedGradientSliding, default

// Module 18771 (ScreenAlignedThemedGradient)
import Fragment from "Fragment" /* 21 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import _mod1655 from "module_1655" /* 1655 */;
import useActiveTheme from "useActiveTheme" /* 9062 */;
import ThemedGradientDefault from "ThemedGradient" /* 10271 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10576 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 18742 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let obj1, obj4;

let c3;
let closure_4;
({ StyleSheet: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((arg0, arg1) => {
  let items;
  let obj2;
  const obj = { container: obj2 };
  obj2 = { transform: items };
  const merged = Object.assign(_false.absoluteFillObject);
  items = [{ translateX: roundToNearestPixelDefault(-arg0) }, ];
  ({ translateX: roundToNearestPixelDefault(-arg0) });
  items[1] = { translateY: roundToNearestPixelDefault(-arg1) };
  ({ translateY: roundToNearestPixelDefault(-arg1) });
  return obj;
});
let closure_7 = { code: "(function ScreenAlignedThemedGradientTsx1(){let[roundToNearestPixel,offsetX,panelTranslateX,offsetY]=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-panelTranslateX.get())},{translateY:roundToNearestPixel(-offsetY)}]};})" };
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ScreenAlignedThemedGradient.tsx");

export default function ScreenAlignedThemedGradient(arg0) {
  let offsetX;
  let offsetY;
  ({ offsetX, offsetY } = arg0);
  const obj = useActiveTheme;
  const isClientThemeOrCustomThemeActive = obj.useIsClientThemeOrCustomThemeActive();
  return <React3 pointerEvents="none" style={closure_6(offsetX, offsetY).container}>{jsx(ThemedGradientDefault, { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive })}</React3>;
};
export function ScreenAlignedThemedGradientSliding(arg0) {
  let offsetX;
  let offsetY;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let tmp = dependencyMap;
  ({ offsetX, offsetY } = arg0);
  let obj = useActiveTheme;
  const isClientThemeOrCustomThemeActive = obj.useIsClientThemeOrCustomThemeActive();
  let obj2 = useHomeDrawerGesture;
  const panelTranslateX = obj2.useHomeDrawerState().panelTranslateX;
  const height = useWindowDimensionsDefault({ ignoreKeyboard: true }).height;
  let items = [closure_7, , , , ];
  const useAnimatedStyle = _mod1655.useAnimatedStyle;
  _mod1655;
  items[1] = roundToNearestPixelDefault;
  items[2] = offsetX;
  items[3] = panelTranslateX;
  items[4] = offsetY;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  class ScreenAlignedThemedGradientTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateX: null };
      tmp = -closure_1;
      obj1.translateX = closure_0(tmp - closure_2.get());
      items = [, ];
      items[0] = obj1;
      obj4 = { translateY: closure_0(-closure_3) };
      items[1] = obj4;
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9];
  ScreenAlignedThemedGradientTsx1.__closure = items1;
  ScreenAlignedThemedGradientTsx1.__workletHash = 8637379102627;
  ScreenAlignedThemedGradientTsx1.__initData = tmp5;
  const animatedStyle = useAnimatedStyle(ScreenAlignedThemedGradientTsx1);
  const items2 = [_false.absoluteFill, animatedStyle];
  const View = tmp3(1655).View;
  return <View pointerEvents="none" style={items2}>{null}</View>;
}
