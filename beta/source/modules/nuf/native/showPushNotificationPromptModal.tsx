// Module ID: 18707
// Function ID: 18708
// Name: showPushNotificationPromptModal
// Dependencies: [14827, 15025, 6838, 18708, 2121, 14830, 2]
// Exports: showPushNotificationPromptModal

// Module 18707 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6838 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14827 */;
import NUFConstants from "NUFConstants" /* 15025 */;
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
  obj.pushLazy(onComplete(2121)(18708, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(14830);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}
