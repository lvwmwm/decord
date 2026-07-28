// Module ID: 16116
// Function ID: 124566
// Name: showTakeoverModal
// Dependencies: [10138, 10109, 4372, 14796, 1935, 2]
// Exports: showTakeoverModal

// Module 16116 (showTakeoverModal)
import { TAKEOVER_MODAL_KEY } from "LOCATION_CONTEXT_MOBILE";

const result = require("module_4372").fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  let channelId;
  let senderId;
  let warningId;
  let warningType;
  ({ warningId, warningType, senderId, channelId } = arg0);
  let obj = require(10109) /* InappropriateConversationExperiment */;
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    obj = { warningId, warningType, senderId, channelId };
    importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(14796, dependencyMap.paths), obj, TAKEOVER_MODAL_KEY);
    const obj2 = importDefault(4372);
  }
};
