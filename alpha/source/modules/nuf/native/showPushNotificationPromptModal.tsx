// Module ID: 17335
// Function ID: 17336
// Name: showPushNotificationPromptModal
// Dependencies: [13245, 13545, 6657, 17336, 2002, 13248, 2]
// Exports: showPushNotificationPromptModal

// Module 17335 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13245 */;
import NUFConstants from "NUFConstants" /* 13545 */;
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
  obj.pushLazy(onComplete(2002)(17336, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13248);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
