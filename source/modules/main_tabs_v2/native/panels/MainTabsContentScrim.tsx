// Module ID: 15364
// Function ID: 117058
// Name: MainTabsContentScrim
// Dependencies: [27, 33, 4165, 689, 4026, 2]
// Exports: MainTabsContentScrim

// Module 15364 (MainTabsContentScrim)
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let obj = {};
obj = {};
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
obj["zIndex"] = 5;
obj["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SCRIM;
obj.scrim = obj;
let closure_4 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_5 = { code: "function MainTabsContentScrimTsx1(){const{interpolate,translateX,maxWidth,Extrapolation}=this.__closure;return{opacity:interpolate(translateX.get(),[maxWidth,0],[0,0.5],Extrapolation.CLAMP)};}" };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsContentScrim.tsx");

export const MainTabsContentScrim = function MainTabsContentScrim(translateX) {
  translateX = translateX.translateX;
  const maxWidth = translateX.maxWidth;
  let obj = translateX(4026);
  const fn = function c() {
    const obj = {};
    const value = translateX.get();
    const items = [maxWidth, 0];
    obj.opacity = translateX(outer1_2[4]).interpolate(value, items, [0, 0.5], translateX(outer1_2[4]).Extrapolation.CLAMP);
    return obj;
  };
  obj = { interpolate: translateX(4026).interpolate, translateX, maxWidth, Extrapolation: translateX(4026).Extrapolation };
  fn.__closure = obj;
  fn.__workletHash = 7933670426250;
  fn.__initData = closure_5;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const style = [callback().scrim, animatedStyle];
  return jsx(maxWidth(4026).View, { style, pointerEvents: "none" });
};
