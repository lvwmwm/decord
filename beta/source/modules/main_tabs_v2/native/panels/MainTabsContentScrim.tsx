// Module ID: 16168
// Function ID: 16169
// Name: MainTabsContentScrim
// Dependencies: [17, 21, 4836, 576, 4566, 2]
// Exports: MainTabsContentScrim

// Module 16168 (MainTabsContentScrim)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { scrim: obj2 };
obj2 = { zIndex: 5, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_4 = createStyles(obj);
const __initData = { code: "function MainTabsContentScrimTsx1(){const{interpolate,translateX,maxWidth,Extrapolation}=this.__closure;return{opacity:interpolate(translateX.get(),[maxWidth,0],[0,0.5],Extrapolation.CLAMP)};}" };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsContentScrim.tsx");

export const MainTabsContentScrim = function MainTabsContentScrim(translateX) {
  translateX = translateX.translateX;
  const maxWidth = translateX.maxWidth;
  const tmp = closure_4();
  let obj = translateX(4566);
  const fn = function c() {
    let interpolate;
    let items;
    let value;
    const obj = { opacity: interpolate(value, items, [0, 0.5], ReanimatedRexport.Extrapolation.CLAMP) };
    interpolate = ReanimatedRexport.interpolate;
    ReanimatedRexport;
    value = translateX.get();
    items = [maxWidth, 0];
    return obj;
  };
  fn.__closure = { interpolate: translateX(4566).interpolate, translateX, maxWidth, Extrapolation: translateX(4566).Extrapolation };
  fn.__workletHash = 7933670426250;
  fn.__initData = __initData;
  ({ interpolate: translateX(4566).interpolate, translateX, maxWidth, Extrapolation: translateX(4566).Extrapolation });
  const animatedStyle = obj.useAnimatedStyle(fn);
  let items = [tmp.scrim, animatedStyle];
  return jsx(maxWidth(4566).View, { style: items, pointerEvents: "none" });
};
