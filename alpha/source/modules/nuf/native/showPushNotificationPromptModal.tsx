// Module ID: 18746
// Function ID: 18747
// Name: showPushNotificationPromptModal
// Dependencies: [13905, 14235, 6833, 18747, 2121, 13908, 2]
// Exports: showPushNotificationPromptModal

// Module 18746 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13905 */;
import NUFConstants from "NUFConstants" /* 14235 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = ModalActionCreatorsDefault;
  const obj2 = {
    onComplete: function closeModal() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(closure_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(2121)(18747, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13908);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}
