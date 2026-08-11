// Module ID: 15144
// Function ID: 15145
// Name: showPushNotificationPromptModal
// Dependencies: [11781, 12063, 4509, 15145, 2007, 11784, 2]
// Exports: showPushNotificationPromptModal

// Module 15144 (showPushNotificationPromptModal)
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
  obj.pushLazy(onComplete(2007)(15145, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11784).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
