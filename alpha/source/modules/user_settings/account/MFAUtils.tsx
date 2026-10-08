// Module ID: 14857
// Function ID: 14858
// Name: account/MFAUtils
// Dependencies: [2086, 4707, 1389, 1085, 1126, 558, 576, 573, 6624, 2]
// Exports: getSMSBackupDisabledMessage

// Module 14857 (account/MFAUtils)
import react from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import MFAUtils from "MFAUtils" /* 6624 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import UserStore from "UserStore" /* 1389 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, features, tmp10, tmp2, tmp6, tmp8;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp;
const useStateFromStores = tmp(573);
({ GuildFeatures: hasOwnProperty, Permissions: metroRequire, UserFlags: metroImportDefault } = Constants);
let ReactCompilerGating = ReactCompilerGating_mod;
const MFAAvailability = { AVAILABLE: "available", UNAVAILABLE_NO_CRYPTO: "unavailable_no_crypto", UNAVAILABLE_UNVERIFIED: "unavailable_unverified" };
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsMFAEnabled() {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      currentUser = currentUser.getCurrentUser();
      return null != currentUser && currentUser.mfaEnabled;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = useStateFromStores;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useIsMFAEnabled() {
  const items = [UserStore];
  const obj = useStateFromStores;
  return obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    return null != currentUser && currentUser.mfaEnabled;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMFAAvailability() {
  let UNAVAILABLE_NO_CRYPTO;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      currentUser = currentUser.getCurrentUser();
      let verified;
      if (currentUser != null) {
        verified = currentUser.verified;
      }
      return verified;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = useStateFromStores;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (MFAUtils.hasCrypto) {
    let AVAILABLE;
    if (false === stateFromStores) {
      AVAILABLE = obj.UNAVAILABLE_UNVERIFIED;
    } else {
      AVAILABLE = obj.AVAILABLE;
    }
    UNAVAILABLE_NO_CRYPTO = AVAILABLE;
  } else {
    UNAVAILABLE_NO_CRYPTO = obj.UNAVAILABLE_NO_CRYPTO;
  }
  return UNAVAILABLE_NO_CRYPTO;
}) : (function useMFAAvailability() {
  let UNAVAILABLE_NO_CRYPTO;
  const obj = useStateFromStores;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    return verified;
  });
  if (MFAUtils.hasCrypto) {
    let AVAILABLE;
    if (false === stateFromStores) {
      AVAILABLE = obj.UNAVAILABLE_UNVERIFIED;
    } else {
      AVAILABLE = obj.AVAILABLE;
    }
    UNAVAILABLE_NO_CRYPTO = AVAILABLE;
  } else {
    UNAVAILABLE_NO_CRYPTO = obj.UNAVAILABLE_NO_CRYPTO;
  }
  return UNAVAILABLE_NO_CRYPTO;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function use2FARemoveDisableReason(arg0) {
  let closure_0;
  let first;
  let tmp9;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, PermissionStore, ];
    items[2] = UserStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== (undefined !== arg0 && arg0)) {
    class S {
      constructor() {
        currentUser = closure_4.getCurrentUser();
        hasAnyStaffLevelResult = undefined;
        if (currentUser != null) {
          hasAnyStaffLevelResult = currentUser.hasAnyStaffLevel();
        }
        if (hasAnyStaffLevelResult) {
          tmp8 = closure_0;
          tmp9 = closure_0;
          tmp10 = closure_1;
          intl2 = closure_0(closure_1[4]).intl;
          string2 = intl2.string;
          t2 = closure_0(closure_1[4]).t;
          if (closure_0) {
            string2Result = string2(t2.hxf9fX);
          } else {
            string2Result = string2(t2["3iKih7"]);
          }
          tmp3 = string2Result;
        } else {
          tmp2 = closure_2;
          guildsArray = closure_2.getGuildsArray();
          tmp3 = null;
          if (guildsArray.some(() => { /* body not rendered: F145651 */ })) {
            tmp4 = closure_0;
            tmp5 = closure_0;
            tmp6 = closure_1;
            intl = closure_0(closure_1[4]).intl;
            string = intl.string;
            t = closure_0(closure_1[4]).t;
            if (closure_0) {
              stringResult = string(t.OYTCUh);
            } else {
              stringResult = string(t.HC8uSZ);
            }
            tmp3 = stringResult;
          }
        }
        return tmp3;
      }
    }
    cResult[1] = undefined !== arg0 && arg0;
    cResult[2] = S;
    tmp9 = S;
  } else {
    class S {
      constructor() {
        currentUser = closure_4.getCurrentUser();
        hasAnyStaffLevelResult = undefined;
        if (currentUser != null) {
          hasAnyStaffLevelResult = currentUser.hasAnyStaffLevel();
        }
        if (hasAnyStaffLevelResult) {
          tmp8 = closure_0;
          tmp9 = closure_0;
          tmp10 = closure_1;
          intl2 = closure_0(closure_1[4]).intl;
          string2 = intl2.string;
          t2 = closure_0(closure_1[4]).t;
          if (closure_0) {
            string2Result = string2(t2.hxf9fX);
          } else {
            string2Result = string2(t2["3iKih7"]);
          }
          tmp3 = string2Result;
        } else {
          tmp2 = closure_2;
          guildsArray = closure_2.getGuildsArray();
          tmp3 = null;
          if (guildsArray.some(() => { /* body not rendered: F145651 */ })) {
            tmp4 = closure_0;
            tmp5 = closure_0;
            tmp6 = closure_1;
            intl = closure_0(closure_1[4]).intl;
            string = intl.string;
            t = closure_0(closure_1[4]).t;
            if (closure_0) {
              stringResult = string(t.OYTCUh);
            } else {
              stringResult = string(t.HC8uSZ);
            }
            tmp3 = stringResult;
          }
        }
        return tmp3;
      }
    }
  }
  const tmpResult = tmp(573);
  return tmpResult.useStateFromStores(first, tmp9);
}) : (function use2FARemoveDisableReason() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const items = [GuildStore, PermissionStore, UserStore];
  const obj = flag(573);
  return obj.useStateFromStores(items, () => {
    let constants2;
    let tmp3;
    const currentUser = UserStore.getCurrentUser();
    let hasAnyStaffLevelResult;
    if (currentUser != null) {
      hasAnyStaffLevelResult = currentUser.hasAnyStaffLevel();
    }
    if (hasAnyStaffLevelResult) {
      let string2Result;
      const intl2 = intl4.intl;
      const string2 = intl2.string;
      const t2 = intl4.t;
      if (flag) {
        string2Result = string2(t2.hxf9fX);
      } else {
        string2Result = string2(t2["3iKih7"]);
      }
      tmp3 = string2Result;
    } else {
      const guildsArray = GuildStore.getGuildsArray();
      tmp3 = null;
      if (guildsArray.some((features) => {
        features = features.features;
        const hasItem = features.has(constants.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && closure_1_3.can(constants2.ADMINISTRATOR, features);
        return hasItem;
      })) {
        let stringResult;
        const intl = intl4.intl;
        const string = intl.string;
        const t = intl4.t;
        if (flag) {
          stringResult = string(t.OYTCUh);
        } else {
          stringResult = string(t.HC8uSZ);
        }
        tmp3 = stringResult;
      }
    }
    return tmp3;
  });
});
const result = size.fileFinishedImporting("modules/user_settings/account/MFAUtils.tsx");

export const getSMSBackupDisabledMessage = function getSMSBackupDisabledMessage(stateFromStores) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let tmp = null;
  if (null != stateFromStores) {
    let tmp3;
    if (stateFromStores.hasAnyStaffLevel()) {
      let string3Result;
      const intl3 = intl4.intl;
      const string3 = intl3.string;
      const t3 = intl4.t;
      if (flag) {
        string3Result = string3(t3.YJGvuD);
      } else {
        string3Result = string3(t3["3iKih7"]);
      }
      tmp3 = string3Result;
    } else if (stateFromStores.hasFlag(metroImportDefault.PARTNER)) {
      let string2Result;
      const intl2 = intl4.intl;
      const string2 = intl2.string;
      const t2 = intl4.t;
      if (flag) {
        string2Result = string2(t2["9UucjT"]);
      } else {
        string2Result = string2(t2.Sq6Q1u);
      }
      tmp3 = string2Result;
    } else {
      tmp3 = null;
      if (null == stateFromStores.email) {
        let stringResult;
        const intl = intl4.intl;
        const string = intl.string;
        const t = intl4.t;
        if (flag) {
          stringResult = string(t["9VWpT9"]);
        } else {
          stringResult = string(t.LfCBZG);
        }
        tmp3 = stringResult;
      }
    }
    tmp = tmp3;
  }
  return tmp;
};
export const useIsMFAEnabled = tmp3;
export { MFAAvailability };
export const useMFAAvailability = tmp4;
export const use2FARemoveDisableReason = tmp5;
