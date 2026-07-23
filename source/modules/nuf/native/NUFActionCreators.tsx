// Module ID: 11733
// Function ID: 91077
// Name: _startContactSyncForDiscoverability
// Dependencies: [5, 11706, 4812, 1849, 11734, 653, 9227, 686, 4337, 11735, 1934, 11778, 11781, 11782, 668, 11709, 11713, 2]
// Exports: closeDiscoverabilityModal, nextOnboardingStep, openDiscoverabilityModal, previousOnboardingStep, startContactSyncForDiscoverability, startOnboarding, toggleDiscoverabilityForUser, transitionToHubEmailConnectionModal, transitionToNUFGuildTemplatesModal

// Module 11733 (_startContactSyncForDiscoverability)
import ME from "ME";
import initialValues from "initialValues";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { NUF_DISCOVERABILITY_MODAL_KEY as closure_10 } from "NewUserTypes";
import { PlatformTypes } from "ME";
import { IN_APP_GUILD_TEMPLATES_MODAL_KEY as closure_12 } from "NUXGuildTemplatesAnalytics";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function _startContactSyncForDiscoverability() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ setAllowEmail: closure_4, setAllowSync: closure_5, setName: closure_6, useContactSyncModalStore: closure_7 } = initialValues);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/nuf/native/NUFActionCreators.tsx");

export const startOnboarding = function startOnboarding() {
  importDefault(686).dispatch({ type: "ONBOARDING_START" });
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
  let obj = importDefault(686);
  obj = { type: "ONBOARDING_STEP", skip: flag, skipAttempt: flag2 };
  obj.dispatch(obj);
};
export const previousOnboardingStep = function previousOnboardingStep() {
  importDefault(686).dispatch({ type: "ONBOARDING_STEP", back: true });
};
export const transitionToNUFGuildTemplatesModal = function transitionToNUFGuildTemplatesModal(SLIDE_IN) {
  let closure_0 = SLIDE_IN;
  // CreateGeneratorClosureLongIndex (0x67)
  importDefault(4337).pushLazy(callback(tmp), {}, closure_12);
};
export const transitionToHubEmailConnectionModal = function transitionToHubEmailConnectionModal(SLIDE_IN, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = importDefault(11778);
  obj = {
    onCloseExtra(arg0) {
      if (arg0) {
        const result = outer1_0(outer1_2[12]).setNewUserFlowCompleted();
        const obj3 = outer1_0(outer1_2[12]);
      } else {
        let obj = outer1_1(outer1_2[7]);
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
  importDefault(4337).pushLazy(callback(4337), {}, closure_10);
};
export const closeDiscoverabilityModal = function closeDiscoverabilityModal(skip) {
  let obj = importDefault(4337);
  obj.popWithKey(closure_10);
  obj = { type: "ONBOARDING_STEP", skip };
  importDefault(686).dispatch(obj);
};
export const startContactSyncForDiscoverability = function startContactSyncForDiscoverability(arg0) {
  return _startContactSyncForDiscoverability(...arguments);
};
export const toggleDiscoverabilityForUser = function toggleDiscoverabilityForUser() {
  currentUser = currentUser.getCurrentUser();
  let phone;
  if (null != currentUser) {
    phone = currentUser.phone;
  }
  state = state.getState();
  if (null != phone) {
    callback3(!tmp4);
  } else {
    callback3(false);
    if (!tmp4) {
      callback2(true);
    }
  }
};
