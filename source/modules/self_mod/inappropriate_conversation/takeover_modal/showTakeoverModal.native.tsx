// Module ID: 16290
// Function ID: 16291
// Name: showTakeoverModal
// Dependencies: [10256, 10263, 4490, 14956, 1988, 2]
// Exports: showTakeoverModal

// Module 16290 (showTakeoverModal)
import { TAKEOVER_MODAL_KEY } from "LOCATION_CONTEXT_MOBILE";

const result = require("module_4490").fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  let channelId;
  let senderId;
  let warningId;
  let warningType;
  ({ warningId, warningType, senderId, channelId } = arg0);
  let obj = require(10263) /* InappropriateConversationExperiment */;
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    obj = { warningId: null, warningType: null, senderId: null, channelId: null };
    obj[0] = warningId;
    obj[1] = warningType;
    obj[2] = senderId;
    obj[3] = channelId;
    importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(14956, dependencyMap.paths), obj, TAKEOVER_MODAL_KEY);
    const obj2 = importDefault(4490);
  }
};
