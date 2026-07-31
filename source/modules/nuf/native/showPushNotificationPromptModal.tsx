// Module ID: 14929
// Function ID: 14930
// Name: showPushNotificationPromptModal
// Dependencies: [11517, 11810, 4399, 14930, 1959, 11520, 2]
// Exports: showPushNotificationPromptModal

// Module 14929 (showPushNotificationPromptModal)
import { PermissionStateType } from "set";
import { NUF_NOTIFICATION_MODAL_KEY as closure_4 } from "NewUserTypes";

let result = require("module_4399").fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = importDefault(4399);
  obj = {
    onComplete() {
      outer1_1(outer1_2[2]).popWithKey(outer1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(1959)(14930, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11520).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
