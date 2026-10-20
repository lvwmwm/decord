// Module ID: 17148
// Function ID: 17149
// Name: showPushNotificationPromptModal
// Dependencies: [13107, 13410, 6620, 17149, 2002, 13110, 2]
// Exports: showPushNotificationPromptModal

// Module 17148 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6620 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13107 */;
import NUFConstants from "NUFConstants" /* 13410 */;
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
  obj.pushLazy(onComplete(2002)(17149, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13110);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
