// Module ID: 18377
// Function ID: 18378
// Name: MainTabsContentScrim
// Dependencies: [17, 21, 5043, 575, 1654, 2]
// Exports: MainTabsContentScrim

// Module 18377 (MainTabsContentScrim)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1654 from "module_1654" /* 1654 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const _modDef1654 = _mod1654;

let obj2;
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { scrim: obj2 };
createStyles = createStyles.createStyles;
obj2 = { zIndex: 5, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_4 = createStyles(obj);
let closure_5 = { code: "(function MainTabsContentScrimTsx1(){let[interpolate,translateX,maxWidth,Extrapolation]=this.__closure;return{opacity:interpolate(translateX.get(),[maxWidth,0],[0,0.5],Extrapolation.CLAMP)};})" };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsContentScrim.tsx");

export function MainTabsContentScrim(arg0) {
  let maxWidth;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let translateX;
  ({ translateX, maxWidth } = arg0);
  let items = [closure_5, , , , ];
  const tmp = closure_4();
  const useAnimatedStyle = _mod1654.useAnimatedStyle;
  _mod1654;
  items[1] = _mod1654.interpolate;
  items[2] = translateX;
  items[3] = maxWidth;
  items[4] = _mod1654.Extrapolation;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  class MainTabsContentScrimTsx1 {
    constructor() {
      obj = { opacity: null };
      items = [, ];
      items[0] = closure_2;
      items[1] = 0;
      obj.opacity = closure_0(closure_1.get(), items, [0, 0.5], closure_3.CLAMP);
      return obj;
    }
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8];
  MainTabsContentScrimTsx1.__closure = items1;
  MainTabsContentScrimTsx1.__workletHash = 7095253436147;
  MainTabsContentScrimTsx1.__initData = tmp4;
  const animatedStyle = useAnimatedStyle(MainTabsContentScrimTsx1);
  const items2 = [tmp.scrim, animatedStyle];
  return jsx(_modDef1654.View, { style: items2, pointerEvents: "none" });
}
