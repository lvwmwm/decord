// Module ID: 17987
// Function ID: 17988
// Name: showPushNotificationPromptModal
// Dependencies: [13923, 14224, 6738, 17988, 1995, 13926, 2]
// Exports: showPushNotificationPromptModal

// Module 17987 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13923 */;
import NUFConstants from "NUFConstants" /* 14224 */;
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
  obj.pushLazy(onComplete(1995)(17988, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13926);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}
