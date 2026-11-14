// Module ID: 18703
// Function ID: 18704
// Name: showPushNotificationPromptModal
// Dependencies: [14825, 15023, 6848, 18704, 2121, 14828, 2]
// Exports: showPushNotificationPromptModal

// Module 18703 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14825 */;
import NUFConstants from "NUFConstants" /* 15023 */;
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
  obj.pushLazy(onComplete(2121)(18704, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(14828);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}
