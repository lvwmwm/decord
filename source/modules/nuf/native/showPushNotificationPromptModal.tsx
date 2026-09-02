// Module ID: 15820
// Function ID: 15821
// Name: showPushNotificationPromptModal
// Dependencies: [12202, 12467, 4723, 15821, 2008, 12205, 2]
// Exports: showPushNotificationPromptModal

// Module 15820 (showPushNotificationPromptModal)
import set from "set" /* 2 */;
import _modDef4723 from "module_4723" /* 4723 */;
import set2 from "set" /* 12202 */;
import NewUserTypes from "NewUserTypes" /* 12467 */;

const PermissionStateType = set2.PermissionStateType;
let closure_4 = NewUserTypes.NUF_NOTIFICATION_MODAL_KEY;
let result = set.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = _modDef4723;
  obj = {
    onComplete() {
      closure_1_1(closure_1_2[2]).popWithKey(closure_1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(2008)(15821, dependencyMap.paths), obj, closure_4);
  const result = onComplete(12205).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
