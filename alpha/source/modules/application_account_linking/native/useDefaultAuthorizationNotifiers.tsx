// Module ID: 16682
// Function ID: 16683
// Name: useDefaultAuthorizationNotifiers
// Dependencies: [19, 1999, 1085, 558, 576, 504, 5053, 5922, 4809, 1126, 3312, 2]

// Module 16682 (useDefaultAuthorizationNotifiers)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import _modDef3312 from "module_3312" /* 3312 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import react_mod from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 1999 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
const AppStates = Constants.AppStates;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDefaultAuthorizationNotifiers(arg0, value, arg2) {
  let closure_0;
  let closure_2;
  let ref;
  let state;
  let tmp11;
  let tmp4;
  let tmp6;
  let tmp7;
  _require = arg0;
  let closure_1 = value;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(15);
  if (cResult[0] !== arg2) {
    let obj2 = arg2;
    if (undefined === arg2) {
      obj2 = {};
    }
    cResult[0] = arg2;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const showToastOnSuccess = tmp4.showToastOnSuccess;
  dependencyMap = tmp5;
  const obj3 = react;
  react = react.useRef(false);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [state];
    const fn = function v() {
      return state.getState() === previousWhen.ACTIVE;
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
  const tmpResult3 = tmp(5053);
  const isInAppBrowserOpen = tmpResult3.useIsInAppBrowserOpen();
  if (cResult[4] !== arg0) {
    const fn2 = function _(arg0) {
      ref.current = true;
      return closure_0(arg0);
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[5];
  }
  state = tmp12;
  if (cResult[6] === (stateFromStores && !isInAppBrowserOpen)) {
    let tmp13;
    if (cResult[7] === value) {
      tmp13 = cResult[8];
    }
    const tmpResult4 = tmp(5922);
    const previousWhen = tmpResult4.usePreviousWhen(tmp13);
    if (cResult[9] === (stateFromStores && !isInAppBrowserOpen)) {
      if (cResult[10] === value) {
        if (cResult[11] === (undefined === showToastOnSuccess || showToastOnSuccess)) {
          let tmp15;
          let tmp16;
          if (cResult[12] === previousWhen) {
            tmp15 = cResult[13];
            tmp16 = cResult[14];
          }
          const effect = obj3.useEffect(tmp15, tmp16);
          return tmp11;
        }
      }
    }
    const fn3 = function k() {
      let intl;
      if (ref.current) {
        if (false === previousWhen) {
          if (true === closure_1) {
            const tmp3 = state;
            if (tmp3) {
              tmp.current = false;
              if (closure_2) {
                const obj = { text: intl.string(_modDef3312.uG6teD) };
                const open = ToastActionCreatorsDefault.open;
                ToastActionCreatorsDefault;
                intl = intl2.intl;
                open("account-linked-toast", obj);
              }
            }
          }
        }
      }
    };
    const items1 = [value, previousWhen, tmp5, stateFromStores && !isInAppBrowserOpen];
    cResult[9] = stateFromStores && !isInAppBrowserOpen;
    cResult[10] = value;
    cResult[11] = undefined === showToastOnSuccess || showToastOnSuccess;
    cResult[12] = previousWhen;
    cResult[13] = fn3;
    cResult[14] = items1;
    tmp16 = items1;
    tmp15 = fn3;
  }
  const obj4 = { value, shouldUpdate: stateFromStores && !isInAppBrowserOpen };
  cResult[6] = stateFromStores && !isInAppBrowserOpen;
  cResult[7] = value;
  cResult[8] = obj4;
  tmp13 = obj4;
}) : (function useDefaultAuthorizationNotifiers(arg0, value) {
  let closure_0;
  let ref;
  _require = arg0;
  let closure_1 = value;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.showToastOnSuccess;
  if (flag === undefined) {
    flag = true;
  }
  react = undefined;
  let stateFromStores;
  let previousWhen;
  const obj2 = react;
  react = react.useRef(false);
  const tmp = _require;
  const items = [stateFromStores];
  const obj3 = require("get initialized");
  stateFromStores = obj3.useStateFromStores(items, () => stateFromStores.getState() === previousWhen.ACTIVE);
  const items1 = [arg0];
  const obj4 = require("BrowserManager");
  const isInAppBrowserOpen = obj4.useIsInAppBrowserOpen();
  const callback = react.useCallback((arg0) => {
    ref.current = true;
    return closure_0(arg0);
  }, items1);
  const tmp2 = flag;
  if (stateFromStores) {
    stateFromStores = !isInAppBrowserOpen;
  }
  const obj5 = { value, shouldUpdate: stateFromStores };
  const tmpResult = tmp(tmp2[7]);
  previousWhen = tmpResult.usePreviousWhen(obj5);
  const items2 = [value, previousWhen, flag, stateFromStores];
  const effect = obj2.useEffect(() => {
    let intl;
    if (ref.current) {
      if (false === previousWhen) {
        if (true === closure_1) {
          const tmp3 = stateFromStores;
          if (tmp3) {
            tmp.current = false;
            if (false) {
              const obj = { text: intl.string(_modDef3312.uG6teD) };
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              intl = intl2.intl;
              open("account-linked-toast", obj);
            }
          }
        }
      }
    }
  }, items2);
  return callback;
});
const result = size.fileFinishedImporting("modules/application_account_linking/native/useDefaultAuthorizationNotifiers.tsx");

export const useDefaultAuthorizationNotifiers = tmp2;
