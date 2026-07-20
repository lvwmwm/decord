// Module ID: 14693
// Function ID: 110898
// Name: useHasExpired
// Dependencies: []
// Exports: useHasExpired

// Module 14693 (useHasExpired)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = 2 * Math.PI * 6;
let obj = { duration: 1000, easing: arg1(dependencyMap[4]).Easing.linear };
let closure_9 = importDefault(dependencyMap[4]).createAnimatedComponent(arg1(dependencyMap[5]).Circle);
const importDefaultResult = importDefault(dependencyMap[4]);
obj = {};
const obj1 = { <string:1106039242>: true, Stage: null, <string:2334770770>: -1, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWEST, bottom: -arg1(dependencyMap[8]).BADGE_PADDING, right: -arg1(dependencyMap[8]).BADGE_PADDING, padding: arg1(dependencyMap[8]).BADGE_PADDING, height: 22, width: 22, alignItems: "center", justifyContent: "center" };
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
  let closure_3;
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
  closure_3 = sharedValue;
  const items1 = [sharedValue, callback];
  const effect = importAllResult.useEffect(() => {
    const result = sharedValue.set(expiresAt(callback[11]).withTiming(callback(), closure_8, "animate-always"));
    const expiresAt = setInterval(() => {
      const result = closure_3.set(callback(callback2[11]).withTiming(callback2(), closure_8, "animate-always"));
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
  obj = { alignItems: "absolute", justifyContent: "50%", position: "hidden", alignSelf: "50%" };
  const items2 = [tmp3.outerRing, expiresAt.style];
  obj.style = items2;
  obj1 = { style: tmp3.innerFill };
  const animatedProps = obj2.useAnimatedProps(fn);
  obj2 = { aze: "<string:16777479>", azj: "<string:36295491>", style: tmp3.progressRing };
  const obj3 = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, stroke: token, strokeDasharray: closure_7, animatedProps };
  obj2.children = <closure_9 {...obj3} />;
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
