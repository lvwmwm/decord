// Module ID: 18271
// Function ID: 18272
// Name: useDefaultAuthorizationNotifiers
// Dependencies: [19, 1994, 1072, 504, 5737, 6726, 5707, 1114, 3317, 2]
// Exports: useDefaultAuthorizationNotifiers

// Module 18271 (useDefaultAuthorizationNotifiers)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import _modDef3317 from "module_3317" /* 3317 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import react_mod from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 1994 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let react = react_mod;
const AppStates = Constants.AppStates;
const result = size.fileFinishedImporting("modules/application_account_linking/native/useDefaultAuthorizationNotifiers.tsx");

export function useDefaultAuthorizationNotifiers(startAuthorization, hasAlreadyLinked) {
  let ref;
  _require = startAuthorization;
  let closure_1 = hasAlreadyLinked;
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
  const items1 = [startAuthorization];
  const obj4 = require("BrowserManager");
  const isInAppBrowserOpen = obj4.useIsInAppBrowserOpen();
  const callback = react.useCallback((arg0) => {
    ref.current = true;
    return startAuthorization(arg0);
  }, items1);
  const tmp2 = flag;
  if (stateFromStores) {
    stateFromStores = !isInAppBrowserOpen;
  }
  const obj5 = { value: hasAlreadyLinked, shouldUpdate: stateFromStores };
  const tmpResult = tmp(tmp2[5]);
  previousWhen = tmpResult.usePreviousWhen(obj5);
  const items2 = [hasAlreadyLinked, previousWhen, flag, stateFromStores];
  const effect = obj2.useEffect(() => {
    let intl;
    if (ref.current) {
      if (false === previousWhen) {
        if (true === hasAlreadyLinked) {
          const tmp3 = stateFromStores;
          if (tmp3) {
            tmp.current = false;
            if (false) {
              const obj = { text: intl.string(_modDef3317.uG6teD) };
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
}
