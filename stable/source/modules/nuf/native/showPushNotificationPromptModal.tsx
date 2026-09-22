// Module ID: 16095
// Function ID: 16096
// Name: showPushNotificationPromptModal
// Dependencies: [12542, 12838, 4839, 16096, 1896, 12545, 2]
// Exports: showPushNotificationPromptModal

// Module 16095 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12542 */;
import NUFConstants from "NUFConstants" /* 12838 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  ModalActionCreatorsDefault.pushLazy(onComplete(1896)(16096, dependencyMap.paths), {
    onComplete() {
      ModalActionCreatorsDefault.popWithKey(closure_4);
      onComplete();
    }
  }, closure_4);
  const obj2 = {
    onComplete() {
      ModalActionCreatorsDefault.popWithKey(closure_4);
      onComplete();
    }
  };
  const result = onComplete(12545).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
