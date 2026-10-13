// Module ID: 18072
// Function ID: 18073
// Name: showTakeoverModal
// Dependencies: [10382, 10389, 5934, 16409, 2000, 2]
// Exports: showTakeoverModal

// Module 18072 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import Constants from "Constants" /* 10382 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 10389 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2000);
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
    obj2.pushLazy(asyncRequire(16409, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
};
