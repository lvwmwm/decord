// Module ID: 1904
// Function ID: 1905
// Name: useDerivedValueCommon
// Dependencies: [19, 1827, 1839]
// Exports: useDerivedValueBase

// Module 1904 (useDerivedValueCommon)
import startMapper from "startMapper" /* 1827 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require, closure_0, dependencyMap;

let c2;
let c3;
({ useEffect: c2, useRef: c3 } = react);
let closure_4 = { code: "(function pnpm_useDerivedValueCommonTs1(){let[sharedValue,updater]=this.__closure;sharedValue.value=updater();})" };

export function useDerivedValueBase(__workletHash, arg1, __closure) {
  let items1;
  _require = __workletHash;
  dependencyMap = __closure;
  const tmp2 = closure_3(null);
  if (undefined === arg1) {
    let items = [];
    items[HermesBuiltin.arraySpread(items, __closure, 0)] = __workletHash.__workletHash;
    items1 = items;
  } else {
    items1 = [];
    const tmp3 = items1;
    const tmp4 = arg1;
    items1[HermesBuiltin.arraySpread(items1, arg1, 0)] = __workletHash.__workletHash;
  }
  if (null === tmp2.current) {
    const makeMutable = require("startMapper").makeMutable;
    require("startMapper");
    let obj = require("module_1839");
    tmp2.current = makeMutable(obj.initialUpdaterRun(__workletHash));
  }
  const current = tmp2.current;
  current(() => {
    let tmp2;
    let tmp3;
    let tmp4;
    const items = [closure_4, current, closure_0];
    [tmp2, tmp3, tmp4] = items;
    function pnpm_useDerivedValueCommonTs1() {
      closure_1_0.value = closure_1_1();
    }
    const items1 = [tmp3, tmp4];
    pnpm_useDerivedValueCommonTs1.__closure = items1;
    pnpm_useDerivedValueCommonTs1.__workletHash = 17204305388875;
    pnpm_useDerivedValueCommonTs1.__initData = tmp2;
    let obj = startMapper;
    const items2 = [current];
    closure_0 = obj.startMapper(pnpm_useDerivedValueCommonTs1, __closure, items2);
    return () => {
      const obj = __workletHash(__closure[1]);
      obj.stopMapper(closure_0);
    };
  }, items1);
  return current;
}
