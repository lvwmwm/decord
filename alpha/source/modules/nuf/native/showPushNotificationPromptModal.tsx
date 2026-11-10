// Module ID: 18407
// Function ID: 18408
// Name: showPushNotificationPromptModal
// Dependencies: [14233, 14539, 6801, 18408, 2118, 14236, 2]
// Exports: showPushNotificationPromptModal

// Module 18407 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6801 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14233 */;
import NUFConstants from "NUFConstants" /* 14539 */;
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
  obj.pushLazy(onComplete(2118)(18408, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(14236);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}
