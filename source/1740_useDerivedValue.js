// Module ID: 1740
// Function ID: 19500
// Name: useDerivedValue
// Dependencies: [65, 31, 1585, 1626, 1654]
// Exports: useDerivedValue

// Module 1740 (useDerivedValue)
import _toConsumableArray from "_toConsumableArray";
import result from "result";

let closure_3;
let closure_4;
const require = arg1;
({ useEffect: closure_3, useRef: closure_4 } = result);
let closure_5 = { code: "function pnpm_useDerivedValueTs1(){const{sharedValue,updater}=this.__closure;sharedValue.value=updater();}" };

export const useDerivedValue = function useDerivedValue(fn, items) {
  let combined = items;
  const _require = fn;
  const tmp = callback2(null);
  let __closure = fn.__closure;
  if (null == __closure) {
    __closure = {};
  }
  let values = Object.values(__closure);
  combined = values;
  let length = _require(combined[2]).shouldBeUseWeb() && !values.length;
  if (length) {
    length = null != combined;
    const arr3 = combined;
  }
  if (length) {
    length = arr3.length;
  }
  if (length) {
    values = combined;
  }
  if (undefined === combined) {
    items = [];
    const items1 = [fn.__workletHash];
    combined = items.concat(current(values), items1);
  } else {
    combined.push(fn.__workletHash);
  }
  if (null === tmp.current) {
    const obj3 = _require(combined[3]);
    tmp.current = obj3.makeMutable(_require(combined[4]).initialUpdaterRun(fn));
    const obj4 = _require(combined[4]);
  }
  current = tmp.current;
  callback(() => {
    /* worklet (recovered source) */ function pnpm_useDerivedValueTs1(){const{sharedValue,updater}=this.__closure;sharedValue.value=updater();}
    pnpm_useDerivedValueTs1.__closure = { sharedValue: current, updater: callback };
    pnpm_useDerivedValueTs1.__workletHash = 1316501239615;
    pnpm_useDerivedValueTs1.__initData = outer1_5;
    const items = [current];
    callback = callback(combined[3]).startMapper(pnpm_useDerivedValueTs1, combined, items);
    return () => {
      callback(combined[3]).stopMapper(callback);
    };
  }, combined);
  return current;
};
