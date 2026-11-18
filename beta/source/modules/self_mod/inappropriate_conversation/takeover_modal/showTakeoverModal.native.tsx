// Module ID: 20202
// Function ID: 20203
// Name: showTakeoverModal
// Dependencies: [12024, 12032, 6838, 18373, 2121, 2]
// Exports: showTakeoverModal

// Module 20202 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6838 */;
import Constants from "Constants" /* 12024 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 12032 */;
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
    obj2.pushLazy(asyncRequire(18373, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
}
