// Module ID: 14266
// Function ID: 14267
// Name: useUsernameLiveCheck
// Dependencies: [19, 14267, 563, 12, 14268, 14269, 2]
// Exports: useUsernameLiveCheck

// Module 14266 (useUsernameLiveCheck)
import _mod12 from "module_12" /* 12 */;
import UniqueUsernamesUtils from "UniqueUsernamesUtils" /* 14269 */;
import react from "react" /* 19 */;
import UniqueUsernamesStore from "UniqueUsernamesStore" /* 14267 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/unique_usernames/useUsernameLiveCheck.tsx");

export const useUsernameLiveCheck = function useUsernameLiveCheck(arg0, flag, flag2) {
  let closure_0;
  _require = arg0;
  if (flag === undefined) {
    flag = true;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = arg3;
  if (arg3 === undefined) {
    flag3 = false;
  }
  let stateFromStores;
  let obj = require("useStateFromStores");
  const items = [stateFromStores];
  const items1 = [arg0];
  stateFromStores = obj.useStateFromStores(items, () => UniqueUsernamesStore.validate(closure_0), items1);
  const items2 = [stateFromStores];
  const obj2 = require("useStateFromStores");
  const stateFromStores1 = obj2.useStateFromStores(items2, () => stateFromStores.isRateLimited());
  const items3 = [flag2, flag3];
  const memo = flag3.useMemo(() => {
    const obj = _mod12;
    return obj.debounce((arg0) => {
      let str = "modal";
      const attemptUsername = flag(flag2[4]).attemptUsername;
      flag(flag2[4]);
      if (closure_1_2) {
        str = "registration";
      }
      return attemptUsername(arg0, str, closure_1_2, flag3);
    }, 800);
  }, items3);
  const items4 = [flag, stateFromStores1, stateFromStores, arg0, memo];
  const effect = flag3.useEffect(() => {
    const tmp = flag && !stateFromStores1 && null == stateFromStores && "" !== closure_0;
    if (tmp) {
      memo(closure_0);
    }
  }, items4);
  const items5 = [stateFromStores];
  return flag3.useMemo(() => {
    let result;
    if (null != stateFromStores) {
      const obj = UniqueUsernamesUtils;
      result = obj.formatUsernameLiveCheckValidation(tmp);
    }
    return result;
  }, items5);
};
