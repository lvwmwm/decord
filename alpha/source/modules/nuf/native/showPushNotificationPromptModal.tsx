// Module ID: 17654
// Function ID: 17655
// Name: showPushNotificationPromptModal
// Dependencies: [13329, 13648, 6099, 17655, 2119, 13332, 2]
// Exports: showPushNotificationPromptModal

// Module 17654 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13329 */;
import NUFConstants from "NUFConstants" /* 13648 */;
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
  obj.pushLazy(onComplete(2119)(17655, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13332);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}
