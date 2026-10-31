// Module ID: 12471
// Function ID: 12472
// Name: useConjureLiveReloadSetting
// Dependencies: [32, 19, 10864, 504, 12472, 10897, 12473, 2]
// Exports: useConjureLiveReloadSetting

// Module 12471 (useConjureLiveReloadSetting)
import conjureLiveReloadConnection from "conjureLiveReloadConnection" /* 10897 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ConjureLiveReloadStore from "ConjureLiveReloadStore" /* 10864 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_5;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const result = size.fileFinishedImporting("modules/conjure/live_reload/useConjureLiveReloadSetting.tsx");

export function useConjureLiveReloadSetting(arg0) {
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
  const tmp4 = stateFromStores(flag[4])(arg0);
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
      const tmpResult = tmp(tmp2[6]);
      str = tmpResult.liveReloadDescription(stateFromStores);
    }
    return obj3;
  }
  if (stateFromStores != null) {
    enabled = stateFromStores.enabled;
  }
}
