// Module ID: 4343
// Function ID: 38376
// Name: isReactiveCheckEnabled
// Dependencies: []
// Exports: ageGateSourceHasLightboxBackdrop, getAgeVerificationGetStartedSubtitle, getAgeVerificationGetStartedTitle, isAgeVerificationMessageWithConnectToTeenCta, isAgeVerificationMessageWithRetryCta, isAssignedByDiscord, isFullscreenAgeVerificationEntryPoint, isVerifiedAdult, isVerifiedTeen, maybePerformReactiveCheck, shouldShowTiggerPawtect, useInitiateAgeVerification, useIsExplicitlyVerifiedAdult, useIsVerifiedAdult, useIsVerifiedTeen, useMaybePerformReactiveCheckForSource, useShouldShowTiggerPawtect, useShowAssignedAgeGroupSettings, useWatchAgeVerificationStatusChange

// Module 4343 (isReactiveCheckEnabled)
let AgeGateSource;
function isReactiveCheckEnabled() {
  return featureAgeGated.isFeatureAgeGated(arg1(dependencyMap[14]).AgeGatedFeature.REACTIVE_CHECK);
}
function useIsReactiveCheckEnabled() {
  return arg1(dependencyMap[15]).useIsFeatureAgeGated(arg1(dependencyMap[14]).AgeGatedFeature.REACTIVE_CHECK);
}
function useIsAssignedByDiscord() {
  const items = [closure_10];
  return arg1(dependencyMap[17]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let prop;
    if (null != currentUser) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop === callback(closure_2[16]).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  });
}
function isAgeVerified() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (null != currentUser) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp3 = prop !== arg1(dependencyMap[16]).AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp3) {
    let prop1;
    if (null != currentUser) {
      prop1 = currentUser.ageVerificationStatus;
    }
    tmp3 = prop1 !== arg1(dependencyMap[16]).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  return tmp3;
}
function useIsAgeVerified() {
  const items = [closure_10];
  const stateFromStores = arg1(dependencyMap[17]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (null != stateFromStores) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp3 = prop !== arg1(dependencyMap[16]).AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp3) {
    let prop1;
    if (null != stateFromStores) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp3 = prop1 !== arg1(dependencyMap[16]).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  return tmp3;
}
function useShouldCallReactiveCheck() {
  const tmp = useIsAgeVerified();
  const arg1 = tmp;
  const isFeatureAgeGated = arg1(dependencyMap[15]).useIsFeatureAgeGated(arg1(dependencyMap[14]).AgeGatedFeature.REACTIVE_CHECK);
  const importDefault = isFeatureAgeGated;
  const obj = arg1(dependencyMap[15]);
  const items = [closure_11];
  const items1 = [tmp, isFeatureAgeGated];
  return arg1(dependencyMap[17]).useStateFromStores(items, () => {
    let tmp = !tmp;
    if (!tmp) {
      let result = isFeatureAgeGated;
      if (isFeatureAgeGated) {
        result = closure_11.shouldCallReactiveCheck();
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
  if (callback2()) {
    tmp = yield callback(closure_2[26]).fetchReactiveCheckResult();
    const obj = callback(closure_2[26]);
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = arg1(dependencyMap[9]).FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS;
const MessageEmbedTypes = arg1(dependencyMap[10]).MessageEmbedTypes;
({ AgeGateSource, REACTIVE_CHECK_AGE_GATE_SOURCES: closure_14 } = arg1(dependencyMap[11]));
const SafetyToastType = arg1(dependencyMap[12]).SafetyToastType;
const items = [arg1(dependencyMap[13]).AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, arg1(dependencyMap[13]).AgeVerificationModalEntryPoint.START_STAGE_PROMPT, arg1(dependencyMap[13]).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND];
const set = new Set(items);
const items1 = [, , , , , ];
({ NSFW_SERVER: arr2[0], NSFW_SERVER_INVITE: arr2[1], NSFW_SERVER_INVITE_EMBED: arr2[2], LARGE_GUILD: arr2[3], JOIN_LARGE_GUILD_UNDERAGE: arr2[4], ACCESS_LARGE_GUILD_UNDERAGE: arr2[5] } = AgeGateSource);
const set1 = new Set(items1);
let obj = { CTAS: "ctas", CONTENT_TYPE: "content_type" };
obj = { RETRY: "retry", CONNECT_TO_TEEN: "connect_to_teen" };
const tmp2 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/age_assurance/AgeVerificationUtils.tsx");

export const ageGateSourceHasLightboxBackdrop = function ageGateSourceHasLightboxBackdrop(arg0) {
  return set1.has(arg0);
};
export const shouldShowTiggerPawtect = function shouldShowTiggerPawtect() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (null != currentUser) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp3 = prop !== arg1(dependencyMap[16]).AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
  if (tmp3) {
    let tmp5 = !isReactiveCheckEnabled();
    if (!tmp5) {
      tmp5 = prop !== arg1(dependencyMap[16]).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
    }
    tmp3 = tmp5;
  }
  return tmp3;
};
export const useShouldShowTiggerPawtect = function useShouldShowTiggerPawtect() {
  const items = [closure_10];
  const stateFromStores = arg1(dependencyMap[17]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp2 = useIsReactiveCheckEnabled();
  if (tmp2) {
    let prop;
    if (null != stateFromStores) {
      prop = stateFromStores.ageVerificationStatus;
    }
    tmp2 = prop === arg1(dependencyMap[16]).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  let prop1;
  if (null != stateFromStores) {
    prop1 = stateFromStores.ageVerificationStatus;
  }
  const obj = arg1(dependencyMap[17]);
  return prop1 !== arg1(dependencyMap[16]).AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT && !tmp2;
};
export const isVerifiedTeen = function isVerifiedTeen() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (null != currentUser) {
    prop = currentUser.ageVerificationStatus;
  }
  return prop === arg1(dependencyMap[16]).AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
};
export const useIsVerifiedTeen = function useIsVerifiedTeen() {
  const items = [closure_10];
  const stateFromStores = arg1(dependencyMap[17]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (null != stateFromStores) {
    prop = stateFromStores.ageVerificationStatus;
  }
  return prop === arg1(dependencyMap[16]).AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN;
};
export const isVerifiedAdult = function isVerifiedAdult() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (null != currentUser) {
    prop = currentUser.ageVerificationStatus;
  }
  let tmp3 = prop === arg1(dependencyMap[16]).AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
  if (!tmp3) {
    let tmp5 = isReactiveCheckEnabled();
    if (tmp5) {
      tmp5 = prop === arg1(dependencyMap[16]).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
    }
    tmp3 = tmp5;
  }
  return tmp3;
};
export const useIsVerifiedAdult = function useIsVerifiedAdult() {
  const items = [closure_10];
  const stateFromStores = arg1(dependencyMap[17]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp2 = useIsReactiveCheckEnabled();
  if (tmp2) {
    let prop;
    if (null != stateFromStores) {
      prop = stateFromStores.ageVerificationStatus;
    }
    tmp2 = prop === arg1(dependencyMap[16]).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  let prop1;
  if (null != stateFromStores) {
    prop1 = stateFromStores.ageVerificationStatus;
  }
  const obj = arg1(dependencyMap[17]);
  return prop1 === arg1(dependencyMap[16]).AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT || tmp2;
};
export const useIsExplicitlyVerifiedAdult = function useIsExplicitlyVerifiedAdult() {
  const items = [closure_10];
  const stateFromStores = arg1(dependencyMap[17]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (null != stateFromStores) {
    prop = stateFromStores.ageVerificationStatus;
  }
  return prop === arg1(dependencyMap[16]).AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
};
export const isAssignedByDiscord = function isAssignedByDiscord() {
  const currentUser = authStore.getCurrentUser();
  let prop;
  if (null != currentUser) {
    prop = currentUser.ageVerificationStatus;
  }
  return prop === arg1(dependencyMap[16]).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
};
export { useIsAssignedByDiscord };
export const useShowAssignedAgeGroupSettings = function useShowAssignedAgeGroupSettings() {
  const tmp = useIsAssignedByDiscord();
  const obj = arg1(dependencyMap[15]);
  return arg1(dependencyMap[15]).useIsFeatureAgeGated(arg1(dependencyMap[14]).AgeGatedFeature.REACTIVE_CHECK) && tmp;
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
              const found = fields.find((rawName) => rawName.rawName === constants.CTAS);
              let hasItem;
              if (null != found) {
                const parts = found.rawValue.split(",");
                hasItem = parts.includes(obj.CONNECT_TO_TEEN);
                const str = found.rawValue;
              }
              let enabled = !tmp3;
              if (true === hasItem) {
                const FamilyCenterConnectionPrereqExperiment = id(dependencyMap[18]).FamilyCenterConnectionPrereqExperiment;
                const obj = { location: "isAgeVerificationMessageWithConnectToTeenCta" };
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
  const arg1 = onComplete;
  const entryPoint = onComplete.entryPoint;
  const importDefault = entryPoint;
  let flag = onComplete.shouldShowExpressiveModal;
  if (flag === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  let classificationId = onComplete.classificationId;
  if (classificationId === undefined) {
    classificationId = null;
  }
  let closure_3 = classificationId;
  let callback2;
  let React;
  let closure_6;
  const tmp3 = callback2(React.useState(false), 2);
  callback2 = tmp3[1];
  let obj = arg1(dependencyMap[17]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (null != stateFromStores) {
    prop = stateFromStores.ageVerificationStatus;
  }
  const current = React.useRef(prop).current;
  React = current;
  const items1 = [current];
  const callback = React.useCallback(() => {
    let obj = entryPoint(flag[19]);
    obj = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: current };
    obj.dispatch(obj);
  }, items1);
  closure_6 = callback;
  const items2 = [onComplete, callback, flag, classificationId, entryPoint];
  obj = {
    loading: tmp3[0],
    initiateAgeVerification: React.useCallback(() => {
      let closure_0 = classificationId(async (arg0) => {
        callback3(true);
        let obj = callback2(closure_2[19]);
        obj.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
        obj = { method: arg0 };
        let tmp3;
        if (null != closure_3) {
          tmp3 = closure_3;
        }
        obj.classificationId = tmp3;
        const tmp4 = yield callback(closure_2[20]).requestAgeVerification(obj);
        const obj2 = callback(closure_2[20]);
        obj = { webviewUrl: tmp4.verification_webview_url, verificationRequestId: tmp4.verification_request_id, verificationVendorName: tmp4.verification_vendor_name, incodeParameters: tmp4.incode_parameters, onComplete: callback, onClose: callback4, onCancel: callback4, entryPoint: callback2, shouldShowExpressiveModal: closure_2 };
        if (false === obj4.showAgeVerification(obj)) {
          callback2(closure_2[22]).showFailedToast(constants.TIGGER_PAWTECT_ERROR);
          callback4();
          const obj6 = callback2(closure_2[22]);
        }
        callback3(false);
      });
      return function() {
        return callback(...arguments);
      };
    }(), items2)
  };
  return obj;
};
export const useWatchAgeVerificationStatusChange = function useWatchAgeVerificationStatusChange(callback1) {
  const arg1 = callback1;
  const items = [closure_10];
  const stateFromStores = arg1(dependencyMap[17]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let prop;
    if (null != currentUser) {
      prop = currentUser.ageVerificationStatus;
    }
    return prop;
  });
  const tmp2 = importDefault(dependencyMap[23])(stateFromStores);
  const obj = arg1(dependencyMap[17]);
  const items1 = [closure_8];
  const stateFromStores1 = arg1(dependencyMap[17]).useStateFromStores(items1, () => null != closure_8.getSuspendedUserToken());
  const obj2 = arg1(dependencyMap[17]);
  const items2 = [closure_8];
  let tmp5 = null != tmp2;
  const stateFromStores2 = arg1(dependencyMap[17]).useStateFromStores(items2, () => closure_8.isAuthenticated());
  if (tmp5) {
    tmp5 = null != stateFromStores;
  }
  if (tmp5) {
    tmp5 = tmp2 !== stateFromStores;
  }
  const importDefault = tmp5;
  const dependencyMap = tmp6;
  const items3 = [callback1, tmp5, !stateFromStores1 && !stateFromStores2];
  const effect = React.useEffect(() => {
    let tmp = tmp5;
    if (!tmp5) {
      tmp = tmp6;
    }
    if (tmp) {
      arg0();
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
  const intl = arg1(dependencyMap[24]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[24]).t;
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
    const intl4 = handleOnHelpUrlHook(dependencyMap[24]).intl;
    let stringResult = intl4.string(handleOnHelpUrlHook(dependencyMap[24]).t.S/xS/w);
  } else if (flag) {
    const intl3 = handleOnHelpUrlHook(dependencyMap[24]).intl;
    stringResult = intl3.string(importDefault(dependencyMap[25]).h7qzoa);
  } else if (null != handleOnHelpUrlHook) {
    const intl2 = handleOnHelpUrlHook(dependencyMap[24]).intl;
    const obj = { handleOnHelpUrlHook };
    stringResult = intl2.format(importDefault(dependencyMap[25]).RpMIT0, obj);
  } else {
    const intl = handleOnHelpUrlHook(dependencyMap[24]).intl;
    stringResult = intl.string(handleOnHelpUrlHook(dependencyMap[24]).t.HxS3oQ);
  }
  return stringResult;
};
export { useShouldCallReactiveCheck };
export const useMaybePerformReactiveCheckForSource = function useMaybePerformReactiveCheckForSource(NSFW_SERVER) {
  const arg1 = NSFW_SERVER;
  const tmp = useShouldCallReactiveCheck();
  const importDefault = tmp;
  const items = [tmp, NSFW_SERVER];
  const effect = React.useEffect(() => {
    let hasItem = tmp;
    if (tmp) {
      hasItem = set.has(arg0);
    }
    if (hasItem) {
      arg0(closure_2[26]).fetchReactiveCheckResult();
      const obj = arg0(closure_2[26]);
    }
  }, items);
};
export { shouldCallReactiveCheck };
export const maybePerformReactiveCheck = function maybePerformReactiveCheck() {
  return _maybePerformReactiveCheck(...arguments);
};
