// Module ID: 18494
// Function ID: 18495
// Name: showTakeoverModal
// Dependencies: [10719, 10726, 6620, 16829, 2002, 2]
// Exports: showTakeoverModal

// Module 18494 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6620 */;
import Constants from "Constants" /* 10719 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 10726 */;
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
    obj2.pushLazy(asyncRequire(16829, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
};
