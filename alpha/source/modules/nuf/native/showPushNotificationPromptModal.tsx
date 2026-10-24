// Module ID: 17411
// Function ID: 17412
// Name: showPushNotificationPromptModal
// Dependencies: [13305, 13605, 6672, 17412, 2002, 13308, 2]
// Exports: showPushNotificationPromptModal

// Module 17411 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13305 */;
import NUFConstants from "NUFConstants" /* 13605 */;
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
  obj.pushLazy(onComplete(2002)(17412, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13308);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
