// Module ID: 17939
// Function ID: 17940
// Name: showTakeoverModal
// Dependencies: [10348, 10355, 5941, 16011, 2000, 2]
// Exports: showTakeoverModal

// Module 17939 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import Constants from "Constants" /* 10348 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 10355 */;
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
    obj2.pushLazy(asyncRequire(16011, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
};
