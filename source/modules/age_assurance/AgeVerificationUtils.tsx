// Module ID: 4405
// Function ID: 4406
// Name: useShouldCallReactiveCheck
// Dependencies: [5, 32, 19, 4406, 3869, 1218, 4407, 1874, 6779, 6748, 676, 1221, 6716, 6749, 5013, 3868, 1906, 589, 11121, 709, 6754, 6747, 6721, 8125, 1236, 2741, 12821, 2]
// Exports: ageGateSourceHasLightboxBackdrop, getAgeVerificationGetStartedSubtitle, getAgeVerificationGetStartedTitle, isAgeVerificationMessageWithConnectToTeenCta, isAgeVerificationMessageWithRetryCta, isAgeVerified, isAssignedByDiscord, isFullscreenAgeVerificationEntryPoint, isVerifiedAdult, isVerifiedTeen, maybePerformReactiveCheck, shouldShowTiggerPawtect, useInitiateAgeVerification, useIsAgeVerified, useIsAssignedByDiscord, useIsExplicitlyVerifiedAdult, useIsVerifiedAdult, useIsVerifiedTeen, useMaybePerformReactiveCheckForSource, useShouldShowTiggerPawtect, useShowAssignedAgeGroupSettings, useWatchAgeVerificationStatusChange

// Module 4405 (useShouldCallReactiveCheck)
import fetchFingerprint from "fetchFingerprint";
import _slicedToArray from "_slicedToArray";
import dispatcher from "dispatcher";
import initialize from "initialize";
import getRegionalFeatureConfig from "getRegionalFeatureConfig";
import closure_8 from "fetchFingerprint";
import reinjectEphemerals from "reinjectEphemerals";
import mergeGuildAvatar from "mergeGuildAvatar";
import closure_11 from "initialize";
import { FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS as closure_12 } from "set";
import { MessageEmbedTypes } from "ME";
import result from "result";
import { SafetyToastType } from "SafetyToastType";
import set from "noop";

let AgeGateSource;
let closure_14;
let require = arg1;
function useShouldCallReactiveCheck() {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp5 = prop !== tmp(1906).AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp5 = prop1 !== tmp(1906).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  require = tmp5;
  let tmpResult = tmp(3868);
  const isFeatureAgeGated = tmpResult.useIsFeatureAgeGated(tmp(5013).AgeGatedFeature.REACTIVE_CHECK);
  tmpResult = tmp(589);
  const items1 = [closure_11];
  const items2 = [tmp5, isFeatureAgeGated];
  return tmpResult.useStateFromStores(items1, () => {
    let tmp = !closure_0;
    if (!closure_0) {
      let result = isFeatureAgeGated;
      if (isFeatureAgeGated) {
        result = outer1_11.shouldCallReactiveCheck();
      }
      tmp = result;
    }
    return tmp;
  }, items2);
}
function shouldCallReactiveCheck() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp5 = prop !== require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (currentUser != null) {
      prop1 = currentUser.ageVerificationStatus;
    }
    tmp5 = prop1 !== tmp3(1906).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  let tmp7 = !tmp5;
  if (!tmp5) {
    let isFeatureAgeGatedResult = getRegionalFeatureConfig.isFeatureAgeGated(tmp3(5013).AgeGatedFeature.REACTIVE_CHECK);
    if (isFeatureAgeGatedResult) {
      isFeatureAgeGatedResult = closure_11.shouldCallReactiveCheck();
    }
    tmp7 = isFeatureAgeGatedResult;
  }
  return tmp7;
}
function _maybePerformReactiveCheck() {
  const self = this;
  const tmp = callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let tmp5 = null;
            if (outer1_21()) {
              let obj2 = v0(outer1_2[26]);
              c1 = 1;
              v0 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj2.fetchReactiveCheckResult();
              return obj1;
            }
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else {
          tmp5 = arg1;
          if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        }
        v0 = 3;
        obj2 = { value: null, done: true };
        obj2[0] = tmp5;
        return obj2;
      } catch (tmp9) {
        v0 = tmp;
        throw tmp9;
      }
    }
  });
  const _maybePerformReactiveCheck = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AgeGateSource, REACTIVE_CHECK_AGE_GATE_SOURCES: closure_14 } = result);
let items = [require("AgeVerificationModalEntryPoint").AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, require("AgeVerificationModalEntryPoint").AgeVerificationModalEntryPoint.START_STAGE_PROMPT, require("AgeVerificationModalEntryPoint").AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND];
let set = new Set(items);
let items1 = [, , , , , ];
({ NSFW_SERVER: arr2[0], NSFW_SERVER_INVITE: arr2[1], NSFW_SERVER_INVITE_EMBED: arr2[2], LARGE_GUILD: arr2[3], JOIN_LARGE_GUILD_UNDERAGE: arr2[4], ACCESS_LARGE_GUILD_UNDERAGE: arr2[5] } = AgeGateSource);
const set1 = new Set(items1);
let obj = { CTAS: "ctas", CONTENT_TYPE: "content_type" };
obj = { RETRY: "retry", CONNECT_TO_TEEN: "connect_to_teen" };
result = set.fileFinishedImporting("modules/age_assurance/AgeVerificationUtils.tsx");

export const ageGateSourceHasLightboxBackdrop = function ageGateSourceHasLightboxBackdrop(arg0) {
  return set1.has(arg0);
};
export const shouldShowTiggerPawtect = function shouldShowTiggerPawtect() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp5 = prop !== require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
  if (tmp5) {
    const isFeatureAgeGatedResult = getRegionalFeatureConfig.isFeatureAgeGated(tmp3(5013).AgeGatedFeature.REACTIVE_CHECK);
    let tmp8 = !isFeatureAgeGatedResult;
    if (isFeatureAgeGatedResult) {
      tmp8 = prop !== tmp3(1906).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
    }
    tmp5 = tmp8;
  }
  return tmp5;
};
export const useShouldShowTiggerPawtect = function useShouldShowTiggerPawtect() {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require(589) /* initialize */;
  let isFeatureAgeGated = require(3868) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(5013) /* AgeGatedFeature */.AgeGatedFeature.REACTIVE_CHECK);
  if (isFeatureAgeGated) {
    let prop;
    if (stateFromStores != null) {
      prop = stateFromStores.ageVerificationStatus;
    }
    isFeatureAgeGated = prop === tmp(1906).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  let prop1;
  if (stateFromStores != null) {
    prop1 = stateFromStores.ageVerificationStatus;
  }
  const obj2 = require(3868) /* isFeatureAgeGated */;
  return prop1 !== require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT && !isFeatureAgeGated;
};
export const isVerifiedTeen = function isVerifiedTeen() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  return prop === require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
};
export const useIsVerifiedTeen = function useIsVerifiedTeen() {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  return prop === require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
};
export const isVerifiedAdult = function isVerifiedAdult() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp5 = prop === require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
  if (!tmp5) {
    tmp5 = getRegionalFeatureConfig.isFeatureAgeGated(tmp3(5013).AgeGatedFeature.REACTIVE_CHECK) && prop === tmp3(1906).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
    const tmp7 = getRegionalFeatureConfig.isFeatureAgeGated(tmp3(5013).AgeGatedFeature.REACTIVE_CHECK) && prop === tmp3(1906).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  return tmp5;
};
export const useIsVerifiedAdult = function useIsVerifiedAdult() {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require(589) /* initialize */;
  let isFeatureAgeGated = require(3868) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(5013) /* AgeGatedFeature */.AgeGatedFeature.REACTIVE_CHECK);
  if (isFeatureAgeGated) {
    let prop;
    if (stateFromStores != null) {
      prop = stateFromStores.ageVerificationStatus;
    }
    isFeatureAgeGated = prop === tmp(1906).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  let prop1;
  if (stateFromStores != null) {
    prop1 = stateFromStores.ageVerificationStatus;
  }
  const obj2 = require(3868) /* isFeatureAgeGated */;
  return prop1 === require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT || isFeatureAgeGated;
};
export const useIsExplicitlyVerifiedAdult = function useIsExplicitlyVerifiedAdult() {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  return prop === require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
};
export const isAssignedByDiscord = function isAssignedByDiscord() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  return prop === require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
};
export const useIsAssignedByDiscord = function useIsAssignedByDiscord() {
  const items = [mergeGuildAvatar];
  return require(589) /* initialize */.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop === callback(table[16]).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  });
};
export const useShowAssignedAgeGroupSettings = function useShowAssignedAgeGroupSettings() {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop === callback(table[16]).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  });
  const obj = require(589) /* initialize */;
  const obj2 = require(3868) /* isFeatureAgeGated */;
  return require(3868) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(5013) /* AgeGatedFeature */.AgeGatedFeature.REACTIVE_CHECK) && stateFromStores;
};
export const AgeVerificationSystemNotificationEmbedKeys = obj;
export const AgeVerificationSystemNotificationCtaTypes = obj;
export const AgeVerificationSystemNotificationContentType = { VERIFIED_ADULT: "verified_adult", VERIFIED_TEEN: "verified_teen", ERROR: "error" };
export const isAgeVerificationMessageWithRetryCta = function isAgeVerificationMessageWithRetryCta(channel_id, id) {
  const message = store.getMessage(channel_id, id);
  if (null != message) {
    if (null != message.embeds) {
      if (0 !== message.embeds.length) {
        if (null != message.embeds[0].fields) {
          if (message.embeds[0].type === MessageEmbedTypes.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
            const fields = message.embeds[0].fields;
            const found = fields.find((rawName) => rawName.rawName === constants.CTAS);
            let hasItem;
            if (found != null) {
              const parts = found.rawValue.split(",");
              hasItem = parts.includes(obj.RETRY);
              const str = found.rawValue;
            }
            return hasItem;
          }
        }
      }
    }
  }
  return false;
};
export const isAgeVerificationMessageWithConnectToTeenCta = function isAgeVerificationMessageWithConnectToTeenCta(channel_id, id) {
  if (null == pendingConnection.getPendingConnection()) {
    return false;
  } else {
    const message = store.getMessage(channel_id, id);
    if (null != message) {
      if (null != message.embeds) {
        if (0 !== message.embeds.length) {
          if (null != message.embeds[0].fields) {
            if (message.embeds[0].type === MessageEmbedTypes.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
              const fields = message.embeds[0].fields;
              const found = fields.find((rawName) => rawName.rawName === constants.CTAS);
              let hasItem;
              if (found != null) {
                const parts = found.rawValue.split(",");
                hasItem = parts.includes(obj.CONNECT_TO_TEEN);
                const str = found.rawValue;
              }
              let enabled = true === hasItem;
              if (enabled) {
                const FamilyCenterConnectionPrereqExperiment = require(11121) /* apexExperiment */.FamilyCenterConnectionPrereqExperiment;
                enabled = FamilyCenterConnectionPrereqExperiment.getConfig({ location: "isAgeVerificationMessageWithConnectToTeenCta" }).enabled;
              }
              return enabled;
            }
          }
        }
      }
    }
    return false;
  }
};
export const isAgeVerified = function isAgeVerified() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp5 = prop !== require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (currentUser != null) {
      prop1 = currentUser.ageVerificationStatus;
    }
    tmp5 = prop1 !== require(1906) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  return tmp5;
};
export const useIsAgeVerified = function useIsAgeVerified() {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp5 = prop !== tmp(1906).AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp5 = prop1 !== tmp(1906).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  return tmp5;
};
export const useInitiateAgeVerification = function useInitiateAgeVerification(onComplete) {
  onComplete = onComplete.onComplete;
  let _require = onComplete;
  const entryPoint = onComplete.entryPoint;
  let flag = onComplete.shouldShowExpressiveModal;
  if (flag === undefined) {
    flag = false;
  }
  let classificationId = onComplete.classificationId;
  if (classificationId === undefined) {
    classificationId = null;
  }
  let callback2;
  let current;
  let callback;
  let obj = current;
  const tmp2 = callback2(current.useState(false), 2);
  callback2 = tmp2[1];
  const items = [mergeGuildAvatar];
  const stateFromStores = _require(flag[17]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  current = current.useRef(prop).current;
  const items1 = [current];
  callback = obj.useCallback(() => {
    let obj = entryPoint(flag[19]);
    obj = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: current };
    obj.dispatch(obj);
  }, items1);
  _require = undefined;
  _require = classificationId((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, arg1) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let _slicedToArray = tmp4;
              let fetchFingerprint = tmp8;
              let lib;
              outer1_4(true);
              let v0 = 2;
              entryPoint(flag[19]).dispatch({ type: "INITIATE_AGE_VERIFICATION" });
              const obj9 = entryPoint(flag[19]);
              const tmp59 = closure_1;
              const obj1 = { method: null, classificationId: null, vendor: null };
              obj1[0] = lib;
              let c2 = outer1_3;
              if (outer1_3 == null) {
                c2 = undefined;
              }
              obj1[1] = c2;
              obj1[2] = tmp59;
              c7 = 3;
              c8 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = lib(flag[20]).requestAgeVerification(obj1);
              return obj2;
            }
          } else if (1 === tmp8) {
            v0 = 0;
            outer1_4(false);
            throw dispatcher;
          } else {
            if (2 === tmp8) {
              v0 = 1;
              obj2 = entryPoint(flag[22]);
              obj2.showFailedToast(outer2_15.TIGGER_PAWTECT_ERROR);
              v0();
              v0 = 0;
              outer1_4(false);
              c8 = 3;
            } else if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              lib = arg1;
              const obj3 = { webviewUrl: null, verificationRequestId: null, verificationVendorName: null, incodeParameters: null, onComplete: null, onClose: null, onCancel: null, entryPoint: null, shouldShowExpressiveModal: null };
              obj3[0] = lib.verification_webview_url;
              obj3[1] = lib.verification_request_id;
              obj3[2] = lib.verification_vendor_name;
              obj3[3] = lib.incode_parameters;
              obj3[4] = lib;
              obj3[5] = v0;
              obj3[6] = v0;
              obj3[7] = closure_1;
              obj3[8] = outer1_2;
              if (false === obj7.showAgeVerification(obj3)) {
                obj = entryPoint(flag[22]);
                obj.showFailedToast(outer2_15.TIGGER_PAWTECT_ERROR);
                v0();
              }
              v0 = 1;
              obj7 = entryPoint(flag[21]);
            }
            v0 = 0;
            outer1_4(false);
            c8 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          }
        } catch (tmp36) {
          dispatcher = tmp36;
          if (tmp5 === v0) {
            c8 = tmp3;
            throw tmp36;
          } else if (tmp2 === tmp38) {
            c7 = tmp2;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  const items2 = [onComplete, callback, flag, classificationId, entryPoint];
  obj = {
    loading: tmp2[0],
    initiateAgeVerification: obj.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items2)
  };
  return obj;
};
export const useWatchAgeVerificationStatusChange = function useWatchAgeVerificationStatusChange(callback1) {
  const _require = callback1;
  const items = [mergeGuildAvatar];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let prop;
    if (currentUser != null) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  const tmp2 = importDefault(8125)(stateFromStores);
  const obj = _require(589);
  const items1 = [closure_8];
  const stateFromStores1 = _require(589).useStateFromStores(items1, () => null != closure_8.getSuspendedUserToken());
  const obj2 = _require(589);
  const items2 = [closure_8];
  let tmp5 = null != tmp2;
  const stateFromStores2 = _require(589).useStateFromStores(items2, () => closure_8.isAuthenticated());
  if (tmp5) {
    tmp5 = null != stateFromStores;
  }
  if (tmp5) {
    tmp5 = tmp2 !== stateFromStores;
  }
  importDefault = tmp5;
  let tmp6 = !stateFromStores1;
  if (!stateFromStores1) {
    tmp6 = !stateFromStores2;
  }
  const dependencyMap = tmp6;
  const items3 = [callback1, tmp5, tmp6];
  const effect = React.useEffect(() => {
    let tmp = closure_1;
    if (!closure_1) {
      tmp = closure_2;
    }
    if (tmp) {
      callback1();
    }
  }, items3);
};
export const isFullscreenAgeVerificationEntryPoint = function isFullscreenAgeVerificationEntryPoint(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    hasItem = set.has(arg0);
  }
  return hasItem;
};
export const getAgeVerificationGetStartedTitle = function getAgeVerificationGetStartedTitle(entryPoint) {
  const hasItem = set.has(entryPoint);
  const intl = require(1236) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1236) /* getSystemLocale */.t;
  if (hasItem) {
    let stringResult = string(t.lSWVTM);
  } else {
    stringResult = string(t.xYXsr6);
  }
  return stringResult;
};
export const getAgeVerificationGetStartedSubtitle = function getAgeVerificationGetStartedSubtitle(entryPoint, arg1, isSuspendedUser) {
  let flag = isSuspendedUser;
  if (isSuspendedUser === undefined) {
    flag = false;
  }
  if (set.has(entryPoint)) {
    const intl4 = require(1236) /* getSystemLocale */.intl;
    let stringResult = intl4.string(require(1236) /* getSystemLocale */.t["S/xS/w"]);
  } else if (flag) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    stringResult = intl3.string(importDefault(2741).h7qzoa);
  } else if (null != arg1) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    const obj = { handleOnHelpUrlHook: null };
    obj[0] = arg1;
    stringResult = intl2.format(importDefault(2741).RpMIT0, obj);
  } else {
    const intl = require(1236) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1236) /* getSystemLocale */.t.HxS3oQ);
  }
  return stringResult;
};
export { useShouldCallReactiveCheck };
export const useMaybePerformReactiveCheckForSource = function useMaybePerformReactiveCheckForSource(NSFW_SERVER) {
  let closure_0 = NSFW_SERVER;
  const tmp = useShouldCallReactiveCheck();
  const importDefault = tmp;
  const items = [tmp, NSFW_SERVER];
  const effect = React.useEffect(() => {
    let hasItem = closure_1;
    if (closure_1) {
      hasItem = outer1_14.has(NSFW_SERVER);
    }
    if (hasItem) {
      NSFW_SERVER(outer1_2[26]).fetchReactiveCheckResult();
      const obj = NSFW_SERVER(outer1_2[26]);
    }
  }, items);
};
export { shouldCallReactiveCheck };
export const maybePerformReactiveCheck = function maybePerformReactiveCheck() {
  const self = this;
  const apply = _maybePerformReactiveCheck.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
