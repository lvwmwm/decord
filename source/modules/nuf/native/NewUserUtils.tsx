// Module ID: 16237
// Function ID: 125695
// Name: _shouldSkipContactSyncStep
// Dependencies: [5, 27, 14846, 4847, 1850, 653, 11744, 4379, 11746, 477, 8324, 686, 1457, 11749, 4016, 16238, 4372, 1198, 11824, 2]
// Exports: continueToNextStep, getKeyForOnboardingStep

// Module 16237 (_shouldSkipContactSyncStep)
import importDefaultResult from "ME";
import { NativeModules } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import { ContactPermissions } from "ContactSyncLandingPage";
import { NotificationAuthorizationStatus as closure_11 } from "NativePermissionStatus";

let closure_8;
let closure_9;
const require = arg1;
function _shouldSkipContactSyncStep() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = importDefaultResult(tmp);
  return obj(...arguments);
}
function lastStepComplete(STEP_GUILD_TEMPLATE) {
  require(11749) /* trackNUFStep */.trackNUFStep(STEP_GUILD_TEMPLATE, "NUF Complete");
  const obj = require(11749) /* trackNUFStep */;
  if (obj2.isModalOpen(require(16238) /* NEW_USER_MODAL_KEY */.NEW_USER_MODAL_KEY)) {
    importDefault(4372).popWithKey(require(16238) /* NEW_USER_MODAL_KEY */.NEW_USER_MODAL_KEY);
    const obj3 = importDefault(4372);
  }
  obj2 = require(4016) /* _createForOfIteratorHelperLoose */;
  require(1198) /* shouldNavigate */.transitionTo(constants.ME, { navigationReplace: true });
  const obj4 = require(1198) /* shouldNavigate */;
  const result = require(11824) /* setNewUser */.setNewUserFlowCompleted();
}
function getNextOnboardingStep(arg0, first1, first) {
  return _getNextOnboardingStep(...arguments);
}
function _getNextOnboardingStep() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = importDefaultResult(tmp);
  return obj(...arguments);
}
({ PlatformTypes: closure_8, Routes: closure_9 } = ME);
let obj = {
  key: "choose-avatar",
  shouldShowStep() {
    currentUser = currentUser.getCurrentUser();
    let avatar;
    if (null != currentUser) {
      avatar = currentUser.avatar;
    }
    return null == avatar;
  }
};
obj = { key: "enable-notification" };
// CreateGeneratorClosureLongIndex (0x67)
let closure_12 = importDefaultResult("enable-notification");
obj.shouldShowStep = function() {
  return callback(...arguments);
};
obj = { key: "contact-sync" };
// CreateGeneratorClosureLongIndex (0x67)
let closure_13 = importDefaultResult("contact-sync");
obj.shouldShowStep = function() {
  return callback2(...arguments);
};
let items = [
  obj,
  obj,
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
      return shouldShowGuardianConnect.getShouldShowGuardianConnect();
    }
  },
  {
    key: "accept-invite",
    shouldShowStep: require("showInstantInviteActionSheet").hasDeferredInvite,
    transitionStep() {
      importDefault(686).dispatch({ type: "DEFERRED_INVITE_SHOW" });
    }
  }
];
const obj1 = {
  key: "discoverability",
  shouldShowStep() {
    return true;
  }
};
let obj2 = {
  key: "connect-guardian",
  shouldShowStep() {
    return shouldShowGuardianConnect.getShouldShowGuardianConnect();
  }
};
let obj3 = {
  key: "accept-invite",
  shouldShowStep: require("showInstantInviteActionSheet").hasDeferredInvite,
  transitionStep() {
    importDefault(686).dispatch({ type: "DEFERRED_INVITE_SHOW" });
  }
};
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/nuf/native/NewUserUtils.tsx");

export const getKeyForOnboardingStep = function getKeyForOnboardingStep(onboardingStepIndex) {
  let key;
  if (null != items[onboardingStepIndex]) {
    key = tmp.key;
  }
  return key;
};
export const continueToNextStep = function continueToNextStep(onboardingStepIndex, current) {
  let closure_0 = current;
  let key;
  if (null != items[onboardingStepIndex]) {
    key = tmp.key;
  }
  if (null !== key) {
    current.navigate(key, {});
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      const state = current.getState();
      const routes = state.routes;
      if (2 === routes.length) {
        const items = [routes[1]];
        const CommonActions = current(outer1_2[12]).CommonActions;
        const obj = {};
        const merged = Object.assign(state);
        obj["routes"] = items;
        obj["index"] = 0;
        current.dispatch(CommonActions.reset(obj));
      }
    }, 500);
  }
};
export { getNextOnboardingStep };
