// Module ID: 5048
// Function ID: 5049
// Name: AgeVerificationUtils
// Dependencies: [5, 32, 19, 5049, 5050, 502, 5056, 1372, 7904, 7860, 1074, 1099, 7847, 7861, 5736, 1979, 504, 5735, 7887, 573, 7859, 7852, 7866, 7720, 1115, 3039, 13307, 2]
// Exports: ageGateSourceHasLightboxBackdrop, getAgeVerificationGetStartedSubtitle, getAgeVerificationGetStartedTitle, isAgeVerificationMessageWithConnectToTeenCta, isAgeVerificationMessageWithManualReviewCta, isAgeVerificationMessageWithRetryCta, isAgeVerified, isAssignedByDiscord, isFullscreenAgeVerificationEntryPoint, isVerifiedAdult, isVerifiedTeen, maybePerformReactiveCheck, shouldShowTiggerPawtect, useInitiateAgeVerification, useInitiateAgeVerificationV2, useIsAgeVerified, useIsAssignedByDiscord, useIsExplicitlyVerifiedAdult, useIsVerifiedAdult, useIsVerifiedTeen, useMaybePerformReactiveCheckForSource, useShouldShowTiggerPawtect, useShowAssignedAgeGroupSettings, useWatchAgeVerificationStatusChange

// Module 5048 (AgeVerificationUtils)
import get_initialized from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import intl7 from "intl" /* 1115 */;
import Server from "Server" /* 1979 */;
import _modDef3039 from "module_3039" /* 3039 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5735 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5736 */;
import usePreviousDefault from "usePrevious" /* 7720 */;
import Constants2 from "Constants" /* 7847 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 7860 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 7861 */;
import AgeVerificationURLActionCreators from "AgeVerificationURLActionCreators" /* 7866 */;
import ManualAgeAssuranceFallbackExperiment from "ManualAgeAssuranceFallbackExperiment" /* 7887 */;
import ReactiveCheckActionCreators from "ReactiveCheckActionCreators" /* 13307 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FamilyCenterPendingConnectionStore from "FamilyCenterPendingConnectionStore" /* 5049 */;
import RegionalFeatureConfigStore from "RegionalFeatureConfigStore" /* 5050 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MessageStore from "MessageStore" /* 5056 */;
import UserStore from "UserStore" /* 1372 */;
import AgeVerificationStore from "AgeVerificationStore" /* 7904 */;
import Constants from "Constants" /* 1074 */;
import AgeGateConstants from "AgeGateConstants" /* 1099 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1, code, dependencyMap, importDefault, v2;

let AgeGateSource;
let closure_14;
let closure_15;
let map1;
const f80065 = () => currentUser.getCurrentUser();
const f80066 = () => {
  currentUser = currentUser.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  const tmp5 = prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT || prop === require("Server").AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
  return tmp5;
};
const f80067 = () => currentUser.getCurrentUser();
function useAgeVerificationRunner(onComplete) {
  let closure_4;
  let currentUser;
  let first;
  onComplete = onComplete.onComplete;
  let entryPoint = onComplete.entryPoint;
  let flag = onComplete.shouldShowExpressiveModal;
  if (flag === undefined) {
    flag = false;
  }
  const onMethodUnavailable = onComplete.onMethodUnavailable;
  _slicedToArray = undefined;
  let current;
  let callback;
  obj = current;
  [first, _slicedToArray] = current.useState(false);
  obj2 = onComplete(flag[16]);
  const items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  const useRef = current.useRef;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  current = useRef(prop).current;
  const items1 = [current];
  callback = obj.useCallback(() => {
    obj = DispatcherDefault;
    obj2 = { type: "CLOSE_AGE_VERIFICATION_MODAL", status: current };
    obj.dispatch(obj2);
  }, items1);
  const useCallback = obj.useCallback;
  let closure_0 = onMethodUnavailable((onComplete, entryPoint) => {
    let closure_3;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, value) {
      let externalWindow;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              onComplete = entryPoint;
              entryPoint = undefined;
              tmp64(true);
              c5 = 2;
              const obj5 = closure_2_1(true[19]);
              obj5.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
              code = onComplete();
              v2 = 3;
              c7 = 1;
              return { value: code, done: false };
            }
          } else if (1 === v2) {
            c5 = 0;
            code = tmp64(false);
            throw tmp64;
          } else {
            if (2 === v2) {
              c5 = 1;
              code = v2();
              if (null != tmp) {
                code = undefined;
                if (code != null) {
                  const body = code.body;
                  if (body != null) {
                    code = body.code;
                  }
                }
                if (code === constants.AGE_VERIFICATION_METHOD_UNAVAILABLE) {
                  const obj4 = closure_2_1(true[21]);
                  code = obj4.showFailedToast(constants2.AGE_VERIFICATION_METHOD_UNAVAILABLE);
                  tmp();
                }
              }
              code = closure_2_1(true[21]).showFailedToast;
              closure_2_1(true[21]);
              code(constants2.TIGGER_PAWTECT_ERROR);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              tmp64(false);
              c7 = 3;
              return { value, done: true };
            } else {
              entryPoint = value;
              code = closure_2_1(true[20]).showAgeVerification;
              let method;
              closure_2_1(true[20]);
              if (onComplete != null) {
                method = onComplete.method;
              }
              obj = { method, externalWindow, webviewUrl: entryPoint.verification_webview_url, verificationRequestId: entryPoint.verification_request_id, verificationVendorName: entryPoint.verification_vendor_name, incodeParameters: entryPoint.incode_parameters, onComplete, onClose: v2, onCancel: v2, entryPoint, shouldShowExpressiveModal: code };
              externalWindow = undefined;
              if (onComplete != null) {
                externalWindow = onComplete.externalWindow;
              }
              if (false === code(obj)) {
                obj2 = closure_2_1(true[21]);
                code = obj2.showFailedToast(constants2.TIGGER_PAWTECT_ERROR);
                v2();
              }
              c5 = 1;
            }
            c5 = 0;
            tmp64(false);
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp64) {
          if (0 === c5) {
            c7 = 3;
            throw tmp64;
          } else if (1 === tmp66) {
            v2 = 1;
          } else {
            v2 = 2;
          }
        }
      }
    })();
  });
  const items2 = [onComplete, callback, flag, entryPoint, onMethodUnavailable];
  const obj3 = {
    loading: first,
    startVerification: useCallback(function() {
      return closure_0(...arguments);
    }, items2)
  };
  return obj3;
}
function useShouldCallReactiveCheck() {
  let closure_0;
  let currentUser;
  let tmp = _require;
  const items = [UserStore];
  obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f80067);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp5 = prop !== tmp(1979).AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp5 = prop1 !== tmp(1979).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  _require = tmp5;
  const tmpResult = tmp(5735);
  const isFeatureAgeGated = tmpResult.useIsFeatureAgeGated(tmp(5736).AgeGatedFeature.REACTIVE_CHECK);
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
    tmp5 = prop1 !== tmp3(1979).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  let tmp7 = !tmp5;
  if (tmp7) {
    tmp7 = RegionalFeatureConfigStore.isFeatureAgeGated(tmp3(5736).AgeGatedFeature.REACTIVE_CHECK) && AgeVerificationStore.shouldCallReactiveCheck();
    const isFeatureAgeGatedResult = RegionalFeatureConfigStore.isFeatureAgeGated(tmp3(5736).AgeGatedFeature.REACTIVE_CHECK) && AgeVerificationStore.shouldCallReactiveCheck();
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
        obj2 = { value, done: true };
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
let _slicedToArray = _slicedToArray_mod;
({ AbortCodes: map1, MessageEmbedTypes: closure_14 } = Constants);
({ AgeGateSource, REACTIVE_CHECK_AGE_GATE_SOURCES: closure_15 } = AgeGateConstants);
const SafetyToastType = Constants2.SafetyToastType;
let items = [AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.START_STAGE_PROMPT, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND];
const set = new Set(items);
let items1 = [, , , , , ];
({ NSFW_SERVER: arr2[0], NSFW_SERVER_INVITE: arr2[1], NSFW_SERVER_INVITE_EMBED: arr2[2], LARGE_GUILD: arr2[3], JOIN_LARGE_GUILD_UNDERAGE: arr2[4], ACCESS_LARGE_GUILD_UNDERAGE: arr2[5] } = AgeGateSource);
const set1 = new Set(items1);
obj = { CTAS: "ctas", CONTENT_TYPE: "content_type" };
let obj2 = { RETRY: "retry", CONNECT_TO_TEEN: "connect_to_teen", REQUEST_MANUAL_REVIEW: "request_manual_review" };
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationUtils.tsx");

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
export const useShouldShowTiggerPawtect = function useShouldShowTiggerPawtect() {
  let currentUser;
  const items = [UserStore];
  obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, f80065);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp5 = prop === tmp(1979).AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
  if (!tmp5) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp5 = prop1 === tmp(1979).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  return !tmp5;
};
export const isVerifiedTeen = function isVerifiedTeen() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  const tmp5 = prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_TEEN || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
  return tmp5;
};
export const useIsVerifiedTeen = function useIsVerifiedTeen() {
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
};
export const isVerifiedAdult = function isVerifiedAdult() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  const tmp5 = prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  return tmp5;
};
export const useIsVerifiedAdult = function useIsVerifiedAdult() {
  const items = [UserStore];
  obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, f80065);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp5 = prop === tmp(1979).AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
  if (!tmp5) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp5 = prop1 === tmp(1979).AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT;
  }
  return tmp5;
};
export const useIsExplicitlyVerifiedAdult = function useIsExplicitlyVerifiedAdult() {
  let currentUser;
  const items = [UserStore];
  obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  return prop === Server.AgeVerificationStatusUkAndAusOnly.VERIFIED_ADULT;
};
export const isAssignedByDiscord = function isAssignedByDiscord() {
  const currentUser = UserStore.getCurrentUser();
  let prop;
  if (currentUser != null) {
    prop = currentUser.ageVerificationStatus;
  }
  const tmp5 = prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_ADULT || prop === Server.AgeVerificationStatusUkAndAusOnly.INFERRED_TEEN;
  return tmp5;
};
export const useIsAssignedByDiscord = function useIsAssignedByDiscord() {
  const items = [UserStore];
  obj = get_initialized;
  return obj.useStateFromStores(items, f80066);
};
export const useShowAssignedAgeGroupSettings = function useShowAssignedAgeGroupSettings() {
  const items = [UserStore];
  obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, f80066);
  obj2 = RegionalFeatureConfigUtils;
  const tmp2 = obj2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.REACTIVE_CHECK) && stateFromStores;
  return tmp2;
};
export const AgeVerificationSystemNotificationEmbedKeys = obj;
export const AgeVerificationSystemNotificationCtaTypes = obj2;
export const AgeVerificationSystemNotificationContentType = { VERIFIED_ADULT: "verified_adult", VERIFIED_TEEN: "verified_teen", ERROR: "error", FAE_FAILED: "fae_failed", ID_FAILED: "id_failed", UNDERAGE: "underage", MANUAL_REVIEW_SUBMITTED: "manual_review_submitted" };
export const isAgeVerificationMessageWithRetryCta = function isAgeVerificationMessageWithRetryCta(channel_id, id) {
  const message = MessageStore.getMessage(channel_id, id);
  if (null != message) {
    if (null != message.embeds) {
      if (0 !== message.embeds.length) {
        if (null != message.embeds[0].fields) {
          if (message.embeds[0].type === constants.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
            const fields = message.embeds[0].fields;
            const found = fields.find((rawName) => rawName.rawName === constants.CTAS);
            let hasItem;
            if (found != null) {
              const str = found.rawValue;
              const parts = str.split(",");
              hasItem = parts.includes(obj2.RETRY);
            }
            return hasItem;
          }
        }
      }
    }
  }
  return false;
};
export const isAgeVerificationMessageWithManualReviewCta = function isAgeVerificationMessageWithManualReviewCta(channel_id, id) {
  const message = MessageStore.getMessage(channel_id, id);
  if (null != message) {
    if (null != message.embeds) {
      if (0 !== message.embeds.length) {
        if (null != message.embeds[0].fields) {
          if (message.embeds[0].type === constants.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
            const fields = message.embeds[0].fields;
            const found = fields.find((rawName) => rawName.rawName === constants.CTAS);
            let hasItem;
            if (found != null) {
              const str = found.rawValue;
              const parts = str.split(",");
              hasItem = parts.includes(obj2.REQUEST_MANUAL_REVIEW);
            }
            let result = true === hasItem;
            if (result) {
              obj2 = ManualAgeAssuranceFallbackExperiment;
              result = obj2.isManualAgeAssuranceFallbackEnabled("isAgeVerificationMessageWithManualReviewCta");
            }
            return result;
          }
        }
      }
    }
  }
  return false;
};
export const isAgeVerificationMessageWithConnectToTeenCta = function isAgeVerificationMessageWithConnectToTeenCta(channel_id, id) {
  if (null == FamilyCenterPendingConnectionStore.getPendingConnection()) {
    return false;
  } else {
    const message = MessageStore.getMessage(channel_id, id);
    if (null != message) {
      if (null != message.embeds) {
        if (0 !== message.embeds.length) {
          if (null != message.embeds[0].fields) {
            if (message.embeds[0].type === constants.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
              const fields = message.embeds[0].fields;
              const found = fields.find((rawName) => rawName.rawName === constants.CTAS);
              let hasItem;
              if (found != null) {
                const str = found.rawValue;
                const parts = str.split(",");
                hasItem = parts.includes(obj2.CONNECT_TO_TEEN);
              }
              return true === hasItem;
            }
          }
        }
      }
    }
    return false;
  }
};
export const isAgeVerified = function isAgeVerified() {
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
};
export const useIsAgeVerified = function useIsAgeVerified() {
  const items = [UserStore];
  obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, f80067);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.ageVerificationStatus;
  }
  let tmp5 = prop !== tmp(1979).AgeVerificationStatusUkAndAusOnly.UNVERIFIED;
  if (tmp5) {
    let prop1;
    if (stateFromStores != null) {
      prop1 = stateFromStores.ageVerificationStatus;
    }
    tmp5 = prop1 !== tmp(1979).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
  }
  return tmp5;
};
export const useInitiateAgeVerification = function useInitiateAgeVerification(shouldShowExpressiveModal) {
  let entryPoint;
  let items;
  let onComplete;
  let flag = shouldShowExpressiveModal.shouldShowExpressiveModal;
  ({ onComplete, entryPoint } = shouldShowExpressiveModal);
  if (flag === undefined) {
    flag = false;
  }
  let classificationId = shouldShowExpressiveModal.classificationId;
  if (classificationId === undefined) {
    classificationId = null;
  }
  const tmp2 = useAgeVerificationRunner({ onComplete, entryPoint, shouldShowExpressiveModal: flag });
  let startVerification = tmp2.startVerification;
  obj = {
    loading: tmp2.loading,
    initiateAgeVerification: react.useCallback((method, vendor) => {
      startVerification = vendor;
      return startVerification(() => {
        obj = { method, classificationId, vendor };
        const requestAgeVerification = AgeVerificationURLActionCreators.requestAgeVerification;
        AgeVerificationURLActionCreators;
        return requestAgeVerification(obj);
      });
    }, items)
  };
  items = [startVerification, classificationId];
  return obj;
};
export const useInitiateAgeVerificationV2 = function useInitiateAgeVerificationV2(onComplete) {
  let items;
  obj = { onComplete: onComplete.onComplete, entryPoint: onComplete.entryPoint, shouldShowExpressiveModal: true, onMethodUnavailable: onComplete.onMethodUnavailable };
  const tmp = useAgeVerificationRunner(obj);
  const startVerification = tmp.startVerification;
  obj2 = {
    loading: tmp.loading,
    initiateAgeVerificationV2: react.useCallback((arg0) => {
      let closure_0 = arg0;
      return startVerification(() => {
        obj = startVerification(closure_2_2[22]);
        return obj.requestAgeVerificationV2(closure_0.method, closure_0.vendor);
      }, arg0);
    }, items)
  };
  items = [startVerification];
  return obj2;
};
export const useWatchAgeVerificationStatusChange = function useWatchAgeVerificationStatusChange(callback1) {
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
  obj2 = require("get initialized");
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
};
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
    stringResult = string(tmp2(1115).t.lSWVTM);
  } else if (flag) {
    stringResult = string(_modDef3039["/kgWIg"]);
  } else {
    stringResult = string(tmp2(1115).t.xYXsr6);
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
    stringResult = intl5.string(_modDef3039.h7qzoa);
  } else {
    if (flag2) {
      if (null != handleOnHelpUrlHook) {
        if (null != fn) {
          const intl4 = intl7.intl;
          obj2 = { handleOnHelpUrlHook, handleOnTrustedProvidersHook: fn };
          stringResult = intl4.format(_modDef3039["+Ft5ch"], obj2);
        }
      }
    }
    if (flag2) {
      if (null != handleOnHelpUrlHook) {
        const intl3 = intl7.intl;
        const obj3 = { handleOnHelpUrlHook };
        stringResult = intl3.format(_modDef3039["22HSSI"], obj3);
      }
    }
    if (null != handleOnHelpUrlHook) {
      const intl2 = intl7.intl;
      obj = { handleOnHelpUrlHook };
      stringResult = intl2.format(_modDef3039.RpMIT0, obj);
    } else {
      const intl = intl7.intl;
      stringResult = intl.string(intl7.t.HxS3oQ);
    }
  }
  return stringResult;
};
export { useShouldCallReactiveCheck };
export const useMaybePerformReactiveCheckForSource = function useMaybePerformReactiveCheckForSource(arg0) {
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
};
export { shouldCallReactiveCheck };
export const maybePerformReactiveCheck = function maybePerformReactiveCheck() {
  return obj(...arguments);
};
