// Module ID: 15133
// Function ID: 15134
// Name: showPushNotificationPromptModal
// Dependencies: [11777, 12059, 4509, 15134, 1988, 11780, 2]
// Exports: showPushNotificationPromptModal

// Module 15133 (showPushNotificationPromptModal)
import { PermissionStateType } from "set";
import { NUF_NOTIFICATION_MODAL_KEY as closure_4 } from "NewUserTypes";

let result = require("module_4509").fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = importDefault(4509);
  obj = {
    onComplete() {
      outer1_1(outer1_2[2]).popWithKey(outer1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(1988)(15134, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11780).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
