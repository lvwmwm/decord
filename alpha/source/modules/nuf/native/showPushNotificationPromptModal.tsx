// Module ID: 17008
// Function ID: 17009
// Name: showPushNotificationPromptModal
// Dependencies: [12968, 13271, 6150, 17009, 2000, 12971, 2]
// Exports: showPushNotificationPromptModal

// Module 17008 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12968 */;
import NUFConstants from "NUFConstants" /* 13271 */;
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
  obj.pushLazy(onComplete(2000)(17009, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(12971);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
