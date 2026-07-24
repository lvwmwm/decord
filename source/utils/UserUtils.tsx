// Module ID: 3969
// Function ID: 32841
// Name: conceal
// Dependencies: [3970, 1849, 653, 566, 1212, 2]
// Exports: ageEligibleForPremiumUpsell, getFormattedName, getName, getUserIsStaff, humanizeStatus, isNewUser, useDirectMessageRecipient, useName, useUserTag

// Module 3969 (conceal)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
function conceal(username) {
  return "" + username[0] + "\u2026";
}
function present(globalName) {
  let tmp = null != globalName;
  if (tmp) {
    tmp = globalName.length > 0;
  }
  return tmp;
}
function nameFromUser(primary1) {
  if (present(primary1.global_name)) {
    let globalName = primary1.global_name;
  } else if (present(primary1.globalName)) {
    globalName = primary1.globalName;
  } else {
    globalName = present(primary1.username) ? primary1.username : c7;
  }
  return globalName;
}
function getName(username) {
  if (null != username) {
    let hidePersonalInformation = _isNativeReflectConstruct.hidePersonalInformation;
    const obj = nameFromUser(username);
    if (hidePersonalInformation) {
      username = username.username;
      let toLocaleLowerCaseResult1;
      if (null != username) {
        toLocaleLowerCaseResult1 = username.toLocaleLowerCase();
      }
      hidePersonalInformation = obj.toLocaleLowerCase() === toLocaleLowerCaseResult1;
      const toLocaleLowerCaseResult = obj.toLocaleLowerCase();
    }
    if (hidePersonalInformation) {
      hidePersonalInformation = "0" === username.discriminator;
    }
    let tmp5 = obj;
    if (hidePersonalInformation) {
      tmp5 = conceal(obj);
    }
    return tmp5;
  }
}
function useName(username) {
  const items = [_isNativeReflectConstruct];
  let stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_2.hidePersonalInformation);
  if (null != username) {
    const obj2 = nameFromUser(username);
    if (stateFromStores) {
      username = username.username;
      let toLocaleLowerCaseResult1;
      if (null != username) {
        toLocaleLowerCaseResult1 = username.toLocaleLowerCase();
      }
      stateFromStores = obj2.toLocaleLowerCase() === toLocaleLowerCaseResult1;
      const toLocaleLowerCaseResult = obj2.toLocaleLowerCase();
    }
    if (stateFromStores) {
      stateFromStores = "0" === username.discriminator;
    }
    let tmp5 = obj2;
    if (stateFromStores) {
      tmp5 = conceal(obj2);
    }
    return tmp5;
  }
  const obj = require(566) /* initialize */;
}
function getGlobalName(user) {
  if (null != user) {
    if (present(user.globalName)) {
      let global_name = user.globalName;
    } else if (present(user.global_name)) {
      global_name = user.global_name;
    }
    return global_name;
  }
}
function getFormattedName(inviter, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (null == inviter) {
    return c7;
  } else {
    const tmp2 = getGlobalName(inviter);
    if (flag) {
      let username = getUserTag(inviter);
    } else {
      username = inviter.username;
      if (null == username) {
        username = c7;
      }
    }
    let tmp4 = tmp2;
    if (tmp2 !== username) {
      let combined = username;
      if (null != tmp2) {
        const _HermesInternal = HermesInternal;
        combined = "" + tmp2 + " (" + username + ")";
      }
      tmp4 = combined;
    }
    return tmp4;
  }
}
function humanizeStatus(DND, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const isMobile = obj.isMobile;
  const isVR = obj.isVR;
  if (constants.ONLINE === DND) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    const string = intl6.string;
    const t = require(1212) /* getSystemLocale */.t;
    if (tmp2) {
      let stringResult = string(t.SWnU0R);
    } else if (tmp) {
      stringResult = string(t["9hghLD"]);
    } else {
      stringResult = string(t.WbGtnH);
    }
    return stringResult;
  } else if (constants.OFFLINE === DND) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t.Vv0abJ);
  } else if (constants.IDLE === DND) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.qWbtVU);
  } else if (constants.DND === DND) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.jaNpQH);
  } else if (constants.INVISIBLE === DND) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.bg24HO);
  } else if (constants.STREAMING === DND) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.XKYej5);
  } else {
    const UNKNOWN = constants.UNKNOWN;
    return null;
  }
  tmp = undefined !== isMobile && isMobile;
  tmp2 = undefined !== isVR && isVR;
}
function accountAgeInRange(createdAt, arg1) {
  let maxDaysOld;
  let minDaysOld;
  ({ maxDaysOld, minDaysOld } = arg1);
  if (minDaysOld === undefined) {
    minDaysOld = 0;
  }
  if (null == createdAt) {
    return false;
  } else {
    const _Date = Date;
    createdAt = createdAt.createdAt;
    const timestamp = Date.now();
    const diff = timestamp - createdAt.getTime();
    let tmp4 = null == maxDaysOld;
    if (!tmp4) {
      tmp4 = diff <= c6 * maxDaysOld;
    }
    if (tmp4) {
      tmp4 = diff >= c6 * minDaysOld;
    }
    return tmp4;
  }
}
function presentUserTag(username, identifiable, arg2) {
  if (null == username) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.sKdZ6U);
  } else if (present(username.username)) {
    let flag = false;
    if ("always" !== identifiable.identifiable) {
      flag = arg2;
      if ("never" === identifiable.identifiable) {
        flag = true;
      }
    }
    if ("0" !== username.discriminator) {
      if (username.discriminator !== closure_4) {
        if ("username" !== identifiable.mode) {
          if (!flag) {
            const _HermesInternal2 = HermesInternal;
            let username2 = "" + username.username + "#" + username.discriminator;
          }
          return username2;
        }
        username2 = username.username;
      }
    }
    if (flag) {
      username = conceal(username.username);
    } else {
      username = username.username;
    }
    let combined = username;
    if ("never" !== identifiable.decoration) {
      const _HermesInternal = HermesInternal;
      combined = "@" + username;
    }
    return combined;
  } else {
    return c7;
  }
}
function getUserTag(user, arg1) {
  const obj = {};
  const merged = Object.assign(closure_8);
  const merged1 = Object.assign(arg1);
  let hidePersonalInformation = "auto" !== obj.identifiable;
  if (!hidePersonalInformation) {
    hidePersonalInformation = _isNativeReflectConstruct.hidePersonalInformation;
  }
  return presentUserTag(user, obj, hidePersonalInformation);
}
function useUserTag(user) {
  const merged = Object.assign(closure_8);
  const merged1 = Object.assign(arg1);
  const items = [_isNativeReflectConstruct];
  return presentUserTag(user, {}, require(566) /* initialize */.useStateFromStores(items, () => outer1_2.hidePersonalInformation));
}
function useDirectMessageRecipient(arg0) {
  const _require = arg0;
  const items = [closure_3];
  return _require(566).useStateFromStores(items, () => {
    if (null != closure_0) {
      let user = null;
      if (closure_0.isPrivate()) {
        user = null;
        if (closure_0.isDM()) {
          user = outer1_3.getUser(closure_0.getRecipientId());
        }
      }
      return user;
    }
  });
}
function getUserIsStaff() {
  currentUser = currentUser.getCurrentUser();
  return null != currentUser && currentUser.isStaff();
}
({ NON_USER_BOT_DISCRIMINATOR: closure_4, StatusTypes: closure_5 } = ME);
let c6 = 86400000;
let c7 = "???";
let closure_8 = { mode: "full", decoration: "never", identifiable: "auto" };
const result = require("ME").fileFinishedImporting("utils/UserUtils.tsx");

export default {
  getName,
  useName,
  isNameConcealed(str) {
    let endsWithResult = 2 === str.length;
    if (endsWithResult) {
      endsWithResult = str.endsWith("\u2026");
    }
    return endsWithResult;
  },
  getUserTag,
  useUserTag,
  getUserIsStaff,
  getFormattedName,
  getGlobalName,
  humanizeStatus,
  useDirectMessageRecipient
};
export { nameFromUser };
export { getName };
export { useName };
export { getGlobalName };
export { getFormattedName };
export { humanizeStatus };
export { accountAgeInRange };
export const ageEligibleForPremiumUpsell = function ageEligibleForPremiumUpsell(stateFromStores) {
  return !accountAgeInRange(stateFromStores, { minDaysOld: 0, maxDaysOld: 30 });
};
export const isNewUser = function isNewUser(createdAt) {
  return accountAgeInRange(createdAt, { minDaysOld: 0, maxDaysOld: 7 });
};
export { getUserTag };
export { useUserTag };
export { useDirectMessageRecipient };
export { getUserIsStaff };
