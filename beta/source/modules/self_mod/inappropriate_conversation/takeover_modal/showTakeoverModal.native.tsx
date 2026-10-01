// Module ID: 17115
// Function ID: 17116
// Name: showTakeoverModal
// Dependencies: [10905, 10431, 5039, 15323, 1981, 2]
// Exports: showTakeoverModal

// Module 17115 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 10431 */;
import Constants from "Constants" /* 10905 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(1981);
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
    obj2.pushLazy(asyncRequire(15323, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
};
