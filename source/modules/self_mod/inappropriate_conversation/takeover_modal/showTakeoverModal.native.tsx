// Module ID: 15882
// Function ID: 121657
// Name: showTakeoverModal
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: showTakeoverModal

// Module 15882 (showTakeoverModal)
import { TAKEOVER_MODAL_KEY } from "result";
import result from "result";

result = result.fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  let channelId;
  let senderId;
  let warningId;
  let warningType;
  ({ warningId, warningType, senderId, channelId } = arg0);
  let obj = require(dependencyMap[1]);
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    obj = { warningId, warningType, senderId, channelId };
    importDefault(dependencyMap[2]).pushLazy(require(dependencyMap[4])(dependencyMap[3], dependencyMap.paths), obj, TAKEOVER_MODAL_KEY);
    const obj2 = importDefault(dependencyMap[2]);
  }
};
