// Module ID: 14830
// Function ID: 113088
// Name: showPushNotificationPromptModal
// Dependencies: [11478, 11761, 4337, 14831, 1934, 11481, 2]
// Exports: showPushNotificationPromptModal

// Module 14830 (showPushNotificationPromptModal)
import { PermissionStateType } from "_isNativeReflectConstruct";
import { NUF_NOTIFICATION_MODAL_KEY as closure_4 } from "NewUserTypes";

let result = require("module_4337").fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = importDefault(4337);
  obj = {
    onComplete() {
      outer1_1(outer1_2[2]).popWithKey(outer1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(1934)(14831, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11481).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
