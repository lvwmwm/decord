// Module ID: 16657
// Function ID: 16658
// Name: account/MFAUtils
// Dependencies: [4885, 4946, 1383, 1072, 1113, 563, 7118, 2]
// Exports: getSMSBackupDisabledMessage, use2FARemoveDisableReason, useIsMFAEnabled, useMFAAvailability

// Module 16657 (account/MFAUtils)
import useStateFromStores from "useStateFromStores" /* 563 */;
import intl4 from "intl" /* 1113 */;
import MFAUtils from "MFAUtils" /* 7118 */;
import GuildStore from "GuildStore" /* 4885 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import UserStore from "UserStore" /* 1383 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let features;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ GuildFeatures: hasOwnProperty, Permissions: metroRequire, UserFlags: metroImportDefault } = Constants);
const MFAAvailability = { AVAILABLE: "available", UNAVAILABLE_NO_CRYPTO: "unavailable_no_crypto", UNAVAILABLE_UNVERIFIED: "unavailable_unverified" };
const result = size.fileFinishedImporting("modules/user_settings/account/MFAUtils.tsx");

export function getSMSBackupDisabledMessage(stateFromStores) {
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
}
export function useIsMFAEnabled() {
  const items = [UserStore];
  const obj = useStateFromStores;
  return obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    return null != currentUser && currentUser.mfaEnabled;
  });
}
export { MFAAvailability };
export function useMFAAvailability() {
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
}
export function use2FARemoveDisableReason() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const items = [GuildStore, PermissionStore, UserStore];
  const obj = flag(563);
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
}
