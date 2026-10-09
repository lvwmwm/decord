// Module ID: 16335
// Function ID: 16336
// Name: showPushNotificationPromptModal
// Dependencies: [12077, 12384, 5941, 16336, 2000, 12080, 2]
// Exports: showPushNotificationPromptModal

// Module 16335 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12077 */;
import NUFConstants from "NUFConstants" /* 12384 */;
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
  obj.pushLazy(onComplete(2000)(16336, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(12080);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
