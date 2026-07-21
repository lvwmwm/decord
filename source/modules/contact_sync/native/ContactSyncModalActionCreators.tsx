// Module ID: 11694
// Function ID: 90722
// Name: handleNameInputScreenOrSuggestions
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: bulkAddFriendSuggestions, goBackToLanding, handlePhoneVerificationComplete, openContactSyncModalDeeplink, openContactSyncModalOnboarding, startContactSync, submitPhone, upsellDismissed, verifyPhone, verifyPhoneWithPassword

// Module 11694 (handleNameInputScreenOrSuggestions)
import closure_3 from "result";
import closure_4 from "result";
import closure_5 from "result";
import result from "result";
import result from "result";
import result from "result";
import result from "result";
import result from "result";

function handleNameInputScreenOrSuggestions() {
  return _handleNameInputScreenOrSuggestions(...arguments);
}
function _handleNameInputScreenOrSuggestions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleNameInputScreenOrSuggestions = obj;
  return obj(...arguments);
}
function _handlePhoneVerificationComplete() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handlePhoneVerificationComplete = obj;
  return obj(...arguments);
}
function _startContactSync() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _startContactSync = obj;
  return obj(...arguments);
}
function _bulkAddFriendSuggestions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _bulkAddFriendSuggestions = obj;
  return obj(...arguments);
}
function _verifyPhone() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _verifyPhone = obj;
  return obj(...arguments);
}
function openContactSyncModal(initialRoutes, FRIENDS_ADD_FRIENDS_MODAL) {
  refreshContactSyncPermissionStatus();
  if (null == initialRoutes.initialRoutes) {
    callback4(constants.NORMAL);
  }
  if (FRIENDS_ADD_FRIENDS_MODAL) {
    let obj = FRIENDS_ADD_FRIENDS_MODAL(dependencyMap[9]);
    obj = { location: FRIENDS_ADD_FRIENDS_MODAL };
    obj.trackFlowStart(obj);
  }
  obj = { initialRoutes: initialRoutes.initialRoutes, openSettingsSheet: initialRoutes.openSettings, customLandingPage: initialRoutes.customLandingPage };
  const obj3 = importDefault(dependencyMap[18]);
  importDefault(dependencyMap[18]).pushLazy(FRIENDS_ADD_FRIENDS_MODAL(dependencyMap[20])(dependencyMap[19], dependencyMap.paths), obj, closure_20).then(arg2);
}
function refreshContactSyncPermissionStatus() {
  const result = arg1(dependencyMap[8]).checkContactPermissions();
  result.then((arg0) => {
    callback(arg0);
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
    function redesignCloseContactSyncModal(onComplete, flag, friendsFound, friendsAdded) {
      if (flag === undefined) {
        flag = true;
      }
      let obj = callback(closure_2[9]);
      obj = { num_contacts_found: friendsFound, num_contacts_added: friendsAdded };
      obj.trackFlowEnd(flag, obj);
      if (tmp) {
        onComplete(flag);
      } else {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          callback(closure_2[18]).popWithKey(closure_20);
        }, 0);
      }
    }(onComplete, flag, friendsFound, friendsAdded);
  } else {
    function oldCloseContactSyncModal(flag, friendsFound, friendsAdded, back) {
      let flag2 = back;
      if (flag === undefined) {
        flag = true;
      }
      if (flag2 === undefined) {
        flag2 = false;
      }
      let tmp;
      tmp = callback2();
      if (!flag2) {
        let obj = flag(tmp[9]);
        obj = { num_contacts_found: friendsFound, num_contacts_added: friendsAdded };
        obj.trackFlowEnd(flag, obj);
      }
      if (tmp) {
        const updateAnimation = flag2(tmp[18]).updateAnimation;
        const ModalAnimation = flag(tmp[22]).ModalAnimation;
        if (flag2) {
          updateAnimation(tmp10, ModalAnimation.SLIDE_IN_OUT_REVERSE);
        } else {
          updateAnimation(tmp10, ModalAnimation.SLIDE_IN_OUT);
        }
        const tmp9 = flag2(tmp[18]);
      }
      const timerId = setTimeout(() => {
        let obj = flag2(tmp[18]);
        obj.popWithKey(closure_20);
        if (tmp) {
          const updateAnimation = flag2(tmp[18]).updateAnimation;
          const ModalAnimation = flag(tmp[22]).ModalAnimation;
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
          const tmp5 = flag2(tmp[18]);
        }
      }, 0);
    }(flag, friendsFound, friendsAdded, back);
  }
}
({ setError: closure_6, setPermissionState: closure_7, setSuggestions: closure_8, setPhone: closure_9, setPhoneToken: closure_10, setName: closure_11, useContactSyncModalStore: closure_12, ContactSyncModes: closure_13, initialize: closure_14, getIsOnboarding: closure_15 } = result);
({ deleteStoredContacts: closure_16, setStoredContacts: closure_17 } = result);
({ ContactPermissions: closure_18, ContactSyncScenes: closure_19, CONTACT_SYNC_MODAL_KEY: closure_20 } = result);
({ AnalyticEvents: closure_21, PlatformTypes: closure_22 } = result);
({ NativePermissionStates: closure_23, NativePermissionTypes: closure_24 } = arg1(dependencyMap[7]));
result = result.fileFinishedImporting("modules/contact_sync/native/ContactSyncModalActionCreators.tsx");

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
  arg1(dependencyMap[9]).trackFlowStep(arg1(dependencyMap[9]).Steps.LANDING, false, true);
  closure_1.pop(closure_1.getState().routes.length - 1);
};
export const submitPhone = function submitPhone(arg0, closure_0) {
  callback2(arg0);
  closure_0(dependencyMap[9]).trackFlowStep(closure_0(dependencyMap[9]).Steps.VERIFY_PHONE_NUMBER, false, false);
  closure_0.navigate(constants2.VERIFY_PHONE);
};
export const verifyPhone = function verifyPhone() {
  return _verifyPhone(...arguments);
};
export const verifyPhoneWithPassword = function verifyPhoneWithPassword(arg0, navigation) {
  navigation(dependencyMap[9]).trackFlowStep(navigation(dependencyMap[9]).Steps.PASSWORD_CONFIRM, false, false);
  callback3(arg0);
  navigation.navigate(constants2.VERIFY_PASSWORD);
};
export const upsellDismissed = function upsellDismissed() {
  arg1(dependencyMap[9]).trackFlowEnd(true);
};
export { openContactSyncModal };
export const openContactSyncModalOnboarding = function openContactSyncModalOnboarding() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  if (!flag) {
    let obj = {};
    obj = { page: arg1(dependencyMap[9]).CONTACT_SYNC_ONBOARDING_LOCATION };
    obj.location = obj;
    arg1(dependencyMap[9]).trackFlowStart(obj);
    const obj2 = arg1(dependencyMap[9]);
    // CreateGeneratorClosureLongIndex (0x67)
    importDefault(dependencyMap[18]).pushLazy(callback(dependencyMap[18]), {}, closure_20);
  } else {
    obj = arg1(dependencyMap[21]);
    closure_14(obj.hasDeferredInvite() ? closure_13.ONBOARDING_INVITE : closure_13.ONBOARDING);
    const tmp = closure_14;
  }
};
export const openContactSyncModalDeeplink = function openContactSyncModalDeeplink() {
  openContactSyncModal({}, { page: "Deep Link" });
};
export { refreshContactSyncPermissionStatus };
export { closeContactSyncModal };
