// Module ID: 16219
// Function ID: 16220
// Name: showPushNotificationPromptModal
// Dependencies: [12140, 12465, 5940, 16220, 1999, 12143, 2]
// Exports: showPushNotificationPromptModal

// Module 16219 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12140 */;
import NUFConstants from "NUFConstants" /* 12465 */;
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
  obj.pushLazy(onComplete(1999)(16220, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(12143);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
