// Module ID: 16781
// Function ID: 16782
// Name: usePreloadedAsset
// Dependencies: [32, 19, 4825, 504, 1364, 16782, 5899, 2]
// Exports: default

// Module 16781 (usePreloadedAsset)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const result = size.fileFinishedImporting("modules/image/usePreloadedAsset.native.tsx");

export default function usePreloadedAsset(arg0) {
  let c5;
  let closure_0;
  let closure_2;
  let closure_3;
  let tmp9;
  let useReducedMotion;
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.isAPNG;
  if (flag === undefined) {
    flag = true;
  }
  let num = obj.timeoutMs;
  if (num === undefined) {
    num = 2000;
  }
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let combined;
  c5 = undefined;
  let tmp = dependencyMap;
  let obj2 = require("get initialized");
  const items = [c5];
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj3 = require("PlatformUtils");
  const tmp3 = obj3.isAndroid() && flag && !stateFromStores;
  dependencyMap = tmp3;
  let tmp4 = !tmp3;
  if (tmp3) {
    let tmp5 = num;
    tmp4 = null != num(16782);
  }
  _slicedToArray = tmp4;
  let str = "image";
  if (tmp3) {
    str = "apng";
  }
  combined = "" + str + ":" + arg0;
  [tmp9, c5] = _slicedToArray(combined.useState(null), 2);
  let status = "skipped";
  const obj4 = combined;
  const tmp8 = _slicedToArray(combined.useState(null), 2);
  if (null != arg0) {
    status = "skipped";
    if (tmp4) {
      let key;
      if (tmp9 != null) {
        key = tmp9.key;
      }
      let str3 = "pending";
      if (key === combined) {
        str3 = tmp9.status;
      }
      status = str3;
    }
  }
  const items1 = [arg0, combined, tmp4, tmp3, num];
  const effect = obj4.useEffect(() => {
    let closure_1;
    let timeout;
    let tmp = c0;
    if (null != c0) {
      const tmp2 = closure_3;
      if (tmp2) {
        c0 = false;
        const _setTimeout = setTimeout;
        const tmp4 = timeout;
        timeout = setTimeout(() => {
          const tmp = c0;
          if (!tmp) {
            c0 = true;
            const obj = { key: combined, status: "timed-out" };
            c5(obj);
          }
        }, timeout);
        const tmp5 = closure_2;
        if (tmp5) {
          let preloadResult;
          if (null != num(closure_2[5])) {
            const obj2 = num(closure_2[5]);
            preloadResult = obj2.preload(tmp);
          }
          preloadResult.then(() => {
            const tmp = c0;
            if (!tmp) {
              c0 = true;
              const obj = { key: combined, status: "preloaded" };
              c5(obj);
            }
          }, () => {
            const tmp = c0;
            if (!tmp) {
              c0 = true;
              const obj = { key: combined, status: "skipped" };
              c5(obj);
            }
          });
          return () => {
            c0 = true;
            clearTimeout(closure_1);
          };
        }
        let obj = num(closure_2[6]);
        preloadResult = obj.preload(tmp, tmp4 + 1000);
      }
    }
  }, items1);
  return { status };
};
