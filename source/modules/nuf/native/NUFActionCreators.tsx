// Module ID: 11722
// Function ID: 91015
// Name: _startContactSyncForDiscoverability
// Dependencies: []
// Exports: closeDiscoverabilityModal, nextOnboardingStep, openDiscoverabilityModal, previousOnboardingStep, startContactSyncForDiscoverability, startOnboarding, toggleDiscoverabilityForUser, transitionToHubEmailConnectionModal, transitionToNUFGuildTemplatesModal

// Module 11722 (_startContactSyncForDiscoverability)
function _startContactSyncForDiscoverability() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _startContactSyncForDiscoverability = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
({ setAllowEmail: closure_4, setAllowSync: closure_5, setName: closure_6, useContactSyncModalStore: closure_7 } = arg1(dependencyMap[1]));
let closure_8 = importDefault(dependencyMap[2]);
let closure_9 = importDefault(dependencyMap[3]);
let closure_10 = arg1(dependencyMap[4]).NUF_DISCOVERABILITY_MODAL_KEY;
const PlatformTypes = arg1(dependencyMap[5]).PlatformTypes;
let closure_12 = arg1(dependencyMap[6]).IN_APP_GUILD_TEMPLATES_MODAL_KEY;
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/nuf/native/NUFActionCreators.tsx");

export const startOnboarding = function startOnboarding() {
  importDefault(dependencyMap[7]).dispatch({ type: "ONBOARDING_START" });
};
export const nextOnboardingStep = function nextOnboardingStep(skip) {
  let flag = skip.skip;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = skip.skipAttempt;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = importDefault(dependencyMap[7]);
  obj = { type: "ONBOARDING_STEP", skip: flag, skipAttempt: flag2 };
  obj.dispatch(obj);
};
export const previousOnboardingStep = function previousOnboardingStep() {
  importDefault(dependencyMap[7]).dispatch({ "Bool(false)": 1091633569, "Bool(false)": 98379 });
};
export const transitionToNUFGuildTemplatesModal = function transitionToNUFGuildTemplatesModal(SLIDE_IN) {
  const arg1 = SLIDE_IN;
  // CreateGeneratorClosureLongIndex (0x67)
  importDefault(dependencyMap[8]).pushLazy(callback(tmp), {}, closure_12);
};
export const transitionToHubEmailConnectionModal = function transitionToHubEmailConnectionModal(SLIDE_IN, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = importDefault(dependencyMap[11]);
  obj = {
    onCloseExtra(arg0) {
      if (arg0) {
        const result = callback(closure_2[12]).setNewUserFlowCompleted();
        const obj3 = callback(closure_2[12]);
      } else {
        let obj = callback2(closure_2[7]);
        obj = { type: "ONBOARDING_STEP" };
        obj.dispatch(obj);
      }
    },
    displayStudentPrompt: flag
  };
  obj.open(obj, SLIDE_IN);
};
export const openDiscoverabilityModal = function openDiscoverabilityModal() {
  // CreateGeneratorClosureLongIndex (0x67)
  importDefault(dependencyMap[8]).pushLazy(callback(dependencyMap[8]), {}, closure_10);
};
export const closeDiscoverabilityModal = function closeDiscoverabilityModal(skip) {
  let obj = importDefault(dependencyMap[8]);
  obj.popWithKey(closure_10);
  obj = { type: "ONBOARDING_STEP", skip };
  importDefault(dependencyMap[7]).dispatch(obj);
};
export const startContactSyncForDiscoverability = function startContactSyncForDiscoverability(arg0) {
  return _startContactSyncForDiscoverability(...arguments);
};
export const toggleDiscoverabilityForUser = function toggleDiscoverabilityForUser() {
  const currentUser = currentUser.getCurrentUser();
  let phone;
  if (null != currentUser) {
    phone = currentUser.phone;
  }
  const state = state.getState();
  if (null != phone) {
    callback3(!tmp4);
  } else {
    callback3(false);
    if (!tmp4) {
      callback2(true);
    }
  }
};
