// Module ID: 16545
// Function ID: 16546
// Name: showTakeoverModal
// Dependencies: [10569, 10576, 5260, 15175, 2007, 2]
// Exports: showTakeoverModal

// Module 16545 (showTakeoverModal)
import { TAKEOVER_MODAL_KEY } from "LOCATION_CONTEXT_MOBILE";

const result = require("module_5260").fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  let channelId;
  let senderId;
  let warningId;
  let warningType;
  ({ warningId, warningType, senderId, channelId } = arg0);
  let obj = require(10576) /* InappropriateConversationExperiment */;
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    obj = { warningId: null, warningType: null, senderId: null, channelId: null };
    obj[0] = warningId;
    obj[1] = warningType;
    obj[2] = senderId;
    obj[3] = channelId;
    importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(15175, dependencyMap.paths), obj, TAKEOVER_MODAL_KEY);
    const obj2 = importDefault(5260);
  }
};
