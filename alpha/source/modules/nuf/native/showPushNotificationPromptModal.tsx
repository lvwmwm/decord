// Module ID: 15625
// Function ID: 15626
// Name: showPushNotificationPromptModal
// Dependencies: [11902, 12202, 5039, 15626, 1981, 11905, 2]
// Exports: showPushNotificationPromptModal

// Module 15625 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 11902 */;
import NUFConstants from "NUFConstants" /* 12202 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  ModalActionCreatorsDefault.pushLazy(onComplete(1981)(15626, dependencyMap.paths), {
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
  const result = onComplete(11905).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
