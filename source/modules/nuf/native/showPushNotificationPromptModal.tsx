// Module ID: 15264
// Function ID: 15265
// Name: showPushNotificationPromptModal
// Dependencies: [11578, 11878, 5260, 15265, 2007, 11584, 2]
// Exports: showPushNotificationPromptModal

// Module 15264 (showPushNotificationPromptModal)
import { PermissionStateType } from "set";
import { NUF_NOTIFICATION_MODAL_KEY as closure_4 } from "NewUserTypes";

let result = require("module_5260").fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = importDefault(5260);
  obj = {
    onComplete() {
      outer1_1(outer1_2[2]).popWithKey(outer1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(2007)(15265, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11584).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
