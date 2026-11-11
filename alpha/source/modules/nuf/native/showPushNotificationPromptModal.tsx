// Module ID: 18579
// Function ID: 18580
// Name: showPushNotificationPromptModal
// Dependencies: [14716, 14913, 6785, 18580, 2118, 14719, 2]
// Exports: showPushNotificationPromptModal

// Module 18579 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14716 */;
import NUFConstants from "NUFConstants" /* 14913 */;
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
  obj.pushLazy(onComplete(2118)(18580, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(14719);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}
