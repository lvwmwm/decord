// Module ID: 18030
// Function ID: 18031
// Name: showPushNotificationPromptModal
// Dependencies: [13958, 14262, 6744, 18031, 1994, 13961, 2]
// Exports: showPushNotificationPromptModal

// Module 18030 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13958 */;
import NUFConstants from "NUFConstants" /* 14262 */;
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
  obj.pushLazy(onComplete(1994)(18031, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13961);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}
