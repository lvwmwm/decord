// Module ID: 16995
// Function ID: 16996
// Name: useConjureLiveReloadSetting
// Dependencies: [32, 19, 13164, 13168, 558, 576, 504, 16996, 16997, 2]

// Module 16995 (useConjureLiveReloadSetting)
import ConjureConnectionStore from "ConjureConnectionStore" /* 13164 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ConjureLiveReloadStore from "ConjureLiveReloadStore" /* 13168 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const sendLiveReload = ConjureConnectionStore.sendLiveReload;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureLiveReloadSetting(arg0) {
  let closure_0;
  let closure_3;
  let closure_4;
  let enabled;
  let first;
  let flag;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp6;
  let tmp7;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureLiveReloadStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      return ConjureLiveReloadStore.getLiveReload(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(flag[6]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const tmp9 = stateFromStores(flag[7])(arg0);
  [flag, tmp11] = react.useState(null);
  _slicedToArray = tmp11;
  [tmp13, tmp14] = _slicedToArray(react.useState(null), 2);
  const tmp12 = _slicedToArray(react.useState(null), 2);
  react = tmp14;
  const tmp15 = null != tmp13 && stateFromStores !== tmp13.before;
  if (tmp15) {
    tmp14(null);
  }
  if (null != tmp13) {
    if (stateFromStores === tmp13.before) {
      enabled = tmp13.enabled;
    }
    const tmp17 = null != flag && flag === enabled;
    if (tmp17) {
      tmp11(null);
    }
    let closure_5 = tmp19;
    if (cResult[4] === (null != stateFromStores && null != flag && flag !== enabled)) {
      if (cResult[5] === flag) {
        if (cResult[6] === stateFromStores) {
          let tmp20;
          let tmp22;
          if (cResult[7] === arg0) {
            tmp20 = cResult[8];
          }
          if (flag == null) {
            flag = enabled;
          }
          if (flag == null) {
            flag = false;
          }
          if (cResult[9] !== stateFromStores) {
            let str = "";
            if (null != stateFromStores) {
              const tmpResult2 = tmp(flag[8]);
              str = tmpResult2.liveReloadDescription(stateFromStores);
            }
            cResult[9] = stateFromStores;
            cResult[10] = str;
            tmp22 = str;
          } else {
            tmp22 = cResult[10];
          }
          if (cResult[11] === (null != stateFromStores && null != flag && flag !== enabled)) {
            if (cResult[12] === tmp20) {
              if (cResult[13] === (null != stateFromStores && !tmp9)) {
                if (cResult[14] === flag) {
                  let tmp23;
                  if (cResult[15] === tmp22) {
                    tmp23 = cResult[16];
                  }
                  return tmp23;
                }
              }
            }
          }
          const obj2 = { available: null != stateFromStores && !tmp9, checked: flag, description: tmp22, changed: null != stateFromStores && null != flag && flag !== enabled, setChecked: tmp11, save: tmp20 };
          cResult[11] = null != stateFromStores && null != flag && flag !== enabled;
          cResult[12] = tmp20;
          cResult[13] = null != stateFromStores && !tmp9;
          cResult[14] = flag;
          cResult[15] = tmp22;
          cResult[16] = obj2;
          tmp23 = obj2;
        }
      }
    }
    const fn2 = function y() {
      let tmp = !closure_5;
      if (closure_5) {
        tmp = null == flag;
      }
      if (!tmp) {
        const tmp6 = flag;
        flag = sendLiveReload(closure_0, flag);
        if (flag) {
          const obj = { enabled: tmp6, before: stateFromStores };
          tmp14(obj);
          closure_3(null);
          flag = true;
        }
        tmp = flag;
      }
      return tmp;
    };
    cResult[4] = null != stateFromStores && null != flag && flag !== enabled;
    cResult[5] = flag;
    cResult[6] = stateFromStores;
    cResult[7] = arg0;
    cResult[8] = fn2;
    tmp20 = fn2;
  }
  if (stateFromStores != null) {
    enabled = stateFromStores.enabled;
  }
}) : (function useConjureLiveReloadSetting(arg0) {
  let closure_0;
  let closure_3;
  let closure_4;
  let enabled;
  let flag;
  let str;
  let tmp6;
  let tmp8;
  let tmp9;
  _require = arg0;
  let tmp = _require;
  let obj = require("get initialized");
  const items = [ConjureLiveReloadStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureLiveReloadStore.getLiveReload(closure_0), items1);
  const tmp2 = flag;
  const tmp4 = stateFromStores(flag[7])(arg0);
  [flag, tmp6] = react.useState(null);
  _slicedToArray = tmp6;
  [tmp8, tmp9] = _slicedToArray(react.useState(null), 2);
  const obj2 = react;
  const tmp7 = _slicedToArray(react.useState(null), 2);
  react = tmp9;
  const tmp10 = null != tmp8 && stateFromStores !== tmp8.before;
  if (tmp10) {
    tmp9(null);
  }
  if (null != tmp8) {
    if (stateFromStores === tmp8.before) {
      enabled = tmp8.enabled;
    }
    const tmp12 = null != flag && flag === enabled;
    if (tmp12) {
      tmp6(null);
    }
    let closure_5 = tmp14;
    const items2 = [null != stateFromStores && null != flag && flag !== enabled, flag, stateFromStores, arg0];
    let tmp16 = null != stateFromStores;
    const callback = obj2.useCallback(() => {
      let tmp9;
      let tmp = !closure_5;
      if (closure_5) {
        tmp = null == flag;
      }
      if (!tmp) {
        const tmp6 = flag;
        flag = sendLiveReload(closure_0, flag);
        if (flag) {
          const obj = { enabled: tmp6, before: stateFromStores };
          tmp9 = tmp9(obj);
          closure_3(null);
          flag = true;
        }
        tmp = flag;
      }
      return tmp;
    }, items2);
    if (tmp16) {
      tmp16 = !tmp4;
    }
    const obj3 = { available: tmp16, checked: flag, description: str, changed: null != stateFromStores && null != flag && flag !== enabled, setChecked: tmp6, save: callback };
    if (flag == null) {
      flag = enabled;
    }
    if (flag == null) {
      flag = false;
    }
    str = "";
    if (null != stateFromStores) {
      const tmpResult = tmp(tmp2[8]);
      str = tmpResult.liveReloadDescription(stateFromStores);
    }
    return obj3;
  }
  if (stateFromStores != null) {
    enabled = stateFromStores.enabled;
  }
});
const result = size.fileFinishedImporting("modules/conjure/live_reload/useConjureLiveReloadSetting.tsx");

export const useConjureLiveReloadSetting = tmp2;
