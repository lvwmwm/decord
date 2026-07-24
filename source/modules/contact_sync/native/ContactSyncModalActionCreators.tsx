// Module ID: 11732
// Function ID: 91022
// Name: handleNameInputScreenOrSuggestions
// Dependencies: [5, 4812, 1849, 11733, 11735, 11734, 653, 4344, 11736, 11738, 675, 11740, 1212, 4471, 3831, 10361, 9275, 4029, 4337, 11741, 1934, 8526, 668, 11760, 2]
// Exports: bulkAddFriendSuggestions, goBackToLanding, handlePhoneVerificationComplete, openContactSyncModalDeeplink, openContactSyncModalOnboarding, startContactSync, submitPhone, upsellDismissed, verifyPhone, verifyPhoneWithPassword

// Module 11732 (handleNameInputScreenOrSuggestions)
import closure_3 from "ContactSyncLandingPage";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import initialValues from "initialValues";
import setStoredContacts from "setStoredContacts";
import ContactSyncLandingPage from "ContactSyncLandingPage";
import ME from "ME";
import NativePermissionStatus from "NativePermissionStatus";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function handleNameInputScreenOrSuggestions() {
  return _handleNameInputScreenOrSuggestions(...arguments);
}
function _handleNameInputScreenOrSuggestions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _handlePhoneVerificationComplete() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _startContactSync() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _bulkAddFriendSuggestions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _verifyPhone() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function openContactSyncModal(initialRoutes, FRIENDS_ADD_FRIENDS_MODAL) {
  refreshContactSyncPermissionStatus();
  if (null == initialRoutes.initialRoutes) {
    callback4(constants.NORMAL);
  }
  if (FRIENDS_ADD_FRIENDS_MODAL) {
    let obj = require(11738) /* Steps */;
    obj = { location: FRIENDS_ADD_FRIENDS_MODAL };
    obj.trackFlowStart(obj);
  }
  obj = { initialRoutes: initialRoutes.initialRoutes, openSettingsSheet: initialRoutes.openSettings, customLandingPage: initialRoutes.customLandingPage };
  const obj3 = importDefault(4337);
  importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(11741, dependencyMap.paths), obj, closure_20).then(arg2);
}
function refreshContactSyncPermissionStatus() {
  const result = require(11736) /* isContactSyncAvailable */.checkContactPermissions();
  result.then((arg0) => {
    outer1_7(arg0);
  });
}
function closeContactSyncModal(skip) {
  let back;
  let friendsAdded;
  let friendsFound;
  let flag = skip.skip;
  if (flag === undefined) {
    flag = true;
  }
  ({ friendsFound, friendsAdded, back } = skip);
  if (back === undefined) {
    back = false;
  }
  const onComplete = skip.onComplete;
  if (null != onComplete) {
    (function redesignCloseContactSyncModal(onComplete, flag, friendsFound, friendsAdded) {
      if (flag === undefined) {
        flag = true;
      }
      let obj = outer1_0(outer1_2[9]);
      obj = { num_contacts_found: friendsFound, num_contacts_added: friendsAdded };
      obj.trackFlowEnd(flag, obj);
      if (tmp) {
        onComplete(flag);
      } else {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          outer2_1(outer2_2[18]).popWithKey(outer2_20);
        }, 0);
      }
    })(onComplete, flag, friendsFound, friendsAdded);
  } else {
    (function oldCloseContactSyncModal(flag, friendsFound, friendsAdded, back) {
      let flag2 = back;
      if (flag === undefined) {
        flag = true;
      }
      if (flag2 === undefined) {
        flag2 = false;
      }
      let c2;
      const tmp = outer1_15();
      c2 = tmp;
      if (!flag2) {
        let obj = outer1_0(outer1_2[9]);
        obj = { num_contacts_found: friendsFound, num_contacts_added: friendsAdded };
        obj.trackFlowEnd(flag, obj);
      }
      if (tmp) {
        let updateAnimation = outer1_1(outer1_2[18]).updateAnimation;
        let ModalAnimation = outer1_0(outer1_2[22]).ModalAnimation;
        if (flag2) {
          updateAnimation(tmp10, ModalAnimation.SLIDE_IN_OUT_REVERSE);
        } else {
          updateAnimation(tmp10, ModalAnimation.SLIDE_IN_OUT);
        }
        const tmp9 = outer1_1(outer1_2[18]);
      }
      const timerId = setTimeout(() => {
        let obj = outer2_1(outer2_2[18]);
        obj.popWithKey(outer2_20);
        if (c2) {
          const updateAnimation = outer2_1(outer2_2[18]).updateAnimation;
          const ModalAnimation = outer2_0(outer2_2[22]).ModalAnimation;
          if (flag2) {
            updateAnimation(tmp6, ModalAnimation.SLIDE_IN_OUT_REVERSE);
            let tmp7Result = tmp7(tmp4[23]);
            const result = tmp7Result.previousOnboardingStep();
          } else {
            updateAnimation(tmp6, ModalAnimation.SLIDE_IN_OUT);
            tmp7Result = tmp7(tmp4[23]);
            obj = { skip: flag };
            tmp7Result.nextOnboardingStep(obj);
          }
          const tmp5 = outer2_1(outer2_2[18]);
        }
      }, 0);
    })(flag, friendsFound, friendsAdded, back);
  }
}
({ setError: closure_6, setPermissionState: closure_7, setSuggestions: closure_8, setPhone: closure_9, setPhoneToken: closure_10, setName: closure_11, useContactSyncModalStore: closure_12, ContactSyncModes: closure_13, initialize: closure_14, getIsOnboarding: closure_15 } = initialValues);
({ deleteStoredContacts: closure_16, setStoredContacts: closure_17 } = setStoredContacts);
({ ContactPermissions: closure_18, ContactSyncScenes: closure_19, CONTACT_SYNC_MODAL_KEY: closure_20 } = ContactSyncLandingPage);
({ AnalyticEvents: closure_21, PlatformTypes: closure_22 } = ME);
({ NativePermissionStates: closure_23, NativePermissionTypes: closure_24 } = NativePermissionStatus);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/contact_sync/native/ContactSyncModalActionCreators.tsx");

export const handlePhoneVerificationComplete = function handlePhoneVerificationComplete(stateFromStores, navigation) {
  return _handlePhoneVerificationComplete(...arguments);
};
export const startContactSync = function startContactSync(arg0) {
  return _startContactSync(...arguments);
};
export const bulkAddFriendSuggestions = function bulkAddFriendSuggestions(arg0, onComplete) {
  return _bulkAddFriendSuggestions(...arguments);
};
export const goBackToLanding = function goBackToLanding(closure_1) {
  require(11738) /* Steps */.trackFlowStep(require(11738) /* Steps */.Steps.LANDING, false, true);
  closure_1.pop(closure_1.getState().routes.length - 1);
};
export const submitPhone = function submitPhone(arg0, closure_0) {
  callback2(arg0);
  require(11738) /* Steps */.trackFlowStep(require(11738) /* Steps */.Steps.VERIFY_PHONE_NUMBER, false, false);
  closure_0.navigate(constants2.VERIFY_PHONE);
};
export const verifyPhone = function verifyPhone() {
  return _verifyPhone(...arguments);
};
export const verifyPhoneWithPassword = function verifyPhoneWithPassword(arg0, navigation) {
  require(11738) /* Steps */.trackFlowStep(require(11738) /* Steps */.Steps.PASSWORD_CONFIRM, false, false);
  callback3(arg0);
  navigation.navigate(constants2.VERIFY_PASSWORD);
};
export const upsellDismissed = function upsellDismissed() {
  require(11738) /* Steps */.trackFlowEnd(true);
};
export { openContactSyncModal };
export const openContactSyncModalOnboarding = function openContactSyncModalOnboarding() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    let obj = {};
    obj = { page: require(11738) /* Steps */.CONTACT_SYNC_ONBOARDING_LOCATION };
    obj.location = obj;
    require(11738) /* Steps */.trackFlowStart(obj);
    const obj2 = require(11738) /* Steps */;
    // CreateGeneratorClosureLongIndex (0x67)
    importDefault(4337).pushLazy(callback(4337), {}, closure_20);
  } else {
    obj = require(8526) /* showInstantInviteActionSheet */;
    closure_14(obj.hasDeferredInvite() ? closure_13.ONBOARDING_INVITE : closure_13.ONBOARDING);
    const tmp = closure_14;
  }
};
export const openContactSyncModalDeeplink = function openContactSyncModalDeeplink() {
  openContactSyncModal({}, { page: "Deep Link" });
};
export { refreshContactSyncPermissionStatus };
export { closeContactSyncModal };
