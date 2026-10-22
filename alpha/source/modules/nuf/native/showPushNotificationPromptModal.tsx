// Module ID: 17313
// Function ID: 17314
// Name: showPushNotificationPromptModal
// Dependencies: [13229, 13531, 6658, 17314, 2002, 13232, 2]
// Exports: showPushNotificationPromptModal

// Module 17313 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6658 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13229 */;
import NUFConstants from "NUFConstants" /* 13531 */;
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
  obj.pushLazy(onComplete(2002)(17314, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13232);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
