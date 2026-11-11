// Module ID: 20043
// Function ID: 20044
// Name: showTakeoverModal
// Dependencies: [11963, 11971, 6785, 18255, 2118, 2]
// Exports: showTakeoverModal

// Module 20043 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import Constants from "Constants" /* 11963 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11971 */;
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
    obj2.pushLazy(asyncRequire(18255, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
}
