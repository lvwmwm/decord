// Module ID: 15201
// Function ID: 15202
// Name: showPushNotificationPromptModal
// Dependencies: [11837, 12123, 4550, 15202, 2007, 11840, 2]
// Exports: showPushNotificationPromptModal

// Module 15201 (showPushNotificationPromptModal)
import { PermissionStateType } from "set";
import { NUF_NOTIFICATION_MODAL_KEY as closure_4 } from "NewUserTypes";

let result = require("module_4550").fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = importDefault(4550);
  obj = {
    onComplete() {
      outer1_1(outer1_2[2]).popWithKey(outer1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(2007)(15202, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11840).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
