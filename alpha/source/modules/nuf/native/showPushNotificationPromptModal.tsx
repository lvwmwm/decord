// Module ID: 17167
// Function ID: 17168
// Name: showPushNotificationPromptModal
// Dependencies: [13125, 13428, 6623, 17168, 2002, 13128, 2]
// Exports: showPushNotificationPromptModal

// Module 17167 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13125 */;
import NUFConstants from "NUFConstants" /* 13428 */;
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
  obj.pushLazy(onComplete(2002)(17168, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13128);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
