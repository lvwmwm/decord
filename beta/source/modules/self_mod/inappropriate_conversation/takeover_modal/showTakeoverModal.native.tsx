// Module ID: 19868
// Function ID: 19869
// Name: showTakeoverModal
// Dependencies: [11427, 11434, 6831, 18093, 2118, 2]
// Exports: showTakeoverModal

// Module 19868 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import Constants from "Constants" /* 11427 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11434 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2118);
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
    obj2.pushLazy(asyncRequire(18093, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
}
