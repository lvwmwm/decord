// Module ID: 16425
// Function ID: 16426
// Name: showPushNotificationPromptModal
// Dependencies: [12123, 12430, 5934, 16426, 2000, 12126, 2]
// Exports: showPushNotificationPromptModal

// Module 16425 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12123 */;
import NUFConstants from "NUFConstants" /* 12430 */;
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
  obj.pushLazy(onComplete(2000)(16426, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(12126);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
