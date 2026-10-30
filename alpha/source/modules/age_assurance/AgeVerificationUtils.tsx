// Module ID: 6720
// Function ID: 6721
// Name: AgeVerificationUtils
// Dependencies: [5, 19, 5689, 502, 1384, 6721, 6722, 1098, 6723, 6725, 1993, 504, 5688, 6726, 1114, 3093, 6727, 2]
// Exports: ageGateSourceHasLightboxBackdrop, getAgeVerificationGetStartedSubtitle, getAgeVerificationGetStartedTitle, isAdultStatus, isAgeVerified, isAssignedByDiscord, isFullscreenAgeVerificationEntryPoint, isVerifiedAdult, isVerifiedTeen, maybePerformReactiveCheck, shouldShowTiggerPawtect, useIsAgeVerified, useIsAssignedByDiscord, useIsVerifiedAdult, useIsVerifiedTeen, useMaybePerformReactiveCheckForSource, useShouldShowTiggerPawtect, useShowAssignedAgeGroupSettings, useWatchAgeVerificationStatusChange

// Module 6720 (AgeVerificationUtils)
import get_initialized from "get initialized" /* 504 */;
import intl7 from "intl" /* 1114 */;
import Server from "Server" /* 1993 */;
import _modDef3093 from "module_3093" /* 3093 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5688 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 6722 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6723 */;
import AgeGatedFeature from "AgeGatedFeature" /* 6725 */;
import usePreviousDefault from "usePrevious" /* 6726 */;
import ReactiveCheckActionCreators from "ReactiveCheckActionCreators" /* 6727 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import RegionalFeatureConfigStore from "RegionalFeatureConfigStore" /* 5689 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1384 */;
import AgeVerificationStore from "AgeVerificationStore" /* 6721 */;
import AgeGateConstants from "AgeGateConstants" /* 1098 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1, dependencyMap, importDefault;

let AgeGateSource;
let c10;
const f88893 = () => currentUser.getCurrentUser();
const f88894 = () => {
  currentUser = currentUser.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  const tmp5 = prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT || prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
  return tmp5;
};
const f88895 = () => currentUser.getCurrentUser();
function useShouldCallReactiveCheck() {
  let closure_0;
  let currentUser;
  let tmp = _require;
  const items = [UserStore];
  obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f88895);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp5 = prop !== tmp(1993).AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp5 = prop1 !== tmp(1993).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  _require = tmp5;
  const tmpResult = tmp(5688);
  const isFeatureAgeGated = tmpResult.useIsFeatureAgeGated(tmp(6725).AgeGatedFeature.REACTIVE_CHECK);
  const items1 = [AgeVerificationStore];
  const items2 = [tmp5, isFeatureAgeGated];
  const tmpResult2 = tmp(504);
  return tmpResult2.useStateFromStores(items1, () => {
    let tmp = !closure_0;
    if (tmp) {
      const result = isFeatureAgeGated && AgeVerificationStore.shouldCallReactiveCheck();
      tmp = result;
    }
    return tmp;
  }, items2);
}
function shouldCallReactiveCheck() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp5 = prop !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (currentUser != null) {
      prop1 = currentUser.ageVerificationStatus;
    }
    tmp5 = prop1 !== tmp3(1993).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  let tmp7 = !tmp5;
  if (tmp7) {
    tmp7 = RegionalFeatureConfigStore.isFeatureAgeGated(tmp3(6725).AgeGatedFeature.REACTIVE_CHECK) && AgeVerificationStore.shouldCallReactiveCheck();
    const isFeatureAgeGatedResult = RegionalFeatureConfigStore.isFeatureAgeGated(tmp3(6725).AgeGatedFeature.REACTIVE_CHECK) && AgeVerificationStore.shouldCallReactiveCheck();
  }
  return tmp7;
}
let obj = function _maybePerformReactiveCheck() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let tmp4;
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            tmp4 = null;
            if (shouldCallReactiveCheck()) {
              c1 = 1;
              c0 = 1;
              const obj5 = { value: obj3.fetchReactiveCheckResult(), done: false };
              obj3 = require("ReactiveCheckActionCreators");
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else {
          tmp4 = value;
          if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          }
        }
        c0 = 3;
        const obj6 = { value: tmp4, done: true };
        return obj6;
      } catch (tmp8) {
        c0 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
({ AgeGateSource, REACTIVE_CHECK_AGE_GATE_SOURCES: c10 } = AgeGateConstants);
let items = [AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.START_STAGE_PROMPT, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND];
const set = new Set(items);
let items1 = [, , , , , ];
({ NSFW_SERVER: arr2[0], NSFW_SERVER_INVITE: arr2[1], NSFW_SERVER_INVITE_EMBED: arr2[2], LARGE_GUILD: arr2[3], JOIN_LARGE_GUILD_UNDERAGE: arr2[4], ACCESS_LARGE_GUILD_UNDERAGE: arr2[5] } = AgeGateSource);
const set1 = new Set(items1);
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationUtils.tsx");

export function ageGateSourceHasLightboxBackdrop(arg0) {
  return set1.has(arg0);
}
export function shouldShowTiggerPawtect() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  const tmp5 = prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  return !tmp5;
}
export function useShouldShowTiggerPawtect() {
  let currentUser;
  const items = [UserStore];
  obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, f88893);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  const tmp5 = prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  return !tmp5;
}
export function isVerifiedTeen() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  const tmp5 = prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
  return tmp5;
}
export function useIsVerifiedTeen() {
  const items = [UserStore];
  obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    const tmp5 = prop === require("Server").AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN || prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
    return tmp5;
  });
}
export function isAdultStatus(prop) {
  const tmp3 = prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  return tmp3;
}
export function isVerifiedAdult() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  const tmp5 = prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  return tmp5;
}
export function useIsVerifiedAdult() {
  const items = [UserStore];
  obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, f88893);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  const tmp5 = prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  return tmp5;
}
export function isAssignedByDiscord() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  const tmp5 = prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
  return tmp5;
}
export function useIsAssignedByDiscord() {
  const items = [UserStore];
  obj = get_initialized;
  return obj.useStateFromStores(items, f88894);
}
export function useShowAssignedAgeGroupSettings() {
  const items = [UserStore];
  obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, f88894);
  const obj2 = RegionalFeatureConfigUtils;
  const tmp2 = obj2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK) && stateFromStores;
  return tmp2;
}
export function isAgeVerified() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp5 = prop !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (currentUser != null) {
      prop1 = currentUser.ageVerificationStatus;
    }
    tmp5 = prop1 !== Server.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  return tmp5;
}
export function useIsAgeVerified() {
  const items = [UserStore];
  obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, f88895);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp5 = prop !== tmp(1993).AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp5 = prop1 !== tmp(1993).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  return tmp5;
}
export function useWatchAgeVerificationStatusChange(callback1) {
  let closure_1;
  let closure_2;
  _require = callback1;
  const items = [UserStore];
  obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  const tmp2 = usePreviousDefault(stateFromStores);
  const items1 = [AuthenticationStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => null != AuthenticationStore.getSuspendedUserToken());
  const items2 = [AuthenticationStore];
  let tmp5 = null != tmp2;
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items2, () => AuthenticationStore.isAuthenticated());
  if (tmp5) {
    tmp5 = null != stateFromStores;
  }
  if (tmp5) {
    tmp5 = tmp2 !== stateFromStores;
  }
  importDefault = tmp5;
  dependencyMap = tmp6;
  const items3 = [callback1, tmp5, !stateFromStores1 && !stateFromStores2];
  const effect = react.useEffect(() => {
    const tmp = closure_1 || closure_2;
    if (tmp) {
      callback1();
    }
  }, items3);
}
export function isFullscreenAgeVerificationEntryPoint(arg0) {
  const hasItem = null != arg0 && set.has(arg0);
  return hasItem;
}
export function getAgeVerificationGetStartedTitle(entryPoint, arg1) {
  let stringResult;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const hasItem = set.has(entryPoint);
  const intl = intl7.intl;
  const string = intl.string;
  if (hasItem) {
    stringResult = string(tmp2(1114).t.lSWVTM);
  } else if (flag) {
    stringResult = string(_modDef3093["/kgWIg"]);
  } else {
    stringResult = string(tmp2(1114).t.xYXsr6);
  }
  return stringResult;
}
export function getAgeVerificationGetStartedSubtitle(entryPoint, handleOnHelpUrlHook, isSuspendedUser, fn, arg4) {
  let stringResult;
  let flag = isSuspendedUser;
  if (isSuspendedUser === undefined) {
    flag = false;
  }
  let flag2 = arg4;
  if (arg4 === undefined) {
    flag2 = false;
  }
  if (set.has(entryPoint)) {
    const intl6 = intl7.intl;
    stringResult = intl6.string(intl7.t["S/xS/w"]);
  } else if (flag) {
    const intl5 = intl7.intl;
    stringResult = intl5.string(_modDef3093.h7qzoa);
  } else {
    if (flag2) {
      if (null != handleOnHelpUrlHook) {
        if (null != fn) {
          const intl4 = intl7.intl;
          const obj2 = { handleOnHelpUrlHook, handleOnTrustedProvidersHook: fn };
          stringResult = intl4.format(_modDef3093["+Ft5ch"], obj2);
        }
      }
    }
    if (flag2) {
      if (null != handleOnHelpUrlHook) {
        const intl3 = intl7.intl;
        const obj3 = { handleOnHelpUrlHook };
        stringResult = intl3.format(_modDef3093["22HSSI"], obj3);
      }
    }
    if (null != handleOnHelpUrlHook) {
      const intl2 = intl7.intl;
      obj = { handleOnHelpUrlHook };
      stringResult = intl2.format(_modDef3093.RpMIT0, obj);
    } else {
      const intl = intl7.intl;
      stringResult = intl.string(intl7.t.HxS3oQ);
    }
  }
  return stringResult;
}
export { useShouldCallReactiveCheck };
export function useMaybePerformReactiveCheckForSource(arg0) {
  let closure_0 = arg0;
  const tmp = useShouldCallReactiveCheck();
  let closure_1 = tmp;
  const items = [tmp, arg0];
  const effect = react.useEffect(() => {
    const hasItem = closure_1 && set.has(closure_0);
    if (hasItem) {
      obj = ReactiveCheckActionCreators;
      obj.fetchReactiveCheckResult();
    }
  }, items);
}
export { shouldCallReactiveCheck };
export function maybePerformReactiveCheck() {
  return obj(...arguments);
}
