// Module ID: 16342
// Function ID: 16343
// Name: showPushNotificationPromptModal
// Dependencies: [12594, 12888, 4993, 16343, 1984, 12597, 2]
// Exports: showPushNotificationPromptModal

// Module 16342 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12594 */;
import NUFConstants from "NUFConstants" /* 12888 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  ModalActionCreatorsDefault.pushLazy(onComplete(1984)(16343, dependencyMap.paths), {
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
  const result = onComplete(12597).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
