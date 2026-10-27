// Module ID: 17416
// Function ID: 17417
// Name: showPushNotificationPromptModal
// Dependencies: [13312, 13611, 6672, 17417, 2002, 13315, 2]
// Exports: showPushNotificationPromptModal

// Module 17416 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13312 */;
import NUFConstants from "NUFConstants" /* 13611 */;
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
  obj.pushLazy(onComplete(2002)(17417, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13315);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
