// Module ID: 14711
// Function ID: 110999
// Name: useHasExpired
// Dependencies: [0, 0, 0, 0, 0, 0, 4294967295, 4294967295, 0]
// Exports: useHasExpired

// Module 14711 (useHasExpired)
import __exportStarResult1 from "__exportStarResult1";
import importAllResult from "__exportStarResult1";
import { View } from "__exportStarResult1";
import { jsx } from "__exportStarResult1";
import importDefaultResult from "__exportStarResult1";

let closure_7 = 2 * Math.PI * 6;
let obj = { duration: 1000, easing: require("__exportStarResult1").Easing.linear };
let closure_9 = require("__exportStarResult1").createAnimatedComponent(require("__exportStarResult1").Circle);
obj = {};
const obj1 = { borderRadius: "FRAME_SET_PROXY_TICKET_REFRESHING", kind: null, index: false, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWEST, bottom: -require("__exportStarResult1").BADGE_PADDING, right: -require("__exportStarResult1").BADGE_PADDING, padding: require("__exportStarResult1").BADGE_PADDING, height: 22, width: 22, alignItems: "center", justifyContent: "center" };
obj.outerRing = obj1;
const obj4 = arg1(dependencyMap[6]);
obj.innerFill = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_STRONG };
const items = [{ rotate: "90deg" }, { scaleX: -1 }];
obj.progressRing = { position: "absolute", transform: items };
let closure_10 = obj4.createStyles(obj);
let closure_11 = { code: "function LurkerPreviewCooldownBadgeTsx1(){const{PROGRESS_CIRCUMFERENCE,animatedProgress}=this.__closure;return{strokeDashoffset:PROGRESS_CIRCUMFERENCE*(1-animatedProgress.get())};}" };
const obj2 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_STRONG };
const memoResult = importAllResult.memo(function LurkerPreviewCooldownBadge(expiresAt) {
  expiresAt = expiresAt.expiresAt;
  const arg1 = expiresAt;
  let LURKER_PREVIEW_PERSIST_MS = expiresAt.totalDurationMs;
  if (LURKER_PREVIEW_PERSIST_MS === undefined) {
    LURKER_PREVIEW_PERSIST_MS = arg1(dependencyMap[9]).LURKER_PREVIEW_PERSIST_MS;
  }
  const importDefault = LURKER_PREVIEW_PERSIST_MS;
  let dependencyMap;
  let __exportStarResult1;
  const tmp3 = callback2();
  let obj = arg1(dependencyMap[10]);
  const items = [expiresAt, LURKER_PREVIEW_PERSIST_MS];
  const token = obj.useToken(importDefault(dependencyMap[7]).colors.BACKGROUND_BRAND);
  const callback = importAllResult.useCallback(() => {
    const result = (expiresAt - Date.now()) / LURKER_PREVIEW_PERSIST_MS;
    let num = 0;
    if (result >= 0) {
      let num2 = 1;
      if (result <= 1) {
        num2 = result;
      }
      num = num2;
    }
    return 0.9 * num;
  }, items);
  dependencyMap = callback;
  let obj1 = arg1(dependencyMap[4]);
  const sharedValue = obj1.useSharedValue(callback());
  __exportStarResult1 = sharedValue;
  const items1 = [sharedValue, callback];
  const effect = importAllResult.useEffect(() => {
    const result = sharedValue.set(expiresAt(callback[11]).withTiming(callback(), closure_8, "animate-always"));
    const expiresAt = setInterval(() => {
      const result = __exportStarResult1.set(callback(callback2[11]).withTiming(callback2(), closure_8, "animate-always"));
    }, 1000);
    return () => {
      clearInterval(closure_0);
    };
  }, items1);
  let obj2 = arg1(dependencyMap[4]);
  const fn = function p() {
    return { strokeDashoffset: closure_7 * (1 - sharedValue.get()) };
  };
  obj = { PROGRESS_CIRCUMFERENCE: closure_7, animatedProgress: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 7162520447613;
  fn.__initData = closure_11;
  obj = { 1649302097: "50%", -866014378: 60, 77722194: 60, -1594137938: true };
  const items2 = [tmp3.outerRing, expiresAt.style];
  obj.style = items2;
  obj1 = { style: tmp3.innerFill };
  const animatedProps = obj2.useAnimatedProps(fn);
  obj2 = { "Null": null, "Null": null, style: tmp3.progressRing, children: <closure_9 stroke={token} strokeDasharray={closure_7} animatedProps={animatedProps} /> };
  obj1.children = jsx(importDefault(dependencyMap[5]), obj2);
  obj.children = <View {...obj1} />;
  return <View {...obj} />;
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/lurker_mode/native/LurkerPreviewCooldownBadge.tsx");

export default memoResult;
export const useHasExpired = function useHasExpired(prop) {
  const arg1 = prop;
  const tmp = callback(importAllResult.useState(null), 2);
  let closure_1 = tmp[1];
  const items = [prop];
  const effect = importAllResult.useEffect(() => {
    if (null != timeout) {
      const _Math = Math;
      const _Date = Date;
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => callback(closure_0), Math.max(0, timeout - Date.now()));
      return () => clearTimeout(closure_0);
    }
  }, items);
  return null != prop && tmp[0] === prop;
};
