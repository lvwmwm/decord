// Module ID: 1888
// Function ID: 1889
// Name: useAnimatedStyleNative
// Dependencies: [19, 1889, 1891, 1839, 1705, 1826, 1827]
// Exports: useAnimatedStyle

// Module 1888 (useAnimatedStyleNative)
import styleUpdater from "styleUpdater" /* 1889 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require, dependencyMap;

let c2;
let c3;
let tmp9;
const startMapper = tmp9(1827);
({ useEffect: c2, useRef: c3 } = react);
let closure_4 = { code: "(function pnpm_useAnimatedStyleNativeTs1(){let[updater,adaptersArray]=this.__closure;const newValues=updater();adaptersArray.forEach(function(adapter){adapter(newValues);});return newValues;})" };
let closure_5 = { code: "(function pnpm_useAnimatedStyleNativeTs2(forceUpdate){let[styleUpdater,shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps]=this.__closure;styleUpdater(shareableViewDescriptors,updaterFn,remoteState,areAnimationsActive,isAnimatedProps,forceUpdate);})" };

export function useAnimatedStyle(pnpm_indexTsx1, items2, arg2, arg3) {
  let c7;
  let closure_1;
  let obj4;
  let obj5;
  let tmp9Result4;
  let tmp9Result5;
  let viewDescriptors;
  _require = pnpm_indexTsx1;
  dependencyMap = arg2;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let ref;
  let items1;
  let sharedValue;
  c7 = undefined;
  let shareableViewDescriptors;
  let tmp2 = ref;
  const tmp3 = ref(null);
  ref = tmp3;
  let __closure = pnpm_indexTsx1.__closure;
  if (__closure == null) {
    __closure = [];
  }
  if (arg2) {
    const _Array = Array;
    let tmp5 = arg2;
    if (!Array.isArray(arg2)) {
      let items = [arg2];
      tmp5 = items;
    }
    items1 = tmp5;
  } else {
    items1 = [];
  }
  let workletsHash = null;
  if (arg2) {
    const tmp7 = _require;
    const tmp8 = dependencyMap;
    let obj = require("styleUpdater");
    workletsHash = obj.buildWorkletsHash(items1);
  }
  let tmp9 = _require;
  const obj2 = require("module_1891");
  sharedValue = obj2.useSharedValue(true);
  items2 = [];
  items2[HermesBuiltin.arraySpread(items2, __closure, 0)] = pnpm_indexTsx1.__workletHash;
  if (workletsHash) {
    items2.push(workletsHash);
  }
  if (!tmp3.current) {
    let tmp9Result = tmp9(1839);
    const initialUpdaterRunResult = tmp9Result.initialUpdaterRun(pnpm_indexTsx1);
    const obj3 = { initial: obj4, remoteState: tmp9Result4.makeShareable(obj5), viewDescriptors: tmp9Result5.makeViewDescriptorsSet(), styleUpdaterContainer: { current: "r" } };
    obj4 = { value: initialUpdaterRunResult, updater: pnpm_indexTsx1 };
    obj5 = { last: initialUpdaterRunResult, animations: {}, isAnimationCancelled: false, isAnimationRunning: false };
    tmp9Result4 = tmp9(1705);
    tmp3.current = obj3;
    tmp9Result5 = tmp9(1826);
  }
  const current = tmp3.current;
  ({ remoteState: c7, viewDescriptors } = current);
  shareableViewDescriptors = viewDescriptors.shareableViewDescriptors;
  const initial = current.initial;
  items2.push(shareableViewDescriptors);
  const tmp15 = flag(() => {
    let tmp;
    let tmp11;
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp2 = closure_0;
    if (closure_1) {
      const items = [closure_4, tmp, items1];
      [tmp6, tmp7, tmp8] = items;
      function pnpm_useAnimatedStyleNativeTs1() {
        const tmp = closure_1_0();
        let closure_0 = tmp;
        const item = closure_1_1.forEach((fn) => {
          fn(closure_0);
        });
        return tmp;
      }
      items1 = [tmp7, tmp8];
      pnpm_useAnimatedStyleNativeTs1.__closure = items1;
      pnpm_useAnimatedStyleNativeTs1.__workletHash = 14298306573507;
      pnpm_useAnimatedStyleNativeTs1.__initData = tmp6;
      tmp2 = pnpm_useAnimatedStyleNativeTs1;
    }
    const items2 = [closure_5, styleUpdater.styleUpdater, shareableViewDescriptors, tmp2, c7, sharedValue, flag];
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items2;
    function pnpm_useAnimatedStyleNativeTs2(arg0) {
      _undefined(c1, c2, c3, c4, c5, arg0);
    }
    const items3 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
    pnpm_useAnimatedStyleNativeTs2.__closure = items3;
    pnpm_useAnimatedStyleNativeTs2.__workletHash = 13981556691006;
    pnpm_useAnimatedStyleNativeTs2.__initData = tmp11;
    if (ref.current) {
      ref.current.styleUpdaterContainer.current = pnpm_useAnimatedStyleNativeTs2;
    }
    const tmp9Result = startMapper;
    closure_0 = tmp9Result.startMapper(pnpm_useAnimatedStyleNativeTs2, __closure);
    return () => {
      const obj = pnpm_indexTsx1(closure_2_1[6]);
      obj.stopMapper(closure_0);
    };
  }, items2);
  let items3 = [sharedValue];
  const tmp16 = flag(() => {
    sharedValue.value = true;
    return () => {
      sharedValue.value = false;
    };
  }, items3);
  const tmp2Result = tmp2(null);
  if (!tmp2Result.current) {
    const styleUpdaterContainer = tmp3.current.styleUpdaterContainer;
    const obj6 = { viewDescriptors, initial };
    const tmp9Result6 = tmp9(1889);
    tmp2Result.current = tmp9Result6.createAnimatedStyleHandle(obj6, styleUpdaterContainer);
  }
  return tmp2Result.current;
}
