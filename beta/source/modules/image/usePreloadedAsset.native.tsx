// Module ID: 17424
// Function ID: 17425
// Name: usePreloadedAsset
// Dependencies: [32, 19, 4750, 558, 568, 504, 1368, 17425, 5802, 2]

// Module 17424 (usePreloadedAsset)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4750 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/image/usePreloadedAsset.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const cResult = require("c").c(16);
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (undefined === arg1) {
      obj2 = {};
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  ({ isAPNG, timeoutMs } = tmp4);
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
    let tmp7 = fn;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp6, tmp7);
  if (cResult[4] === (undefined === isAPNG || isAPNG)) {
    if (cResult[5] === stateFromStores) {
      let tmp10 = cResult[6];
    }
    dependencyMap = tmp10;
    let tmp12 = !tmp10;
    if (tmp10) {
      tmp12 = null != num3(17425);
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
            if (cResult[11] === arg0) {
              let tmp21 = cResult[12];
              let tmp22 = cResult[13];
            }
            const effect = obj5.useEffect(tmp21, tmp22);
            if (cResult[14] !== str5) {
              const obj3 = { status: str5 };
              cResult[14] = str5;
              cResult[15] = obj3;
              let tmp24 = obj3;
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
          if (closure_3) {
            flag = false;
            c0 = false;
            complete = function complete(arg0) {

            };
            tmp3 = globalThis;
            _setTimeout = setTimeout;
            tmp4 = complete;
            closure_2 = setTimeout(() => {
              if (typeof complete === "function") {
                if (!c0) {
                  c0 = true;
                  const obj = { key: combined, status: "timed-out" };
                  AccessibilityStore(obj);
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }, complete);
            tmp5 = closure_2;
            if (closure_2) {
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
                  if (!c0) {
                    c0 = true;
                    const obj = { key: combined, status: "preloaded" };
                    AccessibilityStore(obj);
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }, () => {
                if (typeof complete === "function") {
                  if (!c0) {
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
    obj5 = combined;
    const tmp18 = _slicedToArray(combined.useState(null), 2);
  }
  const tmpResult = require("initialize");
  const tmp11 = require("PlatformUtils").isAndroid() && (undefined === isAPNG || isAPNG) && !stateFromStores;
  cResult[4] = undefined === isAPNG || isAPNG;
  cResult[5] = stateFromStores;
  cResult[6] = tmp11;
  tmp10 = tmp11;
}) : ((arg0) => {
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
  _slicedToArray = undefined;
  let combined;
  c5 = undefined;
  const items = [c5];
  const stateFromStores = require("initialize").useStateFromStores(items, () => _undefined.useReducedMotion);
  let obj2 = require("initialize");
  const tmp3 = require("PlatformUtils").isAndroid() && flag && !stateFromStores;
  dependencyMap = tmp3;
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = null != num(17425);
  }
  _slicedToArray = tmp4;
  let str = "image";
  if (tmp3) {
    str = "apng";
  }
  combined = "" + str + ":" + arg0;
  const obj3 = require("PlatformUtils");
  const obj4 = combined;
  [tmp9, c5] = combined.useState(null);
  let status = "skipped";
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
    if (null != c0) {
      if (closure_3) {
        c0 = false;
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          if (!c0) {
            c0 = true;
            const obj = { key: combined, status: "timed-out" };
            c5(obj);
          }
        }, timeout);
        if (dependencyMap) {
          if (null != num(17425)) {
            let preloadResult = num(17425).preload(tmp);
            const obj2 = num(17425);
          }
          preloadResult.then(() => {
            if (!c0) {
              c0 = true;
              const obj = { key: combined, status: "preloaded" };
              c5(obj);
            }
          }, () => {
            if (!c0) {
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
        preloadResult = num(5802).preload(tmp, timeout + 1000);
        let obj = num(5802);
      }
    }
  }, items1);
  return { status };
});
