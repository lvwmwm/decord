// Module ID: 15839
// Function ID: 15840
// Name: showPushNotificationPromptModal
// Dependencies: [12116, 12415, 5048, 15840, 1981, 12119, 2]
// Exports: showPushNotificationPromptModal

// Module 15839 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5048 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12116 */;
import NUFConstants from "NUFConstants" /* 12415 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  ModalActionCreatorsDefault.pushLazy(onComplete(1981)(15840, dependencyMap.paths), {
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
  const result = onComplete(12119).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
