// Module ID: 18365
// Function ID: 18366
// Name: showPushNotificationPromptModal
// Dependencies: [14206, 14512, 6799, 18366, 2118, 14209, 2]
// Exports: showPushNotificationPromptModal

// Module 18365 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14206 */;
import NUFConstants from "NUFConstants" /* 14512 */;
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
  obj.pushLazy(onComplete(2118)(18366, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(14209);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}
