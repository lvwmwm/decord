// Module ID: 18038
// Function ID: 18039
// Name: showPushNotificationPromptModal
// Dependencies: [13973, 14277, 6744, 18039, 1994, 13976, 2]
// Exports: showPushNotificationPromptModal

// Module 18038 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13973 */;
import NUFConstants from "NUFConstants" /* 14277 */;
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
  obj.pushLazy(onComplete(1994)(18039, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13976);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}
