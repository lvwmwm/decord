// Module ID: 17503
// Function ID: 17504
// Name: showPushNotificationPromptModal
// Dependencies: [13279, 13611, 6429, 17504, 2119, 13282, 2]
// Exports: showPushNotificationPromptModal

// Module 17503 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13279 */;
import NUFConstants from "NUFConstants" /* 13611 */;
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
  obj.pushLazy(onComplete(2119)(17504, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13282);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}
