// Module ID: 14886
// Function ID: 113394
// Name: showPushNotificationPromptModal
// Dependencies: [11480, 11771, 4372, 14887, 1935, 11483, 2]
// Exports: showPushNotificationPromptModal

// Module 14886 (showPushNotificationPromptModal)
import { PermissionStateType } from "_isNativeReflectConstruct";
import { NUF_NOTIFICATION_MODAL_KEY as closure_4 } from "NewUserTypes";

let result = require("module_4372").fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = importDefault(4372);
  obj = {
    onComplete() {
      outer1_1(outer1_2[2]).popWithKey(outer1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(1935)(14887, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11483).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
