// Module ID: 14912
// Function ID: 14913
// Name: showPushNotificationPromptModal
// Dependencies: [11504, 11796, 4395, 14913, 1959, 11507, 2]
// Exports: showPushNotificationPromptModal

// Module 14912 (showPushNotificationPromptModal)
import { PermissionStateType } from "set";
import { NUF_NOTIFICATION_MODAL_KEY as closure_4 } from "NewUserTypes";

let result = require("module_4395").fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = importDefault(4395);
  obj = {
    onComplete() {
      outer1_1(outer1_2[2]).popWithKey(outer1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(1959)(14913, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11507).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
