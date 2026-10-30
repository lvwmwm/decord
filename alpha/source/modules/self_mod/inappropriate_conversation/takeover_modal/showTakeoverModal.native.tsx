// Module ID: 19359
// Function ID: 19360
// Name: showTakeoverModal
// Dependencies: [11230, 11237, 6738, 17677, 1995, 2]
// Exports: showTakeoverModal

// Module 19359 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import Constants from "Constants" /* 11230 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11237 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(1995);
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
    obj2.pushLazy(asyncRequire(17677, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
}
