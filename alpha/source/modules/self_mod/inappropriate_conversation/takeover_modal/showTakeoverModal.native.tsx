// Module ID: 19296
// Function ID: 19297
// Name: showTakeoverModal
// Dependencies: [11000, 11007, 6731, 17606, 2000, 2]
// Exports: showTakeoverModal

// Module 19296 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import Constants from "Constants" /* 11000 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11007 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2000);
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
    obj2.pushLazy(asyncRequire(17606, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
}
