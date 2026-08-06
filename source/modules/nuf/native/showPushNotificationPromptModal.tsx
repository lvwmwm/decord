// Module ID: 15047
// Function ID: 15048
// Name: showPushNotificationPromptModal
// Dependencies: [11696, 11978, 4490, 15048, 1988, 11699, 2]
// Exports: showPushNotificationPromptModal

// Module 15047 (showPushNotificationPromptModal)
import { PermissionStateType } from "set";
import { NUF_NOTIFICATION_MODAL_KEY as closure_4 } from "NewUserTypes";

let result = require("module_4490").fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = importDefault(4490);
  obj = {
    onComplete() {
      outer1_1(outer1_2[2]).popWithKey(outer1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(1988)(15048, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11699).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
