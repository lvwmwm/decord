// Module ID: 4678
// Function ID: 4679
// Name: UserUtils
// Dependencies: [4679, 1372, 1074, 504, 1115, 2]
// Exports: accountAgeInRange, ageEligibleForPremiumUpsell, getFormattedName, getGlobalName, getName, getUserIsStaff, getUserTag, humanizeStatus, isNewUser, useDirectMessageRecipient, useName, useUserTag

// Module 4678 (UserUtils)
import get_initialized from "get initialized" /* 504 */;
import intl7 from "intl" /* 1115 */;
import StreamerModeStore from "StreamerModeStore" /* 4679 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
function nameFromUser(primary1) {
  let globalName;
  const global_name = primary1.global_name;
  const tmp = null != global_name && global_name.length > 0;
  if (tmp) {
    globalName = primary1.global_name;
  } else {
    const globalName1 = primary1.globalName;
    const tmp2 = null != globalName1 && globalName1.length > 0;
    if (tmp2) {
      globalName = primary1.globalName;
    } else {
      const username = primary1.username;
      globalName = null != username && username.length > 0 ? primary1.username : c7;
      const tmp3 = null != username && username.length > 0;
    }
  }
  return globalName;
}
function getName(username) {
  if (null != username) {
    let hidePersonalInformation = StreamerModeStore.hidePersonalInformation;
    const obj = nameFromUser(username);
    if (hidePersonalInformation) {
      username = username.username;
      let toLocaleLowerCaseResult1;
      const toLocaleLowerCaseResult = obj.toLocaleLowerCase();
      if (username != null) {
        toLocaleLowerCaseResult1 = username.toLocaleLowerCase();
      }
      hidePersonalInformation = toLocaleLowerCaseResult === toLocaleLowerCaseResult1;
    }
    if (hidePersonalInformation) {
      hidePersonalInformation = "0" === username.discriminator;
    }
    let combined = obj;
    if (hidePersonalInformation) {
      const _HermesInternal = HermesInternal;
      combined = "" + obj[0] + "\u2026";
    }
    return combined;
  }
}
function useName(username) {
  const items = [StreamerModeStore];
  const obj = get_initialized;
  let stateFromStores = obj.useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation);
  if (null != username) {
    const obj2 = nameFromUser(username);
    if (stateFromStores) {
      username = username.username;
      let toLocaleLowerCaseResult1;
      const toLocaleLowerCaseResult = obj2.toLocaleLowerCase();
      if (username != null) {
        toLocaleLowerCaseResult1 = username.toLocaleLowerCase();
      }
      stateFromStores = toLocaleLowerCaseResult === toLocaleLowerCaseResult1;
    }
    if (stateFromStores) {
      stateFromStores = "0" === username.discriminator;
    }
    let combined = obj2;
    if (stateFromStores) {
      const _HermesInternal = HermesInternal;
      combined = "" + obj2[0] + "\u2026";
    }
    return combined;
  }
}
function getGlobalName(user) {
  if (null != user) {
    let global_name;
    const globalName = user.globalName;
    const tmp = null != globalName && globalName.length > 0;
    if (tmp) {
      global_name = user.globalName;
    } else {
      const global_name1 = user.global_name;
      const tmp2 = null != global_name1 && global_name1.length > 0;
      if (tmp2) {
        global_name = user.global_name;
      }
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
    let username;
    let tmp3;
    if (null != inviter) {
      let global_name;
      const globalName = inviter.globalName;
      const tmp = null != globalName && globalName.length > 0;
      if (tmp) {
        global_name = inviter.globalName;
      } else {
        const global_name1 = inviter.global_name;
        const tmp2 = null != global_name1 && global_name1.length > 0;
        if (tmp2) {
          global_name = inviter.global_name;
        }
      }
      tmp3 = global_name;
    }
    if (flag) {
      const obj = {};
      const merged = Object.assign(closure_8);
      const merged1 = Object.assign(undefined);
      let hidePersonalInformation = "auto" !== obj.identifiable;
      const tmp9 = presentUserTag;
      if (!hidePersonalInformation) {
        hidePersonalInformation = StreamerModeStore.hidePersonalInformation;
      }
      username = tmp9(inviter, obj, hidePersonalInformation);
    } else {
      username = inviter.username;
      if (username == null) {
        username = c7;
      }
    }
    let tmp11 = tmp3;
    if (tmp3 !== username) {
      let combined = username;
      if (null != tmp3) {
        const _HermesInternal = HermesInternal;
        combined = "" + tmp3 + " (" + username + ")";
      }
      tmp11 = combined;
    }
    return tmp11;
  }
}
function humanizeStatus(DND, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const isMobile = obj.isMobile;
  const isVR = obj.isVR;
  const tmp = undefined !== isMobile && isMobile;
  const tmp2 = undefined !== isVR && isVR;
  if (hasOwnProperty.ONLINE === DND) {
    let stringResult;
    const intl6 = intl7.intl;
    const string = intl6.string;
    const t = intl7.t;
    if (tmp2) {
      stringResult = string(t.SWnU0R);
    } else if (tmp) {
      stringResult = string(t["9hghLD"]);
    } else {
      stringResult = string(t.WbGtnH);
    }
    return stringResult;
  } else if (hasOwnProperty.OFFLINE === DND) {
    const intl5 = intl7.intl;
    return intl5.string(intl7.t.Vv0abJ);
  } else if (hasOwnProperty.IDLE === DND) {
    const intl4 = intl7.intl;
    return intl4.string(intl7.t.qWbtVU);
  } else if (hasOwnProperty.DND === DND) {
    const intl3 = intl7.intl;
    return intl3.string(intl7.t.jaNpQH);
  } else if (hasOwnProperty.INVISIBLE === DND) {
    const intl2 = intl7.intl;
    return intl2.string(intl7.t.bg24HO);
  } else if (hasOwnProperty.STREAMING === DND) {
    const intl = intl7.intl;
    return intl.string(intl7.t.XKYej5);
  } else {
    const UNKNOWN = tmp3.UNKNOWN;
    return null;
  }
}
function presentUserTag(username, identifiable, arg2) {
  if (null == username) {
    const intl = intl7.intl;
    return intl.string(intl7.t.sKdZ6U);
  } else {
    const username1 = username.username;
    const tmp = null != username1 && username1.length > 0;
    if (tmp) {
      let combined;
      let flag = false;
      if ("always" !== identifiable.identifiable) {
        flag = arg2;
        if ("never" === identifiable.identifiable) {
          flag = true;
        }
      }
      if ("0" !== username.discriminator) {
        if (username.discriminator !== React3) {
          if ("username" !== identifiable.mode) {
            let username2;
            if (!flag) {
              const _HermesInternal3 = HermesInternal;
              username2 = "" + username.username + "#" + username.discriminator;
            }
            return username2;
          }
          username2 = username.username;
        }
      }
      username = username.username;
      if (flag) {
        const _HermesInternal = HermesInternal;
        combined = "" + username[0] + "\u2026";
      } else {
        combined = username;
      }
      let combined1 = combined;
      if ("never" !== identifiable.decoration) {
        const _HermesInternal2 = HermesInternal;
        combined1 = "@" + combined;
      }
      return combined1;
    } else {
      return c7;
    }
  }
}
function getUserTag(user, arg1) {
  const obj = {};
  const merged = Object.assign(closure_8);
  const merged1 = Object.assign(arg1);
  let hidePersonalInformation = "auto" !== obj.identifiable;
  const tmp3 = presentUserTag;
  if (!hidePersonalInformation) {
    hidePersonalInformation = StreamerModeStore.hidePersonalInformation;
  }
  return tmp3(user, obj, hidePersonalInformation);
}
function useUserTag(user, arg1) {
  const obj = {};
  const merged = Object.assign(closure_8);
  const merged1 = Object.assign(arg1);
  const items = [StreamerModeStore];
  const obj2 = get_initialized;
  return presentUserTag(user, obj, obj2.useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation));
}
function useDirectMessageRecipient(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("get initialized");
  const items = [UserStore];
  return obj.useStateFromStores(items, () => {
    if (null != closure_0) {
      let user = null;
      if (closure_0.isPrivate()) {
        user = null;
        if (closure_0.isDM()) {
          user = UserStore.getUser(obj.getRecipientId());
        }
      }
      return user;
    }
  });
}
function getUserIsStaff() {
  const currentUser = UserStore.getCurrentUser();
  const tmp = null != currentUser && currentUser.isStaff();
  return tmp;
}
({ NON_USER_BOT_DISCRIMINATOR: closure_4, StatusTypes: hasOwnProperty } = Constants);
let c6 = 86400000;
let c7 = "???";
let closure_8 = { mode: "full", decoration: "never", identifiable: "auto" };
let obj = {
  getName,
  useName,
  isNameConcealed(str) {
    const endsWithResult = 2 === str.length && str.endsWith("\u2026");
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
const result = size.fileFinishedImporting("utils/UserUtils.tsx");

export default obj;
export { nameFromUser };
export { getName };
export { useName };
export { getGlobalName };
export { getFormattedName };
export { humanizeStatus };
export const accountAgeInRange = function accountAgeInRange(createdAt, arg1) {
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
    return (null == maxDaysOld || diff <= c6 * maxDaysOld) && diff >= c6 * minDaysOld;
  }
};
export const ageEligibleForPremiumUpsell = function ageEligibleForPremiumUpsell(stateFromStores) {
  let flag = false;
  if (null != stateFromStores) {
    const _Date = Date;
    const createdAt = stateFromStores.createdAt;
    const timestamp = Date.now();
    const diff = timestamp - createdAt.getTime();
    flag = diff <= c6 * 30 && diff >= 0;
    const tmp5 = diff <= c6 * 30 && diff >= 0;
  }
  return !flag;
};
export const isNewUser = function isNewUser(createdAt) {
  let flag = false;
  if (null != createdAt) {
    const _Date = Date;
    createdAt = createdAt.createdAt;
    const timestamp = Date.now();
    const diff = timestamp - createdAt.getTime();
    flag = diff <= c6 * 7 && diff >= 0;
    const tmp5 = diff <= c6 * 7 && diff >= 0;
  }
  return flag;
};
export { getUserTag };
export { useUserTag };
export { useDirectMessageRecipient };
export { getUserIsStaff };
