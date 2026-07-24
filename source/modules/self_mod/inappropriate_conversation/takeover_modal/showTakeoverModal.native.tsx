// Module ID: 16054
// Function ID: 124195
// Name: showTakeoverModal
// Dependencies: [10166, 10137, 4337, 14740, 1934, 2]
// Exports: showTakeoverModal

// Module 16054 (showTakeoverModal)
import { TAKEOVER_MODAL_KEY } from "LOCATION_CONTEXT_MOBILE";

const result = require("module_4337").fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  let channelId;
  let senderId;
  let warningId;
  let warningType;
  ({ warningId, warningType, senderId, channelId } = arg0);
  let obj = require(10137) /* InappropriateConversationExperiment */;
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    obj = { warningId, warningType, senderId, channelId };
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(14740, dependencyMap.paths), obj, TAKEOVER_MODAL_KEY);
    const obj2 = importDefault(4337);
  }
};
