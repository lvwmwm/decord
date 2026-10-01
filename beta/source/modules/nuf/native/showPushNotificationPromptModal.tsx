// Module ID: 15623
// Function ID: 15624
// Name: showPushNotificationPromptModal
// Dependencies: [11902, 12202, 5039, 15624, 1981, 11905, 2]
// Exports: showPushNotificationPromptModal

// Module 15623 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 11902 */;
import NUFConstants from "NUFConstants" /* 12202 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = ModalActionCreatorsDefault;
  const obj2 = {
    onComplete() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(closure_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(1981)(15624, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(11905);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
