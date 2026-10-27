// Module ID: 12153
// Function ID: 12154
// Name: useConjureLiveReloadSetting
// Dependencies: [32, 19, 10711, 558, 576, 504, 12154, 10737, 12155, 2]

// Module 12153 (useConjureLiveReloadSetting)
import conjureLiveReloadConnection from "conjureLiveReloadConnection" /* 10737 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ConjureLiveReloadStore from "ConjureLiveReloadStore" /* 10711 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_5;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
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
    const items = [closure_5];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
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
  const tmpResult = tmp(flag[5]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const tmp9 = stateFromStores(flag[6])(arg0);
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
    closure_5 = tmp19;
    if (cResult[4] === (null != stateFromStores && null != flag && flag !== enabled)) {
      if (cResult[5] === flag) {
        if (cResult[6] === stateFromStores) {
          let tmp20;
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
            class F {
              constructor() {
                let tmp = !closure_5;
                if (closure_5) {
                  tmp = null == flag;
                }
                if (!tmp) {
                  const obj = conjureLiveReloadConnection;
                  const tmp7 = flag;
                  flag = obj.sendLiveReload(closure_0, flag);
                  if (flag) {
                    const obj2 = { enabled: tmp7, before: stateFromStores };
                    tmp14(obj2);
                    closure_3(null);
                    flag = true;
                  }
                  tmp = flag;
                }
                return tmp;
              }
            }
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
          class F {
            constructor() {
              let tmp = !closure_5;
              if (closure_5) {
                tmp = null == flag;
              }
              if (!tmp) {
                const obj = conjureLiveReloadConnection;
                const tmp7 = flag;
                flag = obj.sendLiveReload(closure_0, flag);
                if (flag) {
                  const obj2 = { enabled: tmp7, before: stateFromStores };
                  tmp14(obj2);
                  closure_3(null);
                  flag = true;
                }
                tmp = flag;
              }
              return tmp;
            }
          }
          tmp24[0] = null != stateFromStores && !tmp9;
          tmp24[1] = flag;
          tmp24[2] = tmp22;
          tmp24[3] = null != stateFromStores && null != flag && flag !== enabled;
          tmp24[4] = tmp11;
          tmp24[5] = tmp20;
          cResult[11] = null != stateFromStores && null != flag && flag !== enabled;
          cResult[12] = tmp20;
          cResult[13] = null != stateFromStores && !tmp9;
          cResult[14] = flag;
          cResult[15] = tmp22;
          cResult[16] = tmp24;
          tmp23 = tmp24;
        }
      }
    }
    class F {
      constructor() {
        let tmp = !closure_5;
        if (closure_5) {
          tmp = null == flag;
        }
        if (!tmp) {
          const obj = conjureLiveReloadConnection;
          const tmp7 = flag;
          flag = obj.sendLiveReload(closure_0, flag);
          if (flag) {
            const obj2 = { enabled: tmp7, before: stateFromStores };
            tmp14(obj2);
            closure_3(null);
            flag = true;
          }
          tmp = flag;
        }
        return tmp;
      }
    }
    cResult[4] = null != stateFromStores && null != flag && flag !== enabled;
    cResult[5] = flag;
    cResult[6] = stateFromStores;
    cResult[7] = arg0;
    cResult[8] = F;
    tmp20 = F;
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
  const items = [closure_5];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureLiveReloadStore.getLiveReload(closure_0), items1);
  let obj2 = react;
  const tmp2 = flag;
  const tmp4 = stateFromStores(flag[6])(arg0);
  [flag, tmp6] = react.useState(null);
  _slicedToArray = tmp6;
  let tmp7 = _slicedToArray(react.useState(null), 2);
  [tmp8, tmp9] = tmp7;
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
    closure_5 = tmp14;
    const items2 = [null != stateFromStores && null != flag && flag !== enabled, flag, stateFromStores, arg0];
    let tmp16 = null != stateFromStores;
    const callback = obj2.useCallback(() => {
      let tmp = !closure_5;
      if (closure_5) {
        tmp = null == flag;
      }
      if (!tmp) {
        const obj = conjureLiveReloadConnection;
        const tmp7 = flag;
        flag = obj.sendLiveReload(closure_0, flag);
        if (flag) {
          const obj2 = { enabled: tmp7, before: stateFromStores };
          stateFromStores(obj2);
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
