// Module ID: 14957
// Function ID: 112537
// Name: useDefaultAuthorizationNotifiers
// Dependencies: []
// Exports: useDefaultAuthorizationNotifiers

// Module 14957 (useDefaultAuthorizationNotifiers)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const AppStates = arg1(dependencyMap[2]).AppStates;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/application_account_linking/native/useDefaultAuthorizationNotifiers.tsx");

export const useDefaultAuthorizationNotifiers = function useDefaultAuthorizationNotifiers(startAuthorization, hasAlreadyLinked, value) {
  let obj = value;
  hasAlreadyLinked = startAuthorization;
  const importDefault = hasAlreadyLinked;
  if (value === undefined) {
    obj = {};
  }
  let flag = obj.showToastOnSuccess;
  if (flag === undefined) {
    flag = true;
  }
  const dependencyMap = flag;
  let React;
  let closure_4;
  let AppStates;
  React = React.useRef(false);
  const items = [closure_4];
  const stateFromStores = hasAlreadyLinked(dependencyMap[3]).useStateFromStores(items, () => tmp4.getState() === previousWhen.ACTIVE);
  const obj2 = hasAlreadyLinked(dependencyMap[3]);
  const items1 = [startAuthorization];
  const isInAppBrowserOpen = hasAlreadyLinked(dependencyMap[4]).useIsInAppBrowserOpen();
  let tmp4 = stateFromStores;
  const callback = React.useCallback((arg0) => {
    closure_3.current = true;
    return arg0(arg0);
  }, items1);
  if (stateFromStores) {
    tmp4 = !isInAppBrowserOpen;
  }
  closure_4 = tmp4;
  const obj3 = hasAlreadyLinked(dependencyMap[4]);
  obj = { value: hasAlreadyLinked, shouldUpdate: tmp4 };
  const previousWhen = hasAlreadyLinked(dependencyMap[5]).usePreviousWhen(obj);
  AppStates = previousWhen;
  const items2 = [hasAlreadyLinked, previousWhen, flag, tmp4];
  const effect = React.useEffect(() => {
    if (ref.current) {
      if (false === previousWhen) {
        if (true === arg1) {
          if (tmp4) {
            ref.current = false;
            if (flag) {
              let obj = arg1(flag[6]);
              obj = {};
              const intl = arg0(flag[7]).intl;
              obj.content = intl.string(arg1(flag[8]).uG6teD);
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
