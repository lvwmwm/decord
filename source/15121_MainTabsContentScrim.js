// Module ID: 15121
// Function ID: 114130
// Name: MainTabsContentScrim
// Dependencies: []
// Exports: MainTabsContentScrim

// Module 15121 (MainTabsContentScrim)
const jsx = require(dependencyMap[1]).jsx;
const _module = require(dependencyMap[2]);
let obj = {};
obj = {};
const merged = Object.assign(require(dependencyMap[0]).StyleSheet.absoluteFillObject);
obj["zIndex"] = 5;
obj["backgroundColor"] = importDefault(dependencyMap[3]).colors.BACKGROUND_SCRIM;
obj.scrim = obj;
let closure_4 = _module.createStyles(obj);
let closure_5 = { code: "function MainTabsContentScrimTsx1(){const{interpolate,translateX,maxWidth,Extrapolation}=this.__closure;return{opacity:interpolate(translateX.get(),[maxWidth,0],[0,0.5],Extrapolation.CLAMP)};}" };
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsContentScrim.tsx");

export const MainTabsContentScrim = function MainTabsContentScrim(translateX) {
  translateX = translateX.translateX;
  const require = translateX;
  const maxWidth = translateX.maxWidth;
  const importDefault = maxWidth;
  let obj = require(dependencyMap[4]);
  const fn = function c() {
    const obj = {};
    const value = translateX.get();
    const items = [maxWidth, 0];
    obj.opacity = translateX(closure_2[4]).interpolate(value, items, [false, false], translateX(closure_2[4]).Extrapolation.CLAMP);
    return obj;
  };
  obj = { interpolate: require(dependencyMap[4]).interpolate, translateX, maxWidth, Extrapolation: require(dependencyMap[4]).Extrapolation };
  fn.__closure = obj;
  fn.__workletHash = 7933670426250;
  fn.__initData = closure_5;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const style = [callback().scrim, animatedStyle];
  return jsx(importDefault(dependencyMap[4]).View, { style, pointerEvents: "none" });
};
