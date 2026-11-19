// Module ID: 17552
// Function ID: 17553
// Name: showPushNotificationPromptModal
// Dependencies: [13189, 13521, 6308, 17553, 2121, 13192, 2]
// Exports: showPushNotificationPromptModal

// Module 17552 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13189 */;
import NUFConstants from "NUFConstants" /* 13521 */;
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
  obj.pushLazy(onComplete(2121)(17553, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13192);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}
