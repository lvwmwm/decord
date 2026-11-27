// Module ID: 17718
// Function ID: 17719
// Name: showPushNotificationPromptModal
// Dependencies: [13389, 13707, 6130, 17719, 2120, 13392, 2]
// Exports: showPushNotificationPromptModal

// Module 17718 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13389 */;
import NUFConstants from "NUFConstants" /* 13707 */;
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
  obj.pushLazy(onComplete(2120)(17719, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13392);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}
