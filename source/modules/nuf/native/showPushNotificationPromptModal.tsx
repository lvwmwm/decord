// Module ID: 14842
// Function ID: 113221
// Name: showPushNotificationPromptModal
// Dependencies: [11442, 11732, 4338, 14843, 1935, 11445, 2]
// Exports: showPushNotificationPromptModal

// Module 14842 (showPushNotificationPromptModal)
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
  obj.pushLazy(onComplete(1935)(14843, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11445).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
