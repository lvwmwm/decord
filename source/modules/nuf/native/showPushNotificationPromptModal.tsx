// Module ID: 15998
// Function ID: 15999
// Name: showPushNotificationPromptModal
// Dependencies: [12409, 12705, 4763, 15999, 1896, 12412, 2]
// Exports: showPushNotificationPromptModal

// Module 15998 (showPushNotificationPromptModal)
import set from "set" /* 2 */;
import _modDef4763 from "module_4763" /* 4763 */;
import set2 from "set" /* 12409 */;
import NewUserTypes from "NewUserTypes" /* 12705 */;

const PermissionStateType = set2.PermissionStateType;
let closure_4 = NewUserTypes.NUF_NOTIFICATION_MODAL_KEY;
let result = set.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = _modDef4763;
  obj = {
    onComplete() {
      closure_1_1(closure_1_2[2]).popWithKey(closure_1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(1896)(15999, dependencyMap.paths), obj, closure_4);
  const result = onComplete(12412).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
