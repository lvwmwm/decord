// Module ID: 17115
// Function ID: 17116
// Name: showPushNotificationPromptModal
// Dependencies: [13067, 13371, 6190, 17116, 2002, 13070, 2]
// Exports: showPushNotificationPromptModal

// Module 17115 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13067 */;
import NUFConstants from "NUFConstants" /* 13371 */;
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
  obj.pushLazy(onComplete(2002)(17116, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13070);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
