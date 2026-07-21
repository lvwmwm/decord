// Module ID: 13543
// Function ID: 102739
// Name: useUsernameLiveCheck
// Dependencies: []
// Exports: useUsernameLiveCheck

// Module 13543 (useUsernameLiveCheck)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/unique_usernames/useUsernameLiveCheck.tsx");

export const useUsernameLiveCheck = function useUsernameLiveCheck(arg0, flag, flag2) {
  let flag3 = arg3;
  flag = arg0;
  if (flag === undefined) {
    flag = true;
  }
  const importDefault = flag;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const dependencyMap = flag2;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const React = flag3;
  let closure_4;
  let stateFromStores1;
  let memo;
  const items = [closure_4];
  const items1 = [arg0];
  const stateFromStores = flag(dependencyMap[2]).useStateFromStores(items, () => stateFromStores.validate(arg0), items1);
  closure_4 = stateFromStores;
  const obj = flag(dependencyMap[2]);
  const items2 = [closure_4];
  stateFromStores1 = flag(dependencyMap[2]).useStateFromStores(items2, () => stateFromStores.isRateLimited());
  const items3 = [flag2, flag3];
  memo = React.useMemo(() => arg0(flag2[3]).debounce((arg0) => {
    let str = "modal";
    if (closure_2) {
      str = "registration";
    }
    return callback(closure_2[4]).attemptUsername(arg0, str, closure_2, closure_3);
  }, 800), items3);
  const items4 = [flag, stateFromStores1, stateFromStores, arg0, memo];
  const effect = React.useEffect(() => {
    let tmp = flag;
    if (flag) {
      tmp = !stateFromStores1;
    }
    if (tmp) {
      tmp = null == stateFromStores;
    }
    if (tmp) {
      tmp = "" !== arg0;
    }
    if (tmp) {
      memo(arg0);
    }
  }, items4);
  const items5 = [stateFromStores];
  return React.useMemo(() => {
    let result;
    if (null != stateFromStores) {
      result = arg0(flag2[5]).formatUsernameLiveCheckValidation(stateFromStores);
      const obj = arg0(flag2[5]);
    }
    return result;
  }, items5);
};
