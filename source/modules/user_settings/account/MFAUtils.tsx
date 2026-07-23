// Module ID: 13697
// Function ID: 105110
// Name: getSMSBackupDisabledMessage
// Dependencies: [1838, 3758, 1849, 653, 1212, 624, 9203, 2]
// Exports: getSMSBackupDisabledMessage, use2FARemoveDisableReason, useIsMFAEnabled, useMFAAvailability

// Module 13697 (getSMSBackupDisabledMessage)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ GuildFeatures: closure_5, Permissions: closure_6, UserFlags: closure_7 } = ME);
let obj = { AVAILABLE: "available", UNAVAILABLE_NO_CRYPTO: "unavailable_no_crypto", UNAVAILABLE_UNVERIFIED: "unavailable_unverified" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/account/MFAUtils.tsx");

export const getSMSBackupDisabledMessage = function getSMSBackupDisabledMessage(stateFromStores) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (null == stateFromStores) {
    return null;
  } else {
    if (!stateFromStores.hasAnyStaffLevel()) {
      if (stateFromStores.hasFlag(constants.PARTNER)) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        const string2 = intl2.string;
        if (flag) {
          let string2Result = string2(_9UucjT);
        } else {
          string2Result = string2(_9UucjT.Sq6Q1u);
        }
      } else if (null == stateFromStores.email) {
        const intl = require(1212) /* getSystemLocale */.intl;
        const string = intl.string;
        if (flag) {
          let stringResult = string(_9VWpT9);
        } else {
          stringResult = string(_9VWpT9.LfCBZG);
        }
      }
    }
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const string3 = intl3.string;
    let YJGvuD = require(1212) /* getSystemLocale */.t;
    if (flag) {
      YJGvuD = YJGvuD.YJGvuD;
      let string3Result = string3(YJGvuD);
    } else {
      string3Result = string3(YJGvuD["3iKih7"]);
    }
  }
};
export const useIsMFAEnabled = function useIsMFAEnabled() {
  const items = [closure_4];
  return require(624) /* defaultAreStatesEqual */.useStateFromStores(items, () => {
    const currentUser = outer1_4.getCurrentUser();
    return null != currentUser && currentUser.mfaEnabled;
  });
};
export const MFAAvailability = obj;
export const useMFAAvailability = function useMFAAvailability() {
  const obj = require(624) /* defaultAreStatesEqual */;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = outer1_4.getCurrentUser();
    let verified;
    if (null != currentUser) {
      verified = currentUser.verified;
    }
    return verified;
  });
  if (require(9203) /* encodeTotpSecret */.hasCrypto) {
    if (false === stateFromStores) {
      let AVAILABLE = obj.UNAVAILABLE_UNVERIFIED;
    } else {
      AVAILABLE = obj.AVAILABLE;
    }
  } else {
    return obj.UNAVAILABLE_NO_CRYPTO;
  }
};
export const use2FARemoveDisableReason = function use2FARemoveDisableReason() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const items = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct, closure_4];
  return flag(624).useStateFromStores(items, () => {
    const currentUser = outer1_4.getCurrentUser();
    if (null != currentUser) {
      if (currentUser.hasAnyStaffLevel()) {
        const intl2 = flag(outer1_1[4]).intl;
        const string2 = intl2.string;
        let hxf9fX = flag(outer1_1[4]).t;
        if (flag) {
          hxf9fX = hxf9fX.hxf9fX;
          let string2Result = string2(hxf9fX);
        } else {
          string2Result = string2(hxf9fX["3iKih7"]);
        }
      }
    }
    const guildsArray = outer1_2.getGuildsArray();
    if (!guildsArray.some((features) => {
      features = features.features;
      let hasItem = features.has(outer2_5.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
      if (hasItem) {
        hasItem = outer2_3.can(outer2_6.ADMINISTRATOR, features);
      }
      return hasItem;
    })) {
      return null;
    } else {
      const intl = flag(outer1_1[4]).intl;
      const string = intl.string;
      let OYTCUh = flag(outer1_1[4]).t;
      if (flag) {
        OYTCUh = OYTCUh.OYTCUh;
        let stringResult = string(OYTCUh);
      } else {
        stringResult = string(OYTCUh.HC8uSZ);
      }
    }
  });
};
