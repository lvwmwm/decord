// Module ID: 17476
// Function ID: 17477
// Name: showTakeoverModal
// Dependencies: [9784, 9792, 5093, 15602, 1987, 2]
// Exports: showTakeoverModal

// Module 17476 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import Constants from "Constants" /* 9784 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 9792 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(1987);
const TAKEOVER_MODAL_KEY = Constants.TAKEOVER_MODAL_KEY;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
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
    obj2.pushLazy(asyncRequire(15602, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
};
