// Module ID: 15135
// Function ID: 15136
// Name: showPushNotificationPromptModal
// Dependencies: [11778, 12060, 4509, 15136, 1988, 11781, 2]
// Exports: showPushNotificationPromptModal

// Module 15135 (showPushNotificationPromptModal)
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
  obj.pushLazy(onComplete(1988)(15136, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11781).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
