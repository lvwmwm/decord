// Module ID: 17252
// Function ID: 17253
// Name: showTakeoverModal
// Dependencies: [11295, 10899, 4731, 15646, 2008, 2]
// Exports: showTakeoverModal

// Module 17252 (showTakeoverModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;
import InappropriateConversationExperiment from "InappropriateConversationExperiment" /* 10899 */;
import LOCATION_CONTEXT_MOBILE from "LOCATION_CONTEXT_MOBILE" /* 11295 */;

const TAKEOVER_MODAL_KEY = LOCATION_CONTEXT_MOBILE.TAKEOVER_MODAL_KEY;
const result = set.fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  ({ warningId, warningType, senderId, channelId } = arg0);
  let obj = InappropriateConversationExperiment;
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    obj = { warningId: null, warningType: null, senderId: null, channelId: null };
    obj[0] = warningId;
    obj[1] = warningType;
    obj[2] = senderId;
    obj[3] = channelId;
    _modDef4731.pushLazy(asyncRequireImpl(15646, dependencyMap.paths), obj, TAKEOVER_MODAL_KEY);
    const obj2 = _modDef4731;
  }
};
