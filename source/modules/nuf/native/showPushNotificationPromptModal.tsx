// Module ID: 14783
// Function ID: 112767
// Name: showPushNotificationPromptModal
// Dependencies: [11448, 11734, 4337, 14784, 1934, 11451, 2]
// Exports: showPushNotificationPromptModal

// Module 14783 (showPushNotificationPromptModal)
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
  obj.pushLazy(onComplete(1934)(14784, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11451).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
