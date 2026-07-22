// Module ID: 1740
// Function ID: 19499
// Name: useDerivedValue
// Dependencies: [0, 1, 2, 89, 31]
// Exports: useDerivedValue

// Module 1740 (useDerivedValue)
import __exportStarResult1 from "__exportStarResult1";
import module_1 from "module_1";

({ useEffect: closure_3, useRef: closure_4 } = module_1);
let closure_5 = { code: "function pnpm_useDerivedValueTs1(){const{sharedValue,updater}=this.__closure;sharedValue.value=updater();}" };

export const useDerivedValue = function useDerivedValue(fn, items) {
  let combined = items;
  items = fn;
  const tmp = callback3(null);
  let __closure = fn.__closure;
  if (null == __closure) {
    __closure = {};
  }
  let values = Object.values(__closure);
  let dependencyMap = values;
  let length = items(dependencyMap[2]).shouldBeUseWeb() && !values.length;
  if (length) {
    length = null != combined;
    const arr3 = combined;
  }
  if (length) {
    length = arr3.length;
  }
  if (length) {
    dependencyMap = combined;
    values = combined;
  }
  if (undefined === combined) {
    items = [];
    const items1 = [fn.__workletHash];
    combined = items.concat(callback(values), items1);
  } else {
    combined.push(fn.__workletHash);
  }
  if (null === tmp.current) {
    const obj3 = items(dependencyMap[3]);
    tmp.current = obj3.makeMutable(items(dependencyMap[4]).initialUpdaterRun(fn));
    const obj4 = items(dependencyMap[4]);
  }
  const current = tmp.current;
  const callback = current;
  callback2(() => {
    /* worklet (recovered source) */ function pnpm_useDerivedValueTs1(){const{sharedValue,updater}=this.__closure;sharedValue.value=updater();}
    pnpm_useDerivedValueTs1.__closure = { sharedValue: current, updater: callback };
    pnpm_useDerivedValueTs1.__workletHash = 1316501239615;
    pnpm_useDerivedValueTs1.__initData = closure_5;
    const items = [current];
    const callback = callback(combined[3]).startMapper(pnpm_useDerivedValueTs1, combined, items);
    return () => {
      callback(closure_1[3]).stopMapper(callback);
    };
  }, combined);
  return current;
};
