// Module ID: 14657
// Function ID: 110528
// Name: showPushNotificationPromptModal
// Dependencies: []
// Exports: showPushNotificationPromptModal

// Module 14657 (showPushNotificationPromptModal)
const PermissionStateType = require(dependencyMap[0]).PermissionStateType;
let closure_4 = require(dependencyMap[1]).NUF_NOTIFICATION_MODAL_KEY;
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  const require = onComplete.onComplete;
  let obj = importDefault(dependencyMap[2]);
  obj = {
    onComplete() {
      callback(closure_2[2]).popWithKey(closure_4);
      onComplete();
    }
  };
  obj.pushLazy(require(dependencyMap[4])(dependencyMap[3], dependencyMap.paths), obj, closure_4);
  const result = require(dependencyMap[5]).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
