// Module ID: 13574
// Function ID: 102899
// Name: getSMSBackupDisabledMessage
// Dependencies: []
// Exports: getSMSBackupDisabledMessage, use2FARemoveDisableReason, useIsMFAEnabled, useMFAAvailability

// Module 13574 (getSMSBackupDisabledMessage)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
({ GuildFeatures: closure_5, Permissions: closure_6, UserFlags: closure_7 } = arg1(dependencyMap[3]));
const obj = { AVAILABLE: "available", UNAVAILABLE_NO_CRYPTO: "unavailable_no_crypto", UNAVAILABLE_UNVERIFIED: "unavailable_unverified" };
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/account/MFAUtils.tsx");

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
        const intl2 = arg1(dependencyMap[4]).intl;
        const string2 = intl2.string;
        if (flag) {
          let string2Result = string2(_9UucjT);
        } else {
          string2Result = string2(_9UucjT.Sq6Q1u);
        }
      } else if (null == stateFromStores.email) {
        const intl = arg1(dependencyMap[4]).intl;
        const string = intl.string;
        if (flag) {
          let stringResult = string(_9VWpT9);
        } else {
          stringResult = string(_9VWpT9.LfCBZG);
        }
      }
    }
    const intl3 = arg1(dependencyMap[4]).intl;
    const string3 = intl3.string;
    let YJGvuD = arg1(dependencyMap[4]).t;
    if (flag) {
      YJGvuD = YJGvuD.YJGvuD;
      let string3Result = string3(YJGvuD);
    } else {
      string3Result = string3(YJGvuD.3iKih7);
    }
  }
};
export const useIsMFAEnabled = function useIsMFAEnabled() {
  const items = [closure_4];
  return arg1(dependencyMap[5]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    return null != currentUser && currentUser.mfaEnabled;
  });
};
export const MFAAvailability = obj;
export const useMFAAvailability = function useMFAAvailability() {
  const obj = arg1(dependencyMap[5]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let verified;
    if (null != currentUser) {
      verified = currentUser.verified;
    }
    return verified;
  });
  if (arg1(dependencyMap[6]).hasCrypto) {
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
  const arg1 = flag;
  const items = [closure_2, closure_3, closure_4];
  return arg1(dependencyMap[5]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      if (currentUser.hasAnyStaffLevel()) {
        const intl2 = flag(closure_1[4]).intl;
        const string2 = intl2.string;
        let hxf9fX = flag(closure_1[4]).t;
        if (flag) {
          hxf9fX = hxf9fX.hxf9fX;
          let string2Result = string2(hxf9fX);
        } else {
          string2Result = string2(hxf9fX.3iKih7);
        }
      }
    }
    const guildsArray = guildsArray.getGuildsArray();
    if (!guildsArray.some((features) => {
      features = features.features;
      let hasItem = features.has(constants.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
      if (hasItem) {
        hasItem = closure_3.can(constants2.ADMINISTRATOR, features);
      }
      return hasItem;
    })) {
      return null;
    } else {
      const intl = flag(closure_1[4]).intl;
      const string = intl.string;
      let OYTCUh = flag(closure_1[4]).t;
      if (flag) {
        OYTCUh = OYTCUh.OYTCUh;
        let stringResult = string(OYTCUh);
      } else {
        stringResult = string(OYTCUh.HC8uSZ);
      }
    }
  });
};
