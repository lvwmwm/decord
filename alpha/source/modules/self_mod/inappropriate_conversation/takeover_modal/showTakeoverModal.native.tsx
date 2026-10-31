// Module ID: 19416
// Function ID: 19417
// Name: showTakeoverModal
// Dependencies: [11256, 11263, 6744, 17721, 1994, 2]
// Exports: showTakeoverModal

// Module 19416 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import Constants from "Constants" /* 11256 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11263 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(1994);
const TAKEOVER_MODAL_KEY = Constants.TAKEOVER_MODAL_KEY;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export function showTakeoverModal(arg0) {
  let channelId;
  let senderId;
  let warningId;
  let warningType;
  ({ warningId, warningType, senderId, channelId } = arg0);
  const obj = SelfModInappropriateConversationExperiment;
  const tmp2 = dependencyMap;
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    const obj3 = { warningId, warningType, senderId, channelId };
    const obj2 = ModalActionCreatorsDefault;
    obj2.pushLazy(asyncRequire(17721, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
}
