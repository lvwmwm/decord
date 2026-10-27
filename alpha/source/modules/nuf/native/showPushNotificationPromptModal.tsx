// Module ID: 17455
// Function ID: 17456
// Name: showPushNotificationPromptModal
// Dependencies: [13326, 13625, 6673, 17456, 1999, 13329, 2]
// Exports: showPushNotificationPromptModal

// Module 17455 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13326 */;
import NUFConstants from "NUFConstants" /* 13625 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = ModalActionCreatorsDefault;
  const obj2 = {
    onComplete: function closeModal() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(closure_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(1999)(17456, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13329);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
