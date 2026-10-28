// Module ID: 17690
// Function ID: 17691
// Name: showPushNotificationPromptModal
// Dependencies: [13543, 13843, 6707, 17691, 1999, 13546, 2]
// Exports: showPushNotificationPromptModal

// Module 17690 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13543 */;
import NUFConstants from "NUFConstants" /* 13843 */;
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
  obj.pushLazy(onComplete(1999)(17691, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13546);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
