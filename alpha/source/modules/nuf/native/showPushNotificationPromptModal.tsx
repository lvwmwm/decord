// Module ID: 18284
// Function ID: 18285
// Name: showPushNotificationPromptModal
// Dependencies: [14190, 14488, 6879, 18285, 2123, 14193, 2]
// Exports: showPushNotificationPromptModal

// Module 18284 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14190 */;
import NUFConstants from "NUFConstants" /* 14488 */;
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
  obj.pushLazy(onComplete(2123)(18285, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(14193);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}
