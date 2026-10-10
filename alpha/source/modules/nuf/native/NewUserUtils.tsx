// Module ID: 18142
// Function ID: 18143
// Name: NewUserUtils
// Dependencies: [5, 16360, 5761, 1390, 1085, 12400, 7482, 12402, 1382, 7505, 8682, 584, 1504, 12405, 5934, 18141, 1112, 12512, 2]
// Exports: continueToNextStep, getKeyForOnboardingStep

// Module 18142 (NewUserUtils)
import DispatcherDefault from "Dispatcher" /* 584 */;
import router_utils from "router_utils" /* 1112 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import Link from "Link" /* 1504 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import NativePermissionConstants from "NativePermissionConstants" /* 7482 */;
import react_nativeDefault from "react-native" /* 7505 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 8682 */;
import ContactSyncConstants from "ContactSyncConstants" /* 12400 */;
import NewUserAnalyticsUtils from "NewUserAnalyticsUtils" /* 12405 */;
import nuf_NUFActionCreators from "nuf/NUFActionCreators" /* 12512 */;
import NewUserModalTypes from "NewUserModalTypes" /* 18141 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ParentalConsentStore from "ParentalConsentStore" /* 16360 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5761 */;
import UserStore from "UserStore" /* 1390 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1, c2, closure_5, registration;

let metroImportAll;
let metroImportDefault;
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
        return { value: "IconComponent", done: "+51" };
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
          isIOSResult = value === closure_128_9.UNAUTHORIZED;
          if (isIOSResult) {
            obj = closure_128_0(closure_128_2[8]);
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
  obj3.transitionTo(metroImportAll.ME, { navigationReplace: true });
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
          return { value: "IconComponent", done: "+51" };
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
              return { value: "Set", done: true };
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
              if (closure_133_14[lastShownStepIndex] != null) {
                key = tmp70.key;
              }
              registration = key;
              if (key == null) {
                registration = "registration";
              }
              closure_3 = registration;
              sum = sum + 1;
              if (sum >= closure_133_14.length) {
                closure_133_15(closure_3);
                c7 = 3;
                return { value: { lastShownStepIndex, onboardingStepIndex: sum, continueNavigation: false }, done: true };
              } else {
                tmp = closure_133_14[sum];
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
                const obj3 = closure_133_0(closure_133_2[13]);
                obj3.trackNUFStep(closure_3, key2, obj10);
                if (null != transitionStep) {
                  closure_133_15(key2);
                  transitionStep();
                  obj12 = { lastShownStepIndex, onboardingStepIndex: sum, continueNavigation: false };
                  const obj11 = { lastShownStepIndex, onboardingStepIndex: sum, continueNavigation: false };
                } else {
                  obj12 = { lastShownStepIndex, onboardingStepIndex: sum, continueNavigation: null == transitionStep };
                  transitionStep = undefined;
                  if (closure_133_14[sum] != null) {
                    transitionStep = tmp25.transitionStep;
                  }
                }
                tmp5 = obj12;
              } else {
                c6 = 3;
                c7 = 1;
                const obj13 = { value: closure_133_16(flag, lastShownStepIndex, sum), done: false };
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
({ PlatformTypes: metroImportDefault, Routes: metroImportAll } = Constants);
const ContactPermissions = ContactSyncConstants.ContactPermissions;
let closure_10 = NativePermissionConstants.NotificationAuthorizationStatus;
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
  shouldShowStep() {
    return closure_12(...arguments);
  }
};
let closure_12 = _asyncToGenerator(async (arg0, value) => {
  let obj4;
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: "+51" };
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
          const obj5 = { value, done: true };
          return obj5;
        } else {
          let closure_0 = tmp;
          const obj2 = PlatformUtils;
          isIOSResult = obj2.isIOS();
          if (isIOSResult) {
            c1 = 1;
            c2 = 1;
            const obj6 = { value: obj4.getNotificationAuthorizationStatus(), done: false };
            obj4 = react_nativeDefault;
            return obj6;
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
        isIOSResult = value !== closure_128_10.AUTHORIZED;
      }
      c2 = 3;
      const obj7 = { value: isIOSResult, done: true };
      return obj7;
    } catch (tmp11) {
      c2 = 3;
      throw tmp11;
    }
  }
});
let obj3 = {
  key: "contact-sync",
  shouldShowStep() {
    return closure_13(...arguments);
  }
};
let closure_13 = _asyncToGenerator(async (arg0, value) => {
  function shouldSkipContactSyncStep() {
    return closure_1_11(...arguments);
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const localAccount = ConnectedAccountsStore.getLocalAccount(metroImportDefault.CONTACTS);
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
};
export { getNextOnboardingStep };
