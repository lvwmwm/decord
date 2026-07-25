// Module ID: 14841
// Function ID: 113216
// Name: showPushNotificationPromptModal
// Dependencies: [11441, 11731, 4338, 14842, 1935, 11444, 2]
// Exports: showPushNotificationPromptModal

// Module 14841 (showPushNotificationPromptModal)
import { PermissionStateType } from "_isNativeReflectConstruct";
import { NUF_NOTIFICATION_MODAL_KEY as closure_4 } from "NewUserTypes";

let result = require("module_4338").fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = importDefault(4338);
  obj = {
    onComplete() {
      outer1_1(outer1_2[2]).popWithKey(outer1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(1935)(14842, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11444).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
