// Module ID: 17216
// Function ID: 17217
// Name: NewUserUtils
// Dependencies: [5, 17, 15582, 5593, 1372, 1074, 12175, 5045, 12177, 1364, 9275, 573, 1486, 12180, 4692, 17217, 5039, 1101, 12262, 2]
// Exports: continueToNextStep, getKeyForOnboardingStep

// Module 17216 (NewUserUtils)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import router_utils from "router_utils" /* 1101 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import Link from "Link" /* 1486 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5045 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9275 */;
import ContactSyncConstants from "ContactSyncConstants" /* 12175 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12177 */;
import NewUserAnalyticsUtils from "NewUserAnalyticsUtils" /* 12180 */;
import nuf_NUFActionCreators from "nuf/NUFActionCreators" /* 12262 */;
import NewUserModalTypes from "NewUserModalTypes" /* 17217 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ParentalConsentStore from "ParentalConsentStore" /* 15582 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5593 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let c0, c1, c2, closure_5, registration;

let c9;
let metroImportAll;
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
            const obj3 = ContactSyncUtils;
            const result = obj3.isContactSyncAvailable();
            isIOSResult = !result;
            if (result) {
              c1 = 1;
              c2 = 1;
              const obj6 = { value: obj5.checkContactPermissions(), done: false };
              obj5 = ContactSyncUtils;
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
          isIOSResult = value === closure_128_10.UNAUTHORIZED;
          if (isIOSResult) {
            obj = closure_128_0(closure_128_2[9]);
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
  const obj2 = NavigationRouteUtils;
  if (obj2.isModalOpen(NewUserModalTypes.NEW_USER_MODAL_KEY)) {
    const obj3 = ModalActionCreatorsDefault;
    obj3.popWithKey(NewUserModalTypes.NEW_USER_MODAL_KEY);
  }
  const tmpResult = router_utils;
  tmpResult.transitionTo(constants2.ME, { navigationReplace: true });
  const tmpResult2 = nuf_NUFActionCreators;
  const result = tmpResult2.setNewUserFlowCompleted();
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
              return { value: "flex", done: true };
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
              if (closure_133_15[lastShownStepIndex] != null) {
                key = tmp72.key;
              }
              registration = key;
              if (key == null) {
                registration = "registration";
              }
              closure_3 = registration;
              sum = sum + 1;
              if (sum >= closure_133_15.length) {
                closure_133_16(closure_3);
                c7 = 3;
                return { value: { lastShownStepIndex, onboardingStepIndex: sum, continueNavigation: false }, done: true };
              } else {
                tmp = closure_133_15[sum];
                key2 = tmp.key;
                shouldShowStep = tmp.shouldShowStep;
                transitionStep = tmp.transitionStep;
                c6 = 2;
                c7 = 1;
                const obj9 = { value: shouldShowStep(), done: false };
                return obj9;
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
                let obj13;
                lastShownStepIndex = sum;
                const obj11 = { skip: flag };
                const obj3 = closure_133_0(closure_133_2[13]);
                obj3.trackNUFStep(closure_3, key2, obj11);
                if (null != transitionStep) {
                  closure_133_16(key2);
                  const obj6 = closure_133_1(closure_133_2[11]);
                  obj6.wait(transitionStep);
                  obj13 = { lastShownStepIndex, onboardingStepIndex: sum, continueNavigation: false };
                  const obj12 = { lastShownStepIndex, onboardingStepIndex: sum, continueNavigation: false };
                } else {
                  obj13 = { lastShownStepIndex, onboardingStepIndex: sum, continueNavigation: null == transitionStep };
                  transitionStep = undefined;
                  if (closure_133_15[sum] != null) {
                    transitionStep = tmp25.transitionStep;
                  }
                }
                tmp5 = obj13;
              } else {
                c6 = 3;
                c7 = 1;
                const obj14 = { value: closure_133_17(flag, lastShownStepIndex, sum), done: false };
                return obj14;
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
        } catch (tmp62) {
          c7 = 3;
          throw tmp62;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const NativeModules = react_native.NativeModules;
({ PlatformTypes: metroImportAll, Routes: c9 } = Constants);
const ContactPermissions = ContactSyncConstants.ContactPermissions;
let closure_11 = NativePermissionConstants.NotificationAuthorizationStatus;
obj = {
  key: "choose-avatar",
  shouldShowStep() {
    const currentUser = UserStore.getCurrentUser();
    let avatar;
    if (currentUser != null) {
      avatar = currentUser.avatar;
    }
    return null == avatar;
  }
};
let obj2 = {
  key: "enable-notification",
  shouldShowStep: function() {
    return closure_13(...arguments);
  }
};
let closure_13 = _asyncToGenerator(async (arg0, value) => {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
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
          const obj2 = PlatformUtils;
          isIOSResult = obj2.isIOS();
          if (isIOSResult) {
            const NativePermissionManager = NativeModules.NativePermissionManager;
            c1 = 1;
            c2 = 1;
            const obj5 = { value: NativePermissionManager.getNotificationAuthorizationStatus(), done: false };
            return obj5;
          }
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        isIOSResult = value !== closure_128_11.AUTHORIZED;
      }
      c2 = 3;
      const obj6 = { value: isIOSResult, done: true };
      return obj6;
    } catch (tmp10) {
      c2 = 3;
      throw tmp10;
    }
  }
});
let obj3 = {
  key: "contact-sync",
  shouldShowStep: function() {
    return closure_14(...arguments);
  }
};
let closure_14 = _asyncToGenerator(async (arg0, value) => {
  function shouldSkipContactSyncStep() {
    return closure_1_12(...arguments);
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
        } else {
          const localAccount = ConnectedAccountsStore.getLocalAccount(metroImportAll.CONTACTS);
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
    key: "discoverability",
    shouldShowStep() {
      return true;
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
items[5] = obj4;
let result = size.fileFinishedImporting("modules/nuf/native/NewUserUtils.tsx");

export const getKeyForOnboardingStep = function getKeyForOnboardingStep(onboardingStepIndex) {
  let key;
  if (items[onboardingStepIndex] != null) {
    key = tmp.key;
  }
  return key;
};
export const continueToNextStep = function continueToNextStep(onboardingStepIndex, current) {
  let tmp = items[onboardingStepIndex];
  let key;
  if (tmp != null) {
    key = tmp.key;
  }
  if (null !== key) {
    current.navigate(key, {});
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
};
export { getNextOnboardingStep };
