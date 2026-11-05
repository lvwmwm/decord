// Module ID: 18326
// Function ID: 18327
// Name: showPushNotificationPromptModal
// Dependencies: [14204, 14502, 6882, 18327, 2123, 14207, 2]
// Exports: showPushNotificationPromptModal

// Module 18326 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14204 */;
import NUFConstants from "NUFConstants" /* 14502 */;
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
  obj.pushLazy(onComplete(2123)(18327, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(14207);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}
