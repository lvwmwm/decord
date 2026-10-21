// Module ID: 17243
// Function ID: 17244
// Name: showPushNotificationPromptModal
// Dependencies: [13193, 13495, 6651, 17244, 2002, 13196, 2]
// Exports: showPushNotificationPromptModal

// Module 17243 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13193 */;
import NUFConstants from "NUFConstants" /* 13495 */;
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
  obj.pushLazy(onComplete(2002)(17244, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13196);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
