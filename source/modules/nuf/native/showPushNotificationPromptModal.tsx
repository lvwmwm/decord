// Module ID: 15215
// Function ID: 15216
// Name: showPushNotificationPromptModal
// Dependencies: [11853, 12141, 4572, 15216, 2007, 11856, 2]
// Exports: showPushNotificationPromptModal

// Module 15215 (showPushNotificationPromptModal)
import { PermissionStateType } from "set";
import { NUF_NOTIFICATION_MODAL_KEY as closure_4 } from "NewUserTypes";

let result = require("module_4572").fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = importDefault(4572);
  obj = {
    onComplete() {
      outer1_1(outer1_2[2]).popWithKey(outer1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(2007)(15216, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11856).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
