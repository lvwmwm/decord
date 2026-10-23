// Module ID: 17379
// Function ID: 17380
// Name: showPushNotificationPromptModal
// Dependencies: [13268, 13568, 6670, 17380, 2002, 13271, 2]
// Exports: showPushNotificationPromptModal

// Module 17379 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6670 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13268 */;
import NUFConstants from "NUFConstants" /* 13568 */;
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
  obj.pushLazy(onComplete(2002)(17380, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(13271);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
