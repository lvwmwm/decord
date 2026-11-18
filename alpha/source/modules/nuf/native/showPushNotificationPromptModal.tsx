// Module ID: 17559
// Function ID: 17560
// Name: showPushNotificationPromptModal
// Dependencies: [13207, 13539, 6337, 17560, 2121, 13210, 2]
// Exports: showPushNotificationPromptModal

// Module 17559 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6337 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13207 */;
import NUFConstants from "NUFConstants" /* 13539 */;
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
  obj.pushLazy(onComplete(2121)(17560, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13210);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}
