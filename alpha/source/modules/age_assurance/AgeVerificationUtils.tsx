// Module ID: 5909
// Function ID: 5910
// Name: AgeVerificationUtils
// Dependencies: [5, 19, 5910, 502, 1390, 5916, 5917, 1110, 5918, 5920, 558, 1998, 576, 504, 5921, 5922, 1126, 3120, 5923, 2]
// Exports: ageGateSourceHasLightboxBackdrop, getAgeVerificationGetStartedSubtitle, getAgeVerificationGetStartedTitle, isAgeVerified, isAssignedByDiscord, isFullscreenAgeVerificationEntryPoint, isVerifiedAdult, isVerifiedTeen, maybePerformReactiveCheck, shouldShowTiggerPawtect, useShouldShowTiggerPawtect

// Module 5909 (AgeVerificationUtils)
import react2 from "react" /* 576 */;
import intl7 from "intl" /* 1126 */;
import Server from "Server" /* 1998 */;
import _modDef3120 from "module_3120" /* 3120 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 5917 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 5918 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5920 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5921 */;
import usePreviousDefault from "usePrevious" /* 5922 */;
import ReactiveCheckActionCreators from "ReactiveCheckActionCreators" /* 5923 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import RegionalFeatureConfigStore from "RegionalFeatureConfigStore" /* 5910 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1390 */;
import AgeVerificationStore from "AgeVerificationStore" /* 5916 */;
import AgeGateConstants from "AgeGateConstants" /* 1110 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1, dependencyMap, importDefault;

let AgeGateSource;
let c10;
let tmp;
const get_initialized = tmp(504);
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
    tmp5 = prop1 !== tmp3(1998).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  let tmp7 = !tmp5;
  if (tmp7) {
    tmp7 = RegionalFeatureConfigStore.isFeatureAgeGated(tmp3(5920).AgeGatedFeature.REACTIVE_CHECK) && AgeVerificationStore.shouldCallReactiveCheck();
    const isFeatureAgeGatedResult = RegionalFeatureConfigStore.isFeatureAgeGated(tmp3(5920).AgeGatedFeature.REACTIVE_CHECK) && AgeVerificationStore.shouldCallReactiveCheck();
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
        return { value: "IconComponent", done: "+51" };
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
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsVerifiedTeen() {
  let tmp4;
  let tmp5;
  obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      currentUser = currentUser.getCurrentUser();
      let prop;
      if (currentUser != null) {
        prop = currentUser.ageVerificationStatus;
      }
      const tmp5 = prop === require("Server").AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN || prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
      return tmp5;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = fn;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useIsVerifiedTeen() {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsVerifiedAdult() {
  let currentUser;
  let tmp4;
  let tmp5;
  obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp9 = prop === tmp(1998).AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
  if (!tmp9) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp9 = prop1 === tmp(1998).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  return tmp9;
}) : (function useIsVerifiedAdult() {
  let currentUser;
  const items = [UserStore];
  obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp5 = prop === tmp(1998).AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
  if (!tmp5) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp5 = prop1 === tmp(1998).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  return tmp5;
});
let closure_13 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsAssignedByDiscord() {
  let tmp4;
  let tmp5;
  obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      currentUser = currentUser.getCurrentUser();
      let prop;
      if (currentUser != null) {
        prop = currentUser.ageVerificationStatus;
      }
      const tmp5 = prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT || prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
      return tmp5;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = fn;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useIsAssignedByDiscord() {
  const items = [UserStore];
  obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    const tmp5 = prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT || prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
    return tmp5;
  });
});
let closure_14 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShowAssignedAgeGroupSettings() {
  const tmp = closure_14();
  obj = RegionalFeatureConfigUtils;
  const tmp2 = obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK) && tmp;
  return tmp2;
}) : (function useShowAssignedAgeGroupSettings() {
  const tmp = closure_14();
  obj = RegionalFeatureConfigUtils;
  const tmp2 = obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK) && tmp;
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsAgeVerified() {
  let currentUser;
  let tmp4;
  let tmp5;
  obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp9 = prop !== tmp(1998).AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp9) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp9 = prop1 !== tmp(1998).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  return tmp9;
}) : (function useIsAgeVerified() {
  let currentUser;
  const items = [UserStore];
  obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp5 = prop !== tmp(1998).AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp5 = prop1 !== tmp(1998).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  return tmp5;
});
let closure_15 = tmp10;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? (function useWatchAgeVerificationStatusChange(arg0) {
  let closure_0;
  let closure_1;
  let closure_2;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp4;
  let tmp5;
  let tmp9;
  _require = arg0;
  let tmp = _require;
  obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      currentUser = currentUser.getCurrentUser();
      let prop;
      if (currentUser != null) {
        prop = currentUser.ageVerificationStatus;
      }
      return prop;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmp8 = usePreviousDefault(stateFromStores);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AuthenticationStore];
    const fn2 = function f() {
      return null != AuthenticationStore.getSuspendedUserToken();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult3 = tmp(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AuthenticationStore];
    class C {
      constructor() {
        return AuthenticationStore.isAuthenticated();
      }
    }
    cResult[4] = items2;
    cResult[5] = C;
    tmp14 = C;
    tmp13 = items2;
  } else {
    tmp13 = cResult[4];
    tmp14 = cResult[5];
  }
  let tmp17 = null != tmp8;
  const tmpResult4 = tmp(504);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp13, tmp14);
  if (tmp17) {
    tmp17 = null != stateFromStores;
  }
  if (tmp17) {
    tmp17 = tmp8 !== stateFromStores;
  }
  importDefault = tmp17;
  dependencyMap = tmp18;
  if (cResult[6] === arg0) {
    if (cResult[7] === tmp17) {
      let tmp19;
      let tmp20;
      if (cResult[8] === (!stateFromStores1 && !stateFromStores2)) {
        tmp19 = cResult[9];
        tmp20 = cResult[10];
      }
      const effect = react.useEffect(tmp19, tmp20);
      class C {
        constructor() {
          return AuthenticationStore.isAuthenticated();
        }
      }
    }
  }
  const fn3 = function h() {
    const tmp = closure_1 || closure_2;
    if (tmp) {
      closure_0();
    }
  };
  const items3 = [arg0, tmp17, !stateFromStores1 && !stateFromStores2];
  cResult[6] = arg0;
  cResult[7] = tmp17;
  cResult[8] = !stateFromStores1 && !stateFromStores2;
  cResult[9] = fn3;
  cResult[10] = items3;
  tmp20 = items3;
  tmp19 = fn3;
}) : (function useWatchAgeVerificationStatusChange(arg0) {
  let closure_0;
  let closure_1;
  let closure_2;
  _require = arg0;
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
  const items3 = [arg0, tmp5, !stateFromStores1 && !stateFromStores2];
  const effect = react.useEffect(() => {
    const tmp = closure_1 || closure_2;
    if (tmp) {
      closure_0();
    }
  }, items3);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldCallReactiveCheck() {
  let closure_0;
  let first;
  let tmp = _require;
  obj = require("react");
  const cResult = obj.c(5);
  const tmp4 = closure_15();
  _require = tmp4;
  const obj2 = require("RegionalFeatureConfigUtils");
  const isFeatureAgeGated = obj2.useIsFeatureAgeGated(require("AgeGatedFeature").AgeGatedFeature.REACTIVE_CHECK);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AgeVerificationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === isFeatureAgeGated) {
    let tmp8;
    let tmp9;
    if (cResult[2] === tmp4) {
      tmp8 = cResult[3];
      tmp9 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp8, tmp9);
  }
  const fn = function n() {
    let tmp = !closure_0;
    if (tmp) {
      const result = isFeatureAgeGated && AgeVerificationStore.shouldCallReactiveCheck();
      tmp = result;
    }
    return tmp;
  };
  const items1 = [tmp4, isFeatureAgeGated];
  cResult[1] = isFeatureAgeGated;
  cResult[2] = tmp4;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp9 = items1;
  tmp8 = fn;
}) : (function useShouldCallReactiveCheck() {
  let closure_0;
  let tmp = closure_15();
  _require = tmp;
  obj = require("RegionalFeatureConfigUtils");
  const isFeatureAgeGated = obj.useIsFeatureAgeGated(require("AgeGatedFeature").AgeGatedFeature.REACTIVE_CHECK);
  const items = [AgeVerificationStore];
  const items1 = [tmp, isFeatureAgeGated];
  const obj2 = require("get initialized");
  return obj2.useStateFromStores(items, () => {
    let tmp = !closure_0;
    if (tmp) {
      const result = isFeatureAgeGated && AgeVerificationStore.shouldCallReactiveCheck();
      tmp = result;
    }
    return tmp;
  }, items1);
});
let closure_16 = tmp12;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp13 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMaybePerformReactiveCheckForSource(arg0) {
  let closure_0;
  _require = arg0;
  obj = require("react");
  const cResult = obj.c(4);
  const tmp2 = closure_16();
  let closure_1 = tmp2;
  if (cResult[0] === tmp2) {
    let tmp3;
    let tmp4;
    if (cResult[1] === arg0) {
      tmp3 = cResult[2];
      tmp4 = cResult[3];
    }
    const effect = react.useEffect(tmp3, tmp4);
  }
  const fn = function s() {
    const hasItem = closure_1 && set.has(closure_0);
    if (hasItem) {
      obj = ReactiveCheckActionCreators;
      obj.fetchReactiveCheckResult();
    }
  };
  const items = [tmp2, arg0];
  cResult[0] = tmp2;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp4 = items;
  tmp3 = fn;
}) : (function useMaybePerformReactiveCheckForSource(arg0) {
  let closure_0 = arg0;
  const tmp = closure_16();
  let closure_1 = tmp;
  const items = [tmp, arg0];
  const effect = react.useEffect(() => {
    const hasItem = closure_1 && set.has(closure_0);
    if (hasItem) {
      obj = ReactiveCheckActionCreators;
      obj.fetchReactiveCheckResult();
    }
  }, items);
});
function isVerifiedAdult() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  const tmp5 = prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  return tmp5;
}
function isAgeVerified() {
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
function useShouldShowTiggerPawtect() {
  return !closure_13();
}
const result1 = size.fileFinishedImporting("modules/age_assurance/AgeVerificationUtils.tsx");

export const ageGateSourceHasLightboxBackdrop = function ageGateSourceHasLightboxBackdrop(arg0) {
  return set1.has(arg0);
};
export const shouldShowTiggerPawtect = function shouldShowTiggerPawtect() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  const tmp5 = prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  return !tmp5;
};
export { useShouldShowTiggerPawtect };
export const isVerifiedTeen = function isVerifiedTeen() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  const tmp5 = prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
  return tmp5;
};
export const useIsVerifiedTeen = tmp6;
export { isVerifiedAdult };
export const useIsVerifiedAdult = tmp7;
export const isAssignedByDiscord = function isAssignedByDiscord() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  const tmp5 = prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
  return tmp5;
};
export const useIsAssignedByDiscord = tmp8;
export const useShowAssignedAgeGroupSettings = tmp9;
export { isAgeVerified };
export const useIsAgeVerified = tmp10;
export const useWatchAgeVerificationStatusChange = tmp11;
export const isFullscreenAgeVerificationEntryPoint = function isFullscreenAgeVerificationEntryPoint(arg0) {
  const hasItem = null != arg0 && set.has(arg0);
  return hasItem;
};
export const getAgeVerificationGetStartedTitle = function getAgeVerificationGetStartedTitle(entryPoint, arg1) {
  let stringResult;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const hasItem = set.has(entryPoint);
  const intl = intl7.intl;
  const string = intl.string;
  if (hasItem) {
    stringResult = string(tmp2(1126).t.lSWVTM);
  } else if (flag) {
    stringResult = string(_modDef3120["/kgWIg"]);
  } else {
    stringResult = string(tmp2(1126).t.xYXsr6);
  }
  return stringResult;
};
export const getAgeVerificationGetStartedSubtitle = function getAgeVerificationGetStartedSubtitle(entryPoint, handleOnHelpUrlHook, isSuspendedUser, fn, arg4) {
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
    stringResult = intl5.string(_modDef3120.h7qzoa);
  } else {
    if (flag2) {
      if (null != handleOnHelpUrlHook) {
        if (null != fn) {
          const intl4 = intl7.intl;
          const obj2 = { handleOnHelpUrlHook, handleOnTrustedProvidersHook: fn };
          stringResult = intl4.format(_modDef3120["+Ft5ch"], obj2);
        }
      }
    }
    if (flag2) {
      if (null != handleOnHelpUrlHook) {
        const intl3 = intl7.intl;
        const obj3 = { handleOnHelpUrlHook };
        stringResult = intl3.format(_modDef3120["22HSSI"], obj3);
      }
    }
    if (null != handleOnHelpUrlHook) {
      const intl2 = intl7.intl;
      obj = { handleOnHelpUrlHook };
      stringResult = intl2.format(_modDef3120.RpMIT0, obj);
    } else {
      const intl = intl7.intl;
      stringResult = intl.string(intl7.t.HxS3oQ);
    }
  }
  return stringResult;
};
export const useShouldCallReactiveCheck = tmp12;
export const useMaybePerformReactiveCheckForSource = tmp13;
export { shouldCallReactiveCheck };
export const maybePerformReactiveCheck = function maybePerformReactiveCheck() {
  return obj(...arguments);
};
