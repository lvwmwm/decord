// Module ID: 18416
// Function ID: 18417
// Name: showPushNotificationPromptModal
// Dependencies: [14239, 14545, 6831, 18417, 2118, 14242, 2]
// Exports: showPushNotificationPromptModal

// Module 18416 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14239 */;
import NUFConstants from "NUFConstants" /* 14545 */;
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
  obj.pushLazy(onComplete(2118)(18417, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(14242);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}
