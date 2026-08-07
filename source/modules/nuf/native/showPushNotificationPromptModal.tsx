// Module ID: 15063
// Function ID: 15064
// Name: showPushNotificationPromptModal
// Dependencies: [11711, 11993, 4507, 15064, 1988, 11714, 2]
// Exports: showPushNotificationPromptModal

// Module 15063 (showPushNotificationPromptModal)
import { PermissionStateType } from "set";
import { NUF_NOTIFICATION_MODAL_KEY as closure_4 } from "NewUserTypes";

let result = require("module_4507").fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = importDefault(4507);
  obj = {
    onComplete() {
      outer1_1(outer1_2[2]).popWithKey(outer1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(1988)(15064, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11714).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
