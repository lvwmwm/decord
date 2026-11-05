// Module ID: 19734
// Function ID: 19735
// Name: showTakeoverModal
// Dependencies: [11452, 11459, 6882, 18013, 2123, 2]
// Exports: showTakeoverModal

// Module 19734 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import Constants from "Constants" /* 11452 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11459 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2123);
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
    obj2.pushLazy(asyncRequire(18013, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
}
