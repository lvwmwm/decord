// Module ID: 17928
// Function ID: 17929
// Name: showPushNotificationPromptModal
// Dependencies: [13776, 14076, 6731, 17929, 2000, 13779, 2]
// Exports: showPushNotificationPromptModal

// Module 17928 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13776 */;
import NUFConstants from "NUFConstants" /* 14076 */;
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
  obj.pushLazy(onComplete(2000)(17929, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13779);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}
