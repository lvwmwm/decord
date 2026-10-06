// Module ID: 15625
// Function ID: 15626
// Name: showPushNotificationPromptModal
// Dependencies: [11796, 12095, 5040, 15626, 1987, 11799, 2]
// Exports: showPushNotificationPromptModal

// Module 15625 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 11796 */;
import NUFConstants from "NUFConstants" /* 12095 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = ModalActionCreatorsDefault;
  const obj2 = {
    onComplete() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(closure_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(1987)(15626, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(11799);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
