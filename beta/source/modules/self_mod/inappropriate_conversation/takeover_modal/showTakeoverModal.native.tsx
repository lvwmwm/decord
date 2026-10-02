// Module ID: 17117
// Function ID: 17118
// Name: showTakeoverModal
// Dependencies: [9557, 9565, 5040, 15311, 1987, 2]
// Exports: showTakeoverModal

// Module 17117 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import Constants from "Constants" /* 9557 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 9565 */;
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
    obj2.pushLazy(asyncRequire(15311, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
};
