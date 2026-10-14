// Module ID: 16769
// Function ID: 16770
// Name: showPushNotificationPromptModal
// Dependencies: [12675, 12975, 5939, 16770, 2000, 12678, 2]
// Exports: showPushNotificationPromptModal

// Module 16769 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5939 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12675 */;
import NUFConstants from "NUFConstants" /* 12975 */;
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
  obj.pushLazy(onComplete(2000)(16770, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(12678);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
