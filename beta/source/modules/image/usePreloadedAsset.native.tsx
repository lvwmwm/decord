// Module ID: 16783
// Function ID: 16784
// Name: usePreloadedAsset
// Dependencies: [32, 19, 4826, 558, 576, 504, 1370, 16784, 5896, 2]

// Module 16783 (usePreloadedAsset)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4826 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, dependencyMap, nextPromise;

let _slicedToArray = _slicedToArray_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_2;
  let closure_3;
  let isAPNG;
  let timeoutMs;
  let tmp19;
  let tmp4;
  let tmp6;
  let tmp7;
  _require = arg0;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(16);
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (undefined === arg1) {
      obj2 = {};
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  ({ isAPNG, timeoutMs } = tmp4);
  let tmp5 = undefined === isAPNG || isAPNG;
  let num3 = 2000;
  if (undefined !== timeoutMs) {
    num3 = timeoutMs;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function f() {
      return AccessibilityStore.useReducedMotion;
    };
    cResult[2] = items;
    cResult[3] = fn;
    tmp7 = fn;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[4] === tmp5) {
    let tmp10;
    if (cResult[5] === stateFromStores) {
      tmp10 = cResult[6];
    }
    dependencyMap = tmp10;
    let tmp12 = !tmp10;
    if (tmp10) {
      tmp12 = null != num3(16784);
    }
    _slicedToArray = tmp12;
    let str = "image";
    if (tmp10) {
      str = "apng";
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + str + ":" + arg0;
    [tmp19, AccessibilityStore] = combined.useState(null);
    let str5 = "skipped";
    _slicedToArray(combined.useState(null), 2);
    const obj5 = combined;
    if (null != arg0) {
      str5 = "skipped";
      if (tmp12) {
        let key;
        if (tmp19 != null) {
          key = tmp19.key;
        }
        let str6 = "pending";
        if (key === combined) {
          str6 = tmp19.status;
        }
        str5 = str6;
      }
    }
    if (cResult[7] === tmp12) {
      if (cResult[8] === combined) {
        if (cResult[9] === tmp10) {
          if (cResult[10] === num3) {
            let tmp21;
            let tmp22;
            let tmp24;
            if (cResult[11] === arg0) {
              tmp21 = cResult[12];
              tmp22 = cResult[13];
            }
            const effect = obj5.useEffect(tmp21, tmp22);
            if (cResult[14] !== str5) {
              const obj3 = { status: str5 };
              cResult[14] = str5;
              cResult[15] = obj3;
              tmp24 = obj3;
            } else {
              tmp24 = cResult[15];
            }
            return tmp24;
          }
        }
      }
    }
    class P {
      constructor() {
        tmp = c0;
        if (null != c0) {
          tmp2 = closure_3;
          if (tmp2) {
            flag = false;
            c0 = false;
            complete = function complete(arg0) {

            };
            tmp3 = globalThis;
            _setTimeout = setTimeout;
            tmp4 = complete;
            closure_2 = setTimeout(() => {
              if (typeof complete === "function") {
                const tmp = c0;
                if (!tmp) {
                  c0 = true;
                  const obj = { key: combined, status: "timed-out" };
                  AccessibilityStore(obj);
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }, complete);
            tmp5 = closure_2;
            if (tmp5) {
              tmp6 = timeoutMs;
              tmp7 = closure_2;
              if (null != timeoutMs(closure_2[7])) {
                tmp10 = timeoutMs;
                tmp11 = closure_2;
                obj2 = timeoutMs(closure_2[7]);
                preloadResult = obj2.preload(tmp);
              }
              nextPromise = preloadResult.then(() => {
                if (typeof complete === "function") {
                  const tmp = c0;
                  if (!tmp) {
                    c0 = true;
                    const obj = { key: combined, status: "preloaded" };
                    AccessibilityStore(obj);
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }, () => {
                if (typeof complete === "function") {
                  const tmp = c0;
                  if (!tmp) {
                    c0 = true;
                    const obj = { key: combined, status: "skipped" };
                    AccessibilityStore(obj);
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              });
              return () => {
                c0 = true;
                clearTimeout(closure_2);
              };
            }
            tmp8 = timeoutMs;
            tmp9 = closure_2;
            obj = timeoutMs(closure_2[8]);
            num = 1000;
            preloadResult = obj.preload(tmp, tmp4 + 1000);
          }
        }
        return;
      }
    }
    const items1 = [arg0, combined, tmp12, tmp10, num3];
    cResult[7] = tmp12;
    cResult[8] = combined;
    cResult[9] = tmp10;
    cResult[10] = num3;
    cResult[11] = arg0;
    cResult[12] = P;
    cResult[13] = items1;
    tmp22 = items1;
    tmp21 = P;
  }
  const tmpResult2 = tmp(1370);
  const tmp11 = tmpResult2.isAndroid() && tmp5 && !stateFromStores;
  cResult[4] = tmp5;
  cResult[5] = stateFromStores;
  cResult[6] = tmp11;
  tmp10 = tmp11;
}) : ((arg0) => {
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
    tmp4 = null != num(16784);
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
          if (null != num(closure_2[7])) {
            const obj2 = num(closure_2[7]);
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
        let obj = num(closure_2[8]);
        preloadResult = obj.preload(tmp, tmp4 + 1000);
      }
    }
  }, items1);
  return { status };
});
const result = size.fileFinishedImporting("modules/image/usePreloadedAsset.native.tsx");

export default tmp2;
