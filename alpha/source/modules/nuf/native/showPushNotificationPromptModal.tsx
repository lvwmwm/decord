// Module ID: 18187
// Function ID: 18188
// Name: showPushNotificationPromptModal
// Dependencies: [14104, 14408, 6864, 18188, 2123, 14107, 2]
// Exports: showPushNotificationPromptModal

// Module 18187 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14104 */;
import NUFConstants from "NUFConstants" /* 14408 */;
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
  obj.pushLazy(onComplete(2123)(18188, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(14107);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}
