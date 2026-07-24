// Module ID: 15131
// Function ID: 115103
// Name: useDefaultAuthorizationNotifiers
// Dependencies: [31, 6651, 653, 566, 4096, 8328, 3831, 1212, 2812, 2]
// Exports: useDefaultAuthorizationNotifiers

// Module 15131 (useDefaultAuthorizationNotifiers)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AppStates } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/application_account_linking/native/useDefaultAuthorizationNotifiers.tsx");

export const useDefaultAuthorizationNotifiers = function useDefaultAuthorizationNotifiers(startAuthorization, hasAlreadyLinked, value) {
  let obj = value;
  const _require = startAuthorization;
  let closure_1 = hasAlreadyLinked;
  if (value === undefined) {
    obj = {};
  }
  let flag = obj.showToastOnSuccess;
  if (flag === undefined) {
    flag = true;
  }
  let React;
  let c4;
  let previousWhen;
  React = React.useRef(false);
  const items = [c4];
  const stateFromStores = _require(flag[3]).useStateFromStores(items, () => _undefined.getState() === previousWhen.ACTIVE);
  const obj2 = _require(flag[3]);
  const items1 = [startAuthorization];
  const isInAppBrowserOpen = _require(flag[4]).useIsInAppBrowserOpen();
  let tmp4 = stateFromStores;
  const callback = React.useCallback((arg0) => {
    result.current = true;
    return startAuthorization(arg0);
  }, items1);
  if (stateFromStores) {
    tmp4 = !isInAppBrowserOpen;
  }
  c4 = tmp4;
  const obj3 = _require(flag[4]);
  obj = { value: hasAlreadyLinked, shouldUpdate: tmp4 };
  previousWhen = _require(flag[5]).usePreviousWhen(obj);
  const items2 = [hasAlreadyLinked, previousWhen, flag, tmp4];
  const effect = React.useEffect(() => {
    if (ref.current) {
      if (false === previousWhen) {
        if (true === hasAlreadyLinked) {
          if (c4) {
            ref.current = false;
            if (flag) {
              let obj = hasAlreadyLinked(flag[6]);
              obj = {};
              const intl = startAuthorization(flag[7]).intl;
              obj.content = intl.string(hasAlreadyLinked(flag[8]).uG6teD);
              obj.key = "account-linked-toast";
              obj.open(obj);
            }
          }
        }
      }
    }
  }, items2);
  return callback;
};
