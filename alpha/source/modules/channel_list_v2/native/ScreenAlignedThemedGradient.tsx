// Module ID: 18096
// Function ID: 18097
// Name: ScreenAlignedThemedGradient
// Dependencies: [17, 21, 5014, 12271, 9823, 10736, 18067, 1491, 5095, 2]
// Exports: ScreenAlignedThemedGradientSliding, default

// Module 18096 (ScreenAlignedThemedGradient)
import Fragment from "Fragment" /* 21 */;
import useActiveTheme from "useActiveTheme" /* 9823 */;
import ThemedGradientDefault from "ThemedGradient" /* 10736 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 12271 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

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
const __initData = { code: "function ScreenAlignedThemedGradientTsx1(){const{roundToNearestPixel,offsetX,panelTranslateX,offsetY}=this.__closure;return{transform:[{translateX:roundToNearestPixel(-offsetX-panelTranslateX.get())},{translateY:roundToNearestPixel(-offsetY)}]};}" };
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ScreenAlignedThemedGradient.tsx");

export default function ScreenAlignedThemedGradient(arg0) {
  let offsetX;
  let offsetY;
  ({ offsetX, offsetY } = arg0);
  const obj = useActiveTheme;
  const isClientThemeOrCustomThemeActive = obj.useIsClientThemeOrCustomThemeActive();
  return <React3 pointerEvents="none" style={closure_6(offsetX, offsetY).container}>{jsx(ThemedGradientDefault, { absolute: true, tall: true, wide: true, mix: isClientThemeOrCustomThemeActive })}</React3>;
};
export function ScreenAlignedThemedGradientSliding(offsetX) {
  offsetX = offsetX.offsetX;
  const offsetY = offsetX.offsetY;
  let panelTranslateX;
  let obj = offsetX(panelTranslateX[4]);
  const isClientThemeOrCustomThemeActive = obj.useIsClientThemeOrCustomThemeActive();
  let obj2 = offsetX(panelTranslateX[6]);
  panelTranslateX = obj2.useHomeDrawerState().panelTranslateX;
  const height = offsetY(panelTranslateX[7])({ ignoreKeyboard: true }).height;
  const obj3 = offsetX(panelTranslateX[8]);
  const fn = function o() {
    let items;
    let tmp;
    let tmp2;
    const obj = { transform: items };
    const obj2 = { translateX: tmp(tmp2 - panelTranslateX.get()) };
    tmp = roundToNearestPixelDefault;
    tmp2 = -offsetX;
    items = [obj2, { translateY: roundToNearestPixelDefault(-offsetY) }];
    ({ translateY: roundToNearestPixelDefault(-offsetY) });
    return obj;
  };
  fn.__closure = { roundToNearestPixel: offsetY(panelTranslateX[3]), offsetX, panelTranslateX, offsetY };
  fn.__workletHash = 14168713340122;
  fn.__initData = __initData;
  ({ roundToNearestPixel: offsetY(panelTranslateX[3]), offsetX, panelTranslateX, offsetY });
  const animatedStyle = obj3.useAnimatedStyle(fn);
  let items = [absoluteFill.absoluteFill, animatedStyle];
  const View = offsetY(panelTranslateX[8]).View;
  return <View pointerEvents="none" style={items}>{null}</View>;
}
