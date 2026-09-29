// Module ID: 16332
// Function ID: 16333
// Name: showPushNotificationPromptModal
// Dependencies: [12692, 12987, 4991, 16333, 1980, 12695, 2]
// Exports: showPushNotificationPromptModal

// Module 16332 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12692 */;
import NUFConstants from "NUFConstants" /* 12987 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  ModalActionCreatorsDefault.pushLazy(onComplete(1980)(16333, dependencyMap.paths), {
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
  const result = onComplete(12695).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
