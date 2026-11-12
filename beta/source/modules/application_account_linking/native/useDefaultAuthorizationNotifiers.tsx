// Module ID: 18695
// Function ID: 18696
// Name: useDefaultAuthorizationNotifiers
// Dependencies: [19, 2117, 1072, 504, 5898, 6819, 5869, 1113, 3478, 2]
// Exports: useDefaultAuthorizationNotifiers

// Module 18695 (useDefaultAuthorizationNotifiers)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import _modDef3478 from "module_3478" /* 3478 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5869 */;
import react_mod from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 2117 */;
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
              const obj = { text: intl.string(_modDef3478.uG6teD) };
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
