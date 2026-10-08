// Module ID: 17785
// Function ID: 17786
// Name: showTakeoverModal
// Dependencies: [10361, 10368, 5940, 15896, 1999, 2]
// Exports: showTakeoverModal

// Module 17785 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import Constants from "Constants" /* 10361 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 10368 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(1999);
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
    obj2.pushLazy(asyncRequire(15896, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
};
