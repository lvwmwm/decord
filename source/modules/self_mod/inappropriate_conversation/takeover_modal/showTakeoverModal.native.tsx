// Module ID: 16145
// Function ID: 16146
// Name: showTakeoverModal
// Dependencies: [10155, 10126, 4395, 14815, 1959, 2]
// Exports: showTakeoverModal

// Module 16145 (showTakeoverModal)
import { TAKEOVER_MODAL_KEY } from "LOCATION_CONTEXT_MOBILE";

const result = require("module_4395").fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  let channelId;
  let senderId;
  let warningId;
  let warningType;
  ({ warningId, warningType, senderId, channelId } = arg0);
  let obj = require(10126) /* InappropriateConversationExperiment */;
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    obj = { warningId: null, warningType: null, senderId: null, channelId: null };
    obj[0] = warningId;
    obj[1] = warningType;
    obj[2] = senderId;
    obj[3] = channelId;
    importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(14815, dependencyMap.paths), obj, TAKEOVER_MODAL_KEY);
    const obj2 = importDefault(4395);
  }
};
