// Module ID: 17517
// Function ID: 17518
// Name: showPushNotificationPromptModal
// Dependencies: [13285, 13617, 6429, 17518, 2119, 13288, 2]
// Exports: showPushNotificationPromptModal

// Module 17517 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13285 */;
import NUFConstants from "NUFConstants" /* 13617 */;
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
  obj.pushLazy(onComplete(2119)(17518, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13288);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}
