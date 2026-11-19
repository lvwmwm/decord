// Module ID: 19514
// Function ID: 19515
// Name: showTakeoverModal
// Dependencies: [11720, 11728, 6308, 17212, 2121, 2]
// Exports: showTakeoverModal

// Module 19514 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import Constants from "Constants" /* 11720 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11728 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2121);
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
    obj2.pushLazy(asyncRequire(17212, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
}
