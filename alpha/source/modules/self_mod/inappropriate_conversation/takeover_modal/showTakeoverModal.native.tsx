// Module ID: 17503
// Function ID: 17504
// Name: showTakeoverModal
// Dependencies: [9797, 9805, 5099, 15616, 1987, 2]
// Exports: showTakeoverModal

// Module 17503 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import Constants from "Constants" /* 9797 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 9805 */;
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
    obj2.pushLazy(asyncRequire(15616, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
};
