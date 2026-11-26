// Module ID: 19476
// Function ID: 19477
// Name: showTakeoverModal
// Dependencies: [11787, 11795, 6429, 17171, 2119, 2]
// Exports: showTakeoverModal

// Module 19476 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import Constants from "Constants" /* 11787 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11795 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2119);
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
    obj2.pushLazy(asyncRequire(17171, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
}
