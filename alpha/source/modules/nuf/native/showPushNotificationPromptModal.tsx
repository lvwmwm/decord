// Module ID: 17379
// Function ID: 17380
// Name: showPushNotificationPromptModal
// Dependencies: [13159, 13491, 6310, 17380, 2119, 13162, 2]
// Exports: showPushNotificationPromptModal

// Module 17379 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13159 */;
import NUFConstants from "NUFConstants" /* 13491 */;
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
  obj.pushLazy(onComplete(2119)(17380, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13162);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}
