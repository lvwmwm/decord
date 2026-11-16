// Module ID: 13197
// Function ID: 13198
// Name: useConjureLiveReloadSetting
// Dependencies: [32, 19, 7373, 504, 7390, 13198, 2]
// Exports: useConjureLiveReloadSetting

// Module 13197 (useConjureLiveReloadSetting)
import conjureLiveReloadConnection from "conjureLiveReloadConnection" /* 7390 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ConjureLiveReloadStore_mod from "ConjureLiveReloadStore" /* 7373 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let react = react_mod;
let ConjureLiveReloadStore = ConjureLiveReloadStore_mod;
const result = size.fileFinishedImporting("modules/conjure/live_reload/useConjureLiveReloadSetting.tsx");

export function useConjureLiveReloadSetting(arg0) {
  let callback;
  let closure_0;
  let closure_3;
  let closure_4;
  let enabled;
  let flag;
  let stateFromStores;
  let str;
  let tmp7;
  let tmp8;
  _require = arg0;
  let tmp = _require;
  let obj = require("get initialized");
  const items = [ConjureLiveReloadStore];
  const items1 = [arg0];
  const tmp2 = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => ConjureLiveReloadStore.getLiveReload(closure_0), items1);
  let obj2 = react;
  const tmp4 = flag(react.useState(null), 2);
  flag = tmp4[0];
  react = tmp5;
  [tmp7, tmp8] = flag(react.useState(null), 2);
  ConjureLiveReloadStore = tmp8;
  const tmp6 = flag(react.useState(null), 2);
  const tmp9 = null != tmp7 && stateFromStores !== tmp7.before;
  if (tmp9) {
    tmp8(null);
  }
  if (null != tmp7) {
    if (stateFromStores === tmp7.before) {
      enabled = tmp7.enabled;
    }
    const tmp11 = null != flag && flag === enabled;
    if (tmp11) {
      tmp4[1](null);
    }
    let closure_5 = tmp13;
    const items2 = [tmp13, flag, stateFromStores, arg0];
    const obj3 = { available: null != stateFromStores, checked: flag, description: str, changed: null != stateFromStores && null != flag && flag !== enabled, setChecked: tmp4[1], save: callback };
    callback = obj2.useCallback(() => {
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
          tmp8(obj2);
          closure_3(null);
          flag = true;
        }
        tmp = flag;
      }
      return tmp;
    }, items2);
    if (flag == null) {
      flag = enabled;
    }
    if (flag == null) {
      flag = false;
    }
    str = "";
    if (null != stateFromStores) {
      const tmpResult = tmp(tmp2[5]);
      str = tmpResult.liveReloadDescription(stateFromStores);
    }
    return obj3;
  }
  if (stateFromStores != null) {
    enabled = stateFromStores.enabled;
  }
}
