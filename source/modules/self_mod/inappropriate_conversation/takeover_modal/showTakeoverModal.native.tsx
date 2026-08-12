// Module ID: 16475
// Function ID: 16476
// Name: showTakeoverModal
// Dependencies: [10385, 10392, 4549, 15112, 2007, 2]
// Exports: showTakeoverModal

// Module 16475 (showTakeoverModal)
import { TAKEOVER_MODAL_KEY } from "LOCATION_CONTEXT_MOBILE";

const result = require("module_4549").fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  let channelId;
  let senderId;
  let warningId;
  let warningType;
  ({ warningId, warningType, senderId, channelId } = arg0);
  let obj = require(10392) /* InappropriateConversationExperiment */;
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    obj = { warningId: null, warningType: null, senderId: null, channelId: null };
    obj[0] = warningId;
    obj[1] = warningType;
    obj[2] = senderId;
    obj[3] = channelId;
    importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(15112, dependencyMap.paths), obj, TAKEOVER_MODAL_KEY);
    const obj2 = importDefault(4549);
  }
};
