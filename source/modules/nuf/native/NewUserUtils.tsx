// Module ID: 16003
// Function ID: 122785
// Name: _shouldSkipContactSyncStep
// Dependencies: []
// Exports: continueToNextStep, getKeyForOnboardingStep

// Module 16003 (_shouldSkipContactSyncStep)
function _shouldSkipContactSyncStep() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = importDefaultResult(tmp);
  const _shouldSkipContactSyncStep = obj;
  return obj(...arguments);
}
function lastStepComplete(STEP_GUILD_TEMPLATE) {
  arg1(dependencyMap[13]).trackNUFStep(STEP_GUILD_TEMPLATE, "NUF Complete");
  const obj = arg1(dependencyMap[13]);
  if (obj2.isModalOpen(arg1(dependencyMap[15]).NEW_USER_MODAL_KEY)) {
    importDefault(dependencyMap[16]).popWithKey(arg1(dependencyMap[15]).NEW_USER_MODAL_KEY);
    const obj3 = importDefault(dependencyMap[16]);
  }
  const obj2 = arg1(dependencyMap[14]);
  arg1(dependencyMap[17]).transitionTo(constants.ME, { navigationReplace: true });
  const obj4 = arg1(dependencyMap[17]);
  const result = arg1(dependencyMap[18]).setNewUserFlowCompleted();
}
function getNextOnboardingStep(arg0, first1, first) {
  return _getNextOnboardingStep(...arguments);
}
function _getNextOnboardingStep() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = importDefaultResult(tmp);
  const _getNextOnboardingStep = obj;
  return obj(...arguments);
}
const importDefaultResult = importDefault(dependencyMap[0]);
const NativeModules = arg1(dependencyMap[1]).NativeModules;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ PlatformTypes: closure_8, Routes: closure_9 } = arg1(dependencyMap[5]));
const ContactPermissions = arg1(dependencyMap[6]).ContactPermissions;
let closure_11 = arg1(dependencyMap[7]).NotificationAuthorizationStatus;
let obj = {
  key: "choose-avatar",
  shouldShowStep() {
    const currentUser = currentUser.getCurrentUser();
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
const items = [
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

];
const obj1 = {
  key: "discoverability",
  shouldShowStep() {
    return true;
  }
};
const obj2 = {
  key: "connect-guardian",
  shouldShowStep() {
    return shouldShowGuardianConnect.getShouldShowGuardianConnect();
  }
};
const tmp3 = arg1(dependencyMap[5]);
items[5] = {
  key: "accept-invite",
  shouldShowStep: arg1(dependencyMap[10]).hasDeferredInvite,
  transitionStep() {
    importDefault(dependencyMap[11]).dispatch({ type: "DEFERRED_INVITE_SHOW" });
  }
};
const obj3 = {
  key: "accept-invite",
  shouldShowStep: arg1(dependencyMap[10]).hasDeferredInvite,
  transitionStep() {
    importDefault(dependencyMap[11]).dispatch({ type: "DEFERRED_INVITE_SHOW" });
  }
};
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/nuf/native/NewUserUtils.tsx");

export const getKeyForOnboardingStep = function getKeyForOnboardingStep(onboardingStepIndex) {
  let key;
  if (null != items[onboardingStepIndex]) {
    key = tmp.key;
  }
  return key;
};
export const continueToNextStep = function continueToNextStep(onboardingStepIndex, current) {
  let key;
  if (null != items[onboardingStepIndex]) {
    key = tmp.key;
  }
  if (null !== key) {
    current.navigate(key, {});
    const _setTimeout = setTimeout;
    const timerId = setTimeout((arg0, self) => {
      const state = self.getState();
      const routes = state.routes;
      if (2 === routes.length) {
        const items = [routes[1]];
        const CommonActions = self(closure_2[12]).CommonActions;
        const obj = {};
        const merged = Object.assign(state);
        obj["routes"] = items;
        obj["index"] = 0;
        self.dispatch(CommonActions.reset(obj));
      }
    }, 500);
  }
};
export { getNextOnboardingStep };
