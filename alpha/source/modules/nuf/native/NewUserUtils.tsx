// Module ID: 19499
// Function ID: 19500
// Name: NewUserUtils
// Dependencies: [5, 17945, 6566, 1384, 13924, 1072, 14196, 7932, 17993, 14198, 1376, 7955, 17994, 13925, 1243, 19500, 9099, 572, 1499, 14201, 6738, 19498, 1100, 14307, 2]
// Exports: continueToNextStep, getKeyForOnboardingStep

// Module 19499 (NewUserUtils)
import DispatcherDefault from "Dispatcher" /* 572 */;
import router_utils from "router_utils" /* 1100 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import Link from "Link" /* 1499 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import NativePermissionConstants from "NativePermissionConstants" /* 7932 */;
import react_nativeDefault from "react-native" /* 7955 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9099 */;
import ContactSyncConstants from "ContactSyncConstants" /* 14196 */;
import NewUserAnalyticsUtils from "NewUserAnalyticsUtils" /* 14201 */;
import nuf_NUFActionCreators from "nuf/NUFActionCreators" /* 14307 */;
import MobileOnboardingFrictionExperimentDefault from "MobileOnboardingFrictionExperiment" /* 17993 */;
import NewUserModalTypes from "NewUserModalTypes" /* 19498 */;
import InterestPickerExperiment from "InterestPickerExperiment" /* 19500 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ParentalConsentStore from "ParentalConsentStore" /* 17945 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6566 */;
import UserStore from "UserStore" /* 1384 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 13924 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1, c2, c4, c5, closure_5, registration;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
function shouldSkipContactSync() {
  obj = MobileOnboardingFrictionExperimentDefault;
  return obj.getMobileOnboardingFrictionConfig(NewUserUtils).skipContactSync;
}
let obj = function _shouldSkipContactSyncStep() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj5;
    if (c2 === 2) {
      c2 = 3;
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
        let isIOSResult;
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_0 = tmp3;
            const obj3 = require("ContactSyncUtils");
            const result = obj3.isContactSyncAvailable();
            isIOSResult = !result;
            if (result) {
              c1 = 1;
              c2 = 1;
              const obj6 = { value: obj5.checkContactPermissions(), done: false };
              obj5 = require("ContactSyncUtils");
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          isIOSResult = value === closure_128_11.UNAUTHORIZED;
          if (isIOSResult) {
            obj = closure_128_0(closure_128_2[10]);
            isIOSResult = obj.isIOS();
          }
        }
        c2 = 3;
        const obj8 = { value: isIOSResult, done: true };
        return obj8;
      } catch (tmp15) {
        c2 = 3;
        throw tmp15;
      }
    }
  });
  return obj(...arguments);
};
function lastStepComplete(STEP_GUILD_TEMPLATE) {
  obj = NewUserAnalyticsUtils;
  obj.trackNUFStep(STEP_GUILD_TEMPLATE, "NUF Complete");
  const obj2 = ModalActionCreatorsDefault;
  obj2.popWithKey(NewUserModalTypes.NEW_USER_MODAL_KEY);
  const obj3 = router_utils;
  obj3.transitionTo(constants2.ME, { navigationReplace: true });
  const obj4 = nuf_NUFActionCreators;
  const result = obj4.setNewUserFlowCompleted();
}
function getNextOnboardingStep() {
  return obj(...arguments);
}
obj = function _getNextOnboardingStep() {
  obj = _asyncToGenerator(async (arg0, lastShownStepIndex) => {
    let closure_4;
    let closure_0 = arg0;
    let closure_2 = arg2;
    let c6 = 0;
    let c7 = 0;
    const iter = (async (arg0, value) => {
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
          let sum;
          let flag;
          let closure_3;
          let tmp;
          let key2;
          let shouldShowStep;
          let transitionStep;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp4;
              lastShownStepIndex = undefined;
              sum = undefined;
              flag = closure_0;
              if (closure_0 === undefined) {
                flag = false;
              }
              sum = closure_2;
              closure_3 = undefined;
              tmp = undefined;
              key2 = undefined;
              shouldShowStep = undefined;
              transitionStep = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "flexDirection", done: true };
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              let key;
              if (closure_133_18[lastShownStepIndex] != null) {
                key = tmp70.key;
              }
              registration = key;
              if (key == null) {
                registration = "registration";
              }
              closure_3 = registration;
              sum = sum + 1;
              if (sum >= closure_133_18.length) {
                closure_133_19(closure_3);
                c7 = 3;
                return { value: { lastShownStepIndex, onboardingStepIndex: sum, continueNavigation: false }, done: true };
              } else {
                tmp = closure_133_18[sum];
                key2 = tmp.key;
                shouldShowStep = tmp.shouldShowStep;
                transitionStep = tmp.transitionStep;
                c6 = 2;
                c7 = 1;
                const obj8 = { value: shouldShowStep(), done: false };
                return obj8;
              }
            }
          } else {
            let tmp5;
            if (2 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                return { value, done: true };
              } else if (value) {
                let obj12;
                lastShownStepIndex = sum;
                const obj10 = { skip: flag };
                const obj3 = closure_133_0(closure_133_2[19]);
                obj3.trackNUFStep(closure_3, key2, obj10);
                if (null != transitionStep) {
                  closure_133_19(key2);
                  transitionStep();
                  obj12 = { lastShownStepIndex, onboardingStepIndex: sum, continueNavigation: false };
                  const obj11 = { lastShownStepIndex, onboardingStepIndex: sum, continueNavigation: false };
                } else {
                  obj12 = { lastShownStepIndex, onboardingStepIndex: sum, continueNavigation: null == transitionStep };
                  transitionStep = undefined;
                  if (closure_133_18[sum] != null) {
                    transitionStep = tmp25.transitionStep;
                  }
                }
                tmp5 = obj12;
              } else {
                c6 = 3;
                c7 = 1;
                const obj13 = { value: closure_133_20(flag, lastShownStepIndex, sum), done: false };
                return obj13;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else {
              tmp5 = value;
              if (arg0 === 2) {
                c7 = 3;
                return { value, done: true };
              }
            }
            c7 = 3;
            return { value: tmp5, done: true };
          }
        } catch (tmp60) {
          c7 = 3;
          throw tmp60;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
({ EventActionLocation: metroImportDefault, EventActionType: metroImportAll } = NotificationPermissionConstants);
({ PlatformTypes: c9, Routes: c10 } = Constants);
const ContactPermissions = ContactSyncConstants.ContactPermissions;
let closure_12 = NativePermissionConstants.NotificationAuthorizationStatus;
const NewUserUtils = "NewUserUtils";
obj = {
  key: "choose-avatar",
  shouldShowStep() {
    obj = MobileOnboardingFrictionExperimentDefault;
    let tmp = !obj.getMobileOnboardingFrictionConfig(NewUserUtils).skipAvatar;
    if (tmp) {
      const currentUser = UserStore.getCurrentUser();
      let avatar;
      if (currentUser != null) {
        avatar = currentUser.avatar;
      }
      tmp = null == avatar;
    }
    return tmp;
  }
};
let obj2 = {
  key: "enable-notification",
  shouldShowStep() {
    return closure_16(...arguments);
  }
};
let closure_16 = _asyncToGenerator(async (arg0, value) => {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    let c3;
    try {
      let notificationPrompt;
      let closure_1;
      let notificationAuthorizationStatus;
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          notificationPrompt = undefined;
          closure_1 = undefined;
          const obj11 = PlatformUtils;
          if (obj11.isIOS()) {
            const obj6 = MobileOnboardingFrictionExperimentDefault;
            notificationPrompt = obj6.getMobileOnboardingFrictionConfig(NewUserUtils).notificationPrompt;
            c3 = 1;
            const obj7 = react_nativeDefault;
            notificationAuthorizationStatus = obj7.getNotificationAuthorizationStatus();
            c4 = 2;
            c5 = 1;
            const obj8 = { value: notificationAuthorizationStatus, done: false };
            return obj8;
          } else {
            c5 = 3;
            return { value: false, done: true };
          }
        }
      } else if (1 === c4) {
        c3 = 0;
        notificationAuthorizationStatus = notificationPrompt;
        if (notificationPrompt !== closure_129_0(closure_129_2[12]).OnboardingNotificationPrompt.OS_ONLY) {
          throw closure_2;
        } else {
          const obj5 = closure_129_1(closure_129_2[14]);
          obj5.captureException(closure_2);
          c5 = 3;
          return { value: false, done: true };
        }
      } else {
        if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_1 = value;
            notificationAuthorizationStatus = closure_1;
            if (closure_1 === closure_129_12.AUTHORIZED) {
              c3 = 0;
              c5 = 3;
              return { value: false, done: true };
            } else {
              notificationAuthorizationStatus = notificationPrompt;
              if (closure_129_0(closure_129_2[12]).OnboardingNotificationPrompt.EXPLAINER === notificationPrompt) {
                c3 = 0;
                c5 = 3;
                return { value: true, done: true };
              } else if (closure_129_0(closure_129_2[12]).OnboardingNotificationPrompt.OS_ONLY === notificationAuthorizationStatus) {
                notificationAuthorizationStatus = closure_1;
                if (closure_1 !== closure_129_12.DENIED) {
                  const obj2 = closure_129_0(closure_129_2[13]);
                  notificationAuthorizationStatus = obj2.requestPushNotificationPermission(closure_129_8.REQUEST, closure_129_7.AUTO_PROMPT, () => {

                  });
                  c4 = 3;
                  c5 = 1;
                  const obj10 = { value: notificationAuthorizationStatus, done: false };
                  return obj10;
                }
              } else if (closure_129_0(closure_129_2[12]).OnboardingNotificationPrompt.NONE === notificationAuthorizationStatus) {
                c3 = 0;
                c5 = 3;
                return { value: false, done: true };
              } else {
                c3 = 0;
                c5 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
        c3 = 0;
        c5 = 3;
        return { value: false, done: true };
      }
    } catch (tmp36) {
      closure_2 = tmp36;
      if (0 === c3) {
        c5 = 3;
        throw tmp36;
      } else {
        c4 = 1;
      }
    }
  }
});
let obj3 = {
  key: "contact-sync",
  shouldShowStep() {
    return closure_17(...arguments);
  }
};
let closure_17 = _asyncToGenerator(async (arg0, value) => {
  function shouldSkipContactSyncStep() {
    return closure_1_15(...arguments);
  }
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
          const obj3 = { value, done: true };
          return obj3;
        } else if (shouldSkipContactSync()) {
          c0 = 3;
          return { value: false, done: true };
        } else {
          const localAccount = ConnectedAccountsStore.getLocalAccount(constants.CONTACTS);
          let friendSync;
          if (localAccount != null) {
            friendSync = localAccount.friendSync;
          }
          tmp4 = !friendSync;
          if (tmp4) {
            c1 = 1;
            c0 = 1;
            const obj4 = { value: shouldSkipContactSyncStep(), done: false };
            return obj4;
          }
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        tmp4 = !value;
      }
      c0 = 3;
      const obj5 = { value: tmp4, done: true };
      return obj5;
    } catch (tmp10) {
      c0 = 3;
      throw tmp10;
    }
  }
});
let items = [
  obj2,
  obj3,
  {
    key: "interest-picker",
    shouldShowStep() {
      const shouldShowGuardianConnect = ParentalConsentStore.getShouldShowGuardianConnect();
      let result = !shouldShowGuardianConnect;
      if (result) {
        obj = InterestPickerExperiment;
        result = obj.isInterestPickerExperimentEnabled("nuf_interest_picker_step");
      }
      return result;
    }
  },
  {
    key: "discoverability",
    shouldShowStep() {
      obj = MobileOnboardingFrictionExperimentDefault;
      return !obj.getMobileOnboardingFrictionConfig(NewUserUtils).skipContactSync;
    }
  },
  obj,
  {
    key: "connect-guardian",
    shouldShowStep() {
      return ParentalConsentStore.getShouldShowGuardianConnect();
    }
  },

];
let obj4 = {
  key: "accept-invite",
  shouldShowStep: instant_invite_InstantInviteUtils.hasDeferredInvite,
  transitionStep() {
    obj = DispatcherDefault;
    obj.dispatch({ type: "DEFERRED_INVITE_SHOW" });
  }
};
items[6] = obj4;
let result = size.fileFinishedImporting("modules/nuf/native/NewUserUtils.tsx");

export function getKeyForOnboardingStep(onboardingStepIndex) {
  let key;
  if (items[onboardingStepIndex] != null) {
    key = tmp.key;
  }
  return key;
}
export function continueToNextStep(onboardingStepIndex, current) {
  _require = current;
  let tmp = items[onboardingStepIndex];
  let key;
  if (tmp != null) {
    key = tmp.key;
  }
  if (null != key) {
    let state = current.getState();
    let name;
    if (state.routes[state.index] != null) {
      name = tmp4.name;
    }
    if (name !== key) {
      let dispatch = current.dispatch;
      const StackActions = require("Link").StackActions;
      dispatch(StackActions.push(key, {}));
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const state = current.getState();
        const routes = state.routes;
        const tmp = current;
        if (2 === routes.length) {
          items = [routes[1]];
          const dispatch = tmp.dispatch;
          const CommonActions = Link.CommonActions;
          const reset = CommonActions.reset;
          obj = { routes: items, index: 0 };
          const merged = Object.assign(state);
          dispatch(reset(obj));
        }
      }, 500);
    }
  }
}
export { getNextOnboardingStep };
