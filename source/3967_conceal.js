// Module ID: 3967
// Function ID: 32828
// Name: conceal
// Dependencies: []
// Exports: ageEligibleForPremiumUpsell, getFormattedName, getName, getUserIsStaff, humanizeStatus, isNewUser, useDirectMessageRecipient, useName, useUserTag

// Module 3967 (conceal)
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
    globalName = present(primary1.username) ? primary1.username : closure_7;
  }
  return globalName;
}
function getName(username) {
  if (null != username) {
    let hidePersonalInformation = closure_2.hidePersonalInformation;
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
  const items = [closure_2];
  let stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => obj.hidePersonalInformation);
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
  const obj = arg1(dependencyMap[3]);
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
    return closure_7;
  } else {
    const tmp2 = getGlobalName(inviter);
    if (flag) {
      let username = getUserTag(inviter);
    } else {
      username = inviter.username;
      if (null == username) {
        username = closure_7;
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
    const intl6 = arg1(dependencyMap[4]).intl;
    const string = intl6.string;
    const t = arg1(dependencyMap[4]).t;
    if (tmp2) {
      let stringResult = string(t.SWnU0R);
    } else if (tmp) {
      stringResult = string(t.9hghLD);
    } else {
      stringResult = string(t.WbGtnH);
    }
    return stringResult;
  } else if (constants.OFFLINE === DND) {
    const intl5 = arg1(dependencyMap[4]).intl;
    return intl5.string(arg1(dependencyMap[4]).t.Vv0abJ);
  } else if (constants.IDLE === DND) {
    const intl4 = arg1(dependencyMap[4]).intl;
    return intl4.string(arg1(dependencyMap[4]).t.qWbtVU);
  } else if (constants.DND === DND) {
    const intl3 = arg1(dependencyMap[4]).intl;
    return intl3.string(arg1(dependencyMap[4]).t.jaNpQH);
  } else if (constants.INVISIBLE === DND) {
    const intl2 = arg1(dependencyMap[4]).intl;
    return intl2.string(arg1(dependencyMap[4]).t.bg24HO);
  } else if (constants.STREAMING === DND) {
    const intl = arg1(dependencyMap[4]).intl;
    return intl.string(arg1(dependencyMap[4]).t.XKYej5);
  } else {
    const UNKNOWN = constants.UNKNOWN;
    return null;
  }
  const tmp = undefined !== isMobile && isMobile;
  const tmp2 = undefined !== isVR && isVR;
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
      tmp4 = diff <= closure_6 * maxDaysOld;
    }
    if (tmp4) {
      tmp4 = diff >= closure_6 * minDaysOld;
    }
    return tmp4;
  }
}
function presentUserTag(username, identifiable, arg2) {
  if (null == username) {
    const intl = identifiable(dependencyMap[4]).intl;
    return intl.string(identifiable(dependencyMap[4]).t.sKdZ6U);
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
    return closure_7;
  }
}
function getUserTag(user, arg1) {
  const obj = {};
  const merged = Object.assign(closure_8);
  const merged1 = Object.assign(arg1);
  let hidePersonalInformation = "auto" !== obj.identifiable;
  if (!hidePersonalInformation) {
    hidePersonalInformation = closure_2.hidePersonalInformation;
  }
  return presentUserTag(user, obj, hidePersonalInformation);
}
function useUserTag(user) {
  const merged = Object.assign(closure_8);
  const merged1 = Object.assign(arg1);
  const items = [closure_2];
  return presentUserTag(user, {}, arg1(dependencyMap[3]).useStateFromStores(items, () => obj.hidePersonalInformation));
}
function useDirectMessageRecipient(arg0) {
  const arg1 = arg0;
  const items = [closure_3];
  return arg1(dependencyMap[3]).useStateFromStores(items, (self) => {
    if (null != self) {
      let user = null;
      if (self.isPrivate()) {
        user = null;
        if (self.isDM()) {
          user = user.getUser(self.getRecipientId());
        }
      }
      return user;
    }
  });
}
function getUserIsStaff() {
  const currentUser = currentUser.getCurrentUser();
  return null != currentUser && currentUser.isStaff();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ NON_USER_BOT_DISCRIMINATOR: closure_4, StatusTypes: closure_5 } = arg1(dependencyMap[2]));
let closure_6 = 86400000;
let closure_7 = "???";
let closure_8 = {};
const obj = {
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
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("utils/UserUtils.tsx");

export default obj;
export { nameFromUser };
export { getName };
export { useName };
export { getGlobalName };
export { getFormattedName };
export { humanizeStatus };
export { accountAgeInRange };
export const ageEligibleForPremiumUpsell = function ageEligibleForPremiumUpsell(stateFromStores) {
  return !accountAgeInRange(stateFromStores, { children: null, color: null });
};
export const isNewUser = function isNewUser(createdAt) {
  return accountAgeInRange(createdAt, { children: null, color: null });
};
export { getUserTag };
export { useUserTag };
export { useDirectMessageRecipient };
export { getUserIsStaff };
