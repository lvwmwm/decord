// Module ID: 16402
// Function ID: 16403
// Name: showPushNotificationPromptModal
// Dependencies: [12121, 12428, 5934, 16403, 2000, 12124, 2]
// Exports: showPushNotificationPromptModal

// Module 16402 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12121 */;
import NUFConstants from "NUFConstants" /* 12428 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = ModalActionCreatorsDefault;
  const obj2 = {
    onComplete: function closeModal() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(closure_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(2000)(16403, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(12124);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
