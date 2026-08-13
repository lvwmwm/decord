// Module ID: 15210
// Function ID: 15211
// Name: showPushNotificationPromptModal
// Dependencies: [11836, 12122, 4550, 15211, 2007, 11839, 2]
// Exports: showPushNotificationPromptModal

// Module 15210 (showPushNotificationPromptModal)
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
  obj.pushLazy(onComplete(2007)(15211, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11839).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
