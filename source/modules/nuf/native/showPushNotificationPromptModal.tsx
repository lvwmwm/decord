// Module ID: 14906
// Function ID: 14907
// Name: showPushNotificationPromptModal
// Dependencies: [11500, 11792, 4395, 14907, 1959, 11503, 2]
// Exports: showPushNotificationPromptModal

// Module 14906 (showPushNotificationPromptModal)
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
  obj.pushLazy(onComplete(1959)(14907, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11503).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
