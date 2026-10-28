// Module ID: 19196
// Function ID: 19197
// Name: RedesignNewUserManager
// Dependencies: [5, 13814, 502, 4850, 6896, 19197, 5187, 5186, 19200, 7250, 9083, 19201, 6707, 19203, 1999, 1381, 2]

// Module 19196 (RedesignNewUserManager)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5186 */;
import RootNavigationRef from "RootNavigationRef" /* 5187 */;
import isFullScreenVerificationModalRequiredDefault from "isFullScreenVerificationModalRequired" /* 19197 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ContactSyncModalStore from "ContactSyncModalStore" /* 13814 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 4850 */;
import NewUserStore from "NewUserStore" /* 6896 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7250 */;
import size from "module_2" /* 2 */;

let c4, c5;

let closure_4;
let hasOwnProperty;
const f139429 = (item) => {
  const obj = closure_1_0(closure_1_2[7]);
  const coerceModalRouteResult = obj.coerceModalRoute(item);
  let key;
  const tmp = closure_1_0;
  const tmp2 = closure_1_2;
  if (coerceModalRouteResult != null) {
    const params = coerceModalRouteResult.params;
    if (params != null) {
      const modal = params.modal;
      if (modal != null) {
        key = modal.key;
      }
    }
  }
  return key === tmp(tmp2[8]).NEW_USER_MODAL_KEY;
};
function isBlockedByVerification() {
  const tmp = isFullScreenVerificationModalRequiredDefault;
  return tmp(UserRequiredActionStore.getAction(), "nuf-verification-gate");
}
function isNewUserModalInStack() {
  const obj = RootNavigationRef;
  const rootNavigationRef = obj.getRootNavigationRef();
  let someResult = !(null == rootNavigationRef || !rootNavigationRef.isReady());
  null == rootNavigationRef || !rootNavigationRef.isReady();
  if (someResult) {
    const routes = rootNavigationRef.getRootState().routes;
    someResult = routes.some(f139429);
  }
  return someResult;
}
({ initialize: closure_4, ContactSyncModes: hasOwnProperty } = ContactSyncModalStore);
class RedesignNewUserManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult._onboardingStepIndex = -1;
    applyArgumentsResult._lastShownStepIndex = -1;
    applyArgumentsResult._resumeAfterVerificationUserId = null;
    applyArgumentsResult._isStartingOnboarding = false;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return require.handleConnectionOpen();
      },
      ONBOARDING_START() {
        return require.handleOnboardingStart();
      },
      USER_REQUIRED_ACTION_UPDATE(requiredAction) {
        return require.handleRequiredActionUpdate(requiredAction);
      }
    };
    applyArgumentsResult.startOnboarding = function startOnboarding() {
      function finishStartingOnboarding() {
        return closure_0(...arguments);
      }
      const tmp = require;
      let closure_0 = require;
      if (!require._isStartingOnboarding) {
        const tmp3 = dependencyMap;
        let obj = RootNavigationRef;
        const rootNavigationRef = obj.getRootNavigationRef();
        const tmp4 = null;
        let someResult = !(null == rootNavigationRef || !rootNavigationRef.isReady());
        const tmp5 = null == rootNavigationRef || !rootNavigationRef.isReady();
        if (someResult) {
          const routes = rootNavigationRef.getRootState().routes;
          someResult = routes.some(f139429);
        }
        if (!someResult) {
          let str = "nuf-verification-gate";
          const tmp8 = isFullScreenVerificationModalRequiredDefault;
          if (tmp8(UserRequiredActionStore.getAction(), "nuf-verification-gate")) {
            tmp._resumeAfterVerificationUserId = AuthenticationStore.getId();
          } else {
            tmp._resumeAfterVerificationUserId = null;
            tmp._isStartingOnboarding = true;
            closure_0 = _asyncToGenerator(async (arg0, value) => {
              let obj9;
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
                  return { value: "IconComponent", done: null };
                }
              } else {
                let c3;
                let initialRouteName;
                try {
                  let onboardingStepIndex;
                  c5 = 2;
                  if (0 === c4) {
                    if (arg0 === 1) {
                      c5 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c5 = 3;
                      const obj5 = { value, done: true };
                      return obj5;
                    } else {
                      let ONBOARDING;
                      let closure_1 = tmp;
                      closure_0 = undefined;
                      onboardingStepIndex = undefined;
                      initialRouteName = undefined;
                      c3 = 1;
                      const obj13 = closure_0(paths[10]);
                      const tmp69 = closure_2_4;
                      if (obj13.hasDeferredInvite()) {
                        ONBOARDING = tmp70.ONBOARDING_INVITE;
                      } else {
                        ONBOARDING = tmp70.ONBOARDING;
                      }
                      tmp69(ONBOARDING);
                      c4 = 2;
                      c5 = 1;
                      const obj6 = { value: obj9.getNextOnboardingStep(false, -1, -1), done: false };
                      obj9 = closure_0(paths[11]);
                      return obj6;
                    }
                  } else if (1 === c4) {
                    c3 = 0;
                    closure_0._isStartingOnboarding = false;
                    throw initialRouteName;
                  } else {
                    if (2 === c4) {
                      if (arg0 === 1) {
                        c5 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        closure_0._isStartingOnboarding = false;
                        c5 = 3;
                        const obj7 = { value, done: true };
                        return obj7;
                      } else {
                        closure_0 = value;
                        onboardingStepIndex = closure_0.onboardingStepIndex;
                        if (closure_0.continueNavigation) {
                          if (closure_2_9()) {
                            closure_0._resumeAfterVerificationUserId = id.getId();
                            c3 = 0;
                            closure_0._isStartingOnboarding = false;
                            c5 = 3;
                            const obj8 = { value: undefined, done: true };
                            return obj8;
                          } else if (closure_2_10()) {
                            c3 = 0;
                            closure_0._isStartingOnboarding = false;
                            c5 = 3;
                            return { value: "IconComponent", done: null };
                          } else {
                            const obj2 = closure_0(paths[11]);
                            initialRouteName = obj2.getKeyForOnboardingStep(onboardingStepIndex);
                            if (null != initialRouteName) {
                              const tmp23 = closure_2_1(paths[12]);
                              const pushLazy = tmp23.pushLazy;
                              const tmp28 = closure_0(paths[14])(paths[13], paths.paths);
                              const obj10 = { initialRouteName, initialOnboardingStepIndex: onboardingStepIndex };
                              const NEW_USER_MODAL_KEY = closure_0(paths[8]).NEW_USER_MODAL_KEY;
                              let str = "card";
                              const obj4 = closure_0(paths[15]);
                              if (obj4.isAndroid()) {
                                str = "transparentModal";
                              }
                              const obj11 = { fullScreenGestureEnabled: false, presentation: str, animation: "slide_from_bottom" };
                              c4 = 3;
                              c5 = 1;
                              const obj12 = { value: pushLazy(tmp28, obj10, NEW_USER_MODAL_KEY, obj11), done: false };
                              return obj12;
                            }
                          }
                        } else {
                          c3 = 0;
                          closure_0._isStartingOnboarding = false;
                          c5 = 3;
                          return { value: "IconComponent", done: null };
                        }
                      }
                    } else if (arg0 === 1) {
                      c5 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 0;
                      closure_0._isStartingOnboarding = false;
                      c5 = 3;
                      const obj = { value, done: true };
                      return obj;
                    }
                    c3 = 0;
                    closure_0._isStartingOnboarding = false;
                    c5 = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp55) {
                  initialRouteName = tmp55;
                  if (0 === c3) {
                    c5 = 3;
                    throw tmp55;
                  } else {
                    c4 = 1;
                  }
                }
              }
            });
            finishStartingOnboarding();
          }
        }
      }
    };
    applyArgumentsResult.handleOnboardingStart = function handleOnboardingStart() {
      require.startOnboarding();
    };
    applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
      if (null != NewUserStore.getType()) {
        const obj = NavigationRouteUtils;
        if (!obj.isModalOpen()) {
          require.startOnboarding();
        }
      }
    };
    applyArgumentsResult.handleRequiredActionUpdate = function handleRequiredActionUpdate(requiredAction) {
      if (null == requiredAction.requiredAction) {
        let tmp2 = null != require._resumeAfterVerificationUserId;
        if (tmp2) {
          let tmp = AuthenticationStore;
          tmp2 = obj3._resumeAfterVerificationUserId === AuthenticationStore.getId();
        }
        if (!tmp2) {
          tmp2 = null != NewUserStore.getType();
        }
        if (tmp2) {
          let obj = RootNavigationRef;
          const rootNavigationRef = obj.getRootNavigationRef();
          let someResult = !(null == rootNavigationRef || !rootNavigationRef.isReady());
          null == rootNavigationRef || !rootNavigationRef.isReady();
          if (someResult) {
            const routes = rootNavigationRef.getRootState().routes;
            someResult = routes.some(f139429);
          }
          if (!someResult) {
            require.startOnboarding();
          }
        }
      }
    };
    return applyArgumentsResult;
  }
}
const redesignNewUserManager = new RedesignNewUserManager();
const result = size.fileFinishedImporting("modules/nuf/native/RedesignNewUserManager.tsx");

export default redesignNewUserManager;
