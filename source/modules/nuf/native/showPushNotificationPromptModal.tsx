// Module ID: 15009
// Function ID: 15010
// Name: showPushNotificationPromptModal
// Dependencies: [11662, 11944, 4460, 15010, 1959, 11665, 2]
// Exports: showPushNotificationPromptModal

// Module 15009 (showPushNotificationPromptModal)
import { PermissionStateType } from "set";
import { NUF_NOTIFICATION_MODAL_KEY as closure_4 } from "NewUserTypes";

let result = require("module_4460").fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = importDefault(4460);
  obj = {
    onComplete() {
      outer1_1(outer1_2[2]).popWithKey(outer1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(1959)(15010, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11665).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
