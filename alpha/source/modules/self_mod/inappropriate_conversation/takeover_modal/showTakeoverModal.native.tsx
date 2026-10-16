// Module ID: 18400
// Function ID: 18401
// Name: showTakeoverModal
// Dependencies: [10627, 10634, 6153, 16732, 2002, 2]
// Exports: showTakeoverModal

// Module 18400 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6153 */;
import Constants from "Constants" /* 10627 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 10634 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2002);
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
    obj2.pushLazy(asyncRequire(16732, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
};
