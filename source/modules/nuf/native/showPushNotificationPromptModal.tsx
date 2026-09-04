// Module ID: 15922
// Function ID: 15923
// Name: showPushNotificationPromptModal
// Dependencies: [12341, 12637, 4731, 15923, 2008, 12344, 2]
// Exports: showPushNotificationPromptModal

// Module 15922 (showPushNotificationPromptModal)
import set from "set" /* 2 */;
import _modDef4731 from "module_4731" /* 4731 */;
import set2 from "set" /* 12341 */;
import NewUserTypes from "NewUserTypes" /* 12637 */;

const PermissionStateType = set2.PermissionStateType;
let closure_4 = NewUserTypes.NUF_NOTIFICATION_MODAL_KEY;
let result = set.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = _modDef4731;
  obj = {
    onComplete() {
      closure_1_1(closure_1_2[2]).popWithKey(closure_1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(2008)(15923, dependencyMap.paths), obj, closure_4);
  const result = onComplete(12344).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
