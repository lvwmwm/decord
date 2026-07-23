// Module ID: 4347
// Function ID: 38416
// Name: isReactiveCheckEnabled
// Dependencies: [5, 57, 31, 4348, 3810, 1194, 4349, 1849, 7568, 7537, 653, 1197, 7483, 7538, 4956, 3809, 1881, 566, 11072, 686, 7542, 7536, 7488, 8284, 1212, 2716, 12693, 2]
// Exports: ageGateSourceHasLightboxBackdrop, getAgeVerificationGetStartedSubtitle, getAgeVerificationGetStartedTitle, isAgeVerificationMessageWithConnectToTeenCta, isAgeVerificationMessageWithRetryCta, isAssignedByDiscord, isFullscreenAgeVerificationEntryPoint, isVerifiedAdult, isVerifiedTeen, maybePerformReactiveCheck, shouldShowTiggerPawtect, useInitiateAgeVerification, useIsExplicitlyVerifiedAdult, useIsVerifiedAdult, useIsVerifiedTeen, useMaybePerformReactiveCheckForSource, useShouldShowTiggerPawtect, useShowAssignedAgeGroupSettings, useWatchAgeVerificationStatusChange

// Module 4347 (isReactiveCheckEnabled)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import closure_5 from "result";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS as closure_12 } from "set";
import { MessageEmbedTypes } from "ME";
import result from "result";
import { SafetyToastType } from "SafetyToastType";
import set from "result";

let AgeGateSource;
let closure_14;
let require = arg1;
function isReactiveCheckEnabled() {
  return featureAgeGated.isFeatureAgeGated(require(4956) /* AgeGatedFeature */.AgeGatedFeature.REACTIVE_CHECK);
}
function useIsReactiveCheckEnabled() {
  return require(3809) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(4956) /* AgeGatedFeature */.AgeGatedFeature.REACTIVE_CHECK);
}
function useIsAssignedByDiscord() {
  const items = [closure_10];
  return require(566) /* initialize */.useStateFromStores(items, () => {
    const currentUser = outer1_10.getCurrentUser();
    let prop;
    if (null != currentUser) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop === outer1_0(outer1_2[16]).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  });
}
function isAgeVerified() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (null != currentUser) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp3 = prop !== require(1881) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp3) {
    let prop1;
    if (null != currentUser) {
      prop1 = currentUser.ageVerificationStatus;
    }
    tmp3 = prop1 !== require(1881) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  return tmp3;
}
function useIsAgeVerified() {
  const items = [closure_10];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_10.getCurrentUser());
  let prop;
  if (null != stateFromStores) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp3 = prop !== require(1881) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp3) {
    let prop1;
    if (null != stateFromStores) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp3 = prop1 !== require(1881) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  return tmp3;
}
function useShouldCallReactiveCheck() {
  let tmp = useIsAgeVerified();
  const require = tmp;
  const isFeatureAgeGated = require(3809) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(4956) /* AgeGatedFeature */.AgeGatedFeature.REACTIVE_CHECK);
  const obj = require(3809) /* isFeatureAgeGated */;
  const items = [closure_11];
  const items1 = [tmp, isFeatureAgeGated];
  return require(566) /* initialize */.useStateFromStores(items, () => {
    let tmp = !closure_0;
    if (!closure_0) {
      let result = isFeatureAgeGated;
      if (isFeatureAgeGated) {
        result = outer1_11.shouldCallReactiveCheck();
      }
      tmp = result;
    }
    return tmp;
  }, items1);
}
function shouldCallReactiveCheck() {
  const tmp = isAgeVerified();
  let tmp2 = !tmp;
  if (!tmp) {
    let result = isReactiveCheckEnabled();
    if (result) {
      result = closure_11.shouldCallReactiveCheck();
    }
    tmp2 = result;
  }
  return tmp2;
}
async function _maybePerformReactiveCheck() {
  let tmp = null;
  if (outer2_26()) {
    tmp = yield outer2_0(outer2_2[26]).fetchReactiveCheckResult();
    const obj = outer2_0(outer2_2[26]);
  }
  return tmp;
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
  if (null != currentUser) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp3 = prop !== require(1881) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
  if (tmp3) {
    let tmp5 = !isReactiveCheckEnabled();
    if (!tmp5) {
      tmp5 = prop !== require(1881) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
    }
    tmp3 = tmp5;
  }
  return tmp3;
};
export const useShouldShowTiggerPawtect = function useShouldShowTiggerPawtect() {
  const items = [closure_10];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_10.getCurrentUser());
  let tmp2 = useIsReactiveCheckEnabled();
  if (tmp2) {
    let prop;
    if (null != stateFromStores) {
      prop = stateFromStores.ageVerificationStatus;
    }
    tmp2 = prop === require(1881) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  let prop1;
  if (null != stateFromStores) {
    prop1 = stateFromStores.ageVerificationStatus;
  }
  const obj = require(566) /* initialize */;
  return prop1 !== require(1881) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT && !tmp2;
};
export const isVerifiedTeen = function isVerifiedTeen() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (null != currentUser) {
    prop = currentUser.ageVerificationStatus;
  }
  return prop === require(1881) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
};
export const useIsVerifiedTeen = function useIsVerifiedTeen() {
  const items = [closure_10];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_10.getCurrentUser());
  let prop;
  if (null != stateFromStores) {
    prop = stateFromStores.ageVerificationStatus;
  }
  return prop === require(1881) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
};
export const isVerifiedAdult = function isVerifiedAdult() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (null != currentUser) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp3 = prop === require(1881) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
  if (!tmp3) {
    let tmp5 = isReactiveCheckEnabled();
    if (tmp5) {
      tmp5 = prop === require(1881) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
    }
    tmp3 = tmp5;
  }
  return tmp3;
};
export const useIsVerifiedAdult = function useIsVerifiedAdult() {
  const items = [closure_10];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_10.getCurrentUser());
  let tmp2 = useIsReactiveCheckEnabled();
  if (tmp2) {
    let prop;
    if (null != stateFromStores) {
      prop = stateFromStores.ageVerificationStatus;
    }
    tmp2 = prop === require(1881) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  let prop1;
  if (null != stateFromStores) {
    prop1 = stateFromStores.ageVerificationStatus;
  }
  const obj = require(566) /* initialize */;
  return prop1 === require(1881) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT || tmp2;
};
export const useIsExplicitlyVerifiedAdult = function useIsExplicitlyVerifiedAdult() {
  const items = [closure_10];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_10.getCurrentUser());
  let prop;
  if (null != stateFromStores) {
    prop = stateFromStores.ageVerificationStatus;
  }
  return prop === require(1881) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
};
export const isAssignedByDiscord = function isAssignedByDiscord() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (null != currentUser) {
    prop = currentUser.ageVerificationStatus;
  }
  return prop === require(1881) /* PermissionOverwriteType */.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
};
export { useIsAssignedByDiscord };
export const useShowAssignedAgeGroupSettings = function useShowAssignedAgeGroupSettings() {
  const tmp = useIsAssignedByDiscord();
  const obj = require(3809) /* isFeatureAgeGated */;
  return require(3809) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(4956) /* AgeGatedFeature */.AgeGatedFeature.REACTIVE_CHECK) && tmp;
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
            const found = fields.find((rawName) => rawName.rawName === outer1_18.CTAS);
            let hasItem;
            if (null != found) {
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
              const found = fields.find((rawName) => rawName.rawName === outer1_18.CTAS);
              let hasItem;
              if (null != found) {
                const parts = found.rawValue.split(",");
                hasItem = parts.includes(obj.CONNECT_TO_TEEN);
                const str = found.rawValue;
              }
              let enabled = !tmp3;
              if (true === hasItem) {
                const FamilyCenterConnectionPrereqExperiment = require(11072) /* apexExperiment */.FamilyCenterConnectionPrereqExperiment;
                obj = { location: "isAgeVerificationMessageWithConnectToTeenCta" };
                enabled = FamilyCenterConnectionPrereqExperiment.getConfig(obj).enabled;
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
export { isAgeVerified };
export { useIsAgeVerified };
export const useInitiateAgeVerification = function useInitiateAgeVerification(onComplete) {
  onComplete = onComplete.onComplete;
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
  let tmp3 = callback2(current.useState(false), 2);
  callback2 = tmp3[1];
  let obj = onComplete(flag[17]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.getCurrentUser());
  let prop;
  if (null != stateFromStores) {
    prop = stateFromStores.ageVerificationStatus;
  }
  current = current.useRef(prop).current;
  const items1 = [current];
  callback = current.useCallback(() => {
    let obj = entryPoint(flag[19]);
    obj = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: current };
    obj.dispatch(obj);
  }, items1);
  const items2 = [onComplete, callback, flag, classificationId, entryPoint];
  obj = {
    loading: tmp3[0],
    initiateAgeVerification: current.useCallback((() => {
      let closure_0 = classificationId(async (arg0) => {
        outer2_4(true);
        let obj = entryPoint(flag[19]);
        obj.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
        obj = { method: arg0 };
        let tmp3;
        if (null != outer2_3) {
          tmp3 = outer2_3;
        }
        obj.classificationId = tmp3;
        const tmp4 = yield onComplete(flag[20]).requestAgeVerification(obj);
        const obj2 = onComplete(flag[20]);
        obj = { webviewUrl: tmp4.verification_webview_url, verificationRequestId: tmp4.verification_request_id, verificationVendorName: tmp4.verification_vendor_name, incodeParameters: tmp4.incode_parameters, onComplete: closure_0, onClose: outer2_6, onCancel: outer2_6, entryPoint: outer2_1, shouldShowExpressiveModal: outer2_2 };
        if (false === obj4.showAgeVerification(obj)) {
          entryPoint(flag[22]).showFailedToast(outer3_15.TIGGER_PAWTECT_ERROR);
          outer2_6();
          const obj6 = entryPoint(flag[22]);
        }
        outer2_4(false);
      });
      return function() {
        return callback(...arguments);
      };
    })(), items2)
  };
  return obj;
};
export const useWatchAgeVerificationStatusChange = function useWatchAgeVerificationStatusChange(callback1) {
  const _require = callback1;
  const items = [closure_10];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    const currentUser = outer1_10.getCurrentUser();
    let prop;
    if (null != currentUser) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  const tmp2 = importDefault(8284)(stateFromStores);
  const obj = _require(566);
  const items1 = [closure_8];
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => null != outer1_8.getSuspendedUserToken());
  const obj2 = _require(566);
  const items2 = [closure_8];
  let tmp5 = null != tmp2;
  const stateFromStores2 = _require(566).useStateFromStores(items2, () => outer1_8.isAuthenticated());
  if (tmp5) {
    tmp5 = null != stateFromStores;
  }
  if (tmp5) {
    tmp5 = tmp2 !== stateFromStores;
  }
  importDefault = tmp5;
  const dependencyMap = tmp6;
  const items3 = [callback1, tmp5, !stateFromStores1 && !stateFromStores2];
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
  const intl = require(1212) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1212) /* getSystemLocale */.t;
  if (hasItem) {
    let stringResult = string(t.lSWVTM);
  } else {
    stringResult = string(t.xYXsr6);
  }
  return stringResult;
};
export const getAgeVerificationGetStartedSubtitle = function getAgeVerificationGetStartedSubtitle(entryPoint, handleOnHelpUrlHook, isSuspendedUser) {
  let flag = isSuspendedUser;
  if (isSuspendedUser === undefined) {
    flag = false;
  }
  if (set.has(entryPoint)) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl4.string(require(1212) /* getSystemLocale */.t["S/xS/w"]);
  } else if (flag) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    stringResult = intl3.string(importDefault(2716).h7qzoa);
  } else if (null != handleOnHelpUrlHook) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj = { handleOnHelpUrlHook };
    stringResult = intl2.format(importDefault(2716).RpMIT0, obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t.HxS3oQ);
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
  return _maybePerformReactiveCheck(...arguments);
};
