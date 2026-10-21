// Module ID: 18595
// Function ID: 18596
// Name: showTakeoverModal
// Dependencies: [10874, 10881, 6651, 16924, 2002, 2]
// Exports: showTakeoverModal

// Module 18595 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import Constants from "Constants" /* 10874 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 10881 */;
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
    obj2.pushLazy(asyncRequire(16924, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
};
