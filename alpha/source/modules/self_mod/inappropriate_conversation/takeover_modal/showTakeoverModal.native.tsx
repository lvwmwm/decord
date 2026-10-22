// Module ID: 18685
// Function ID: 18686
// Name: showTakeoverModal
// Dependencies: [10899, 10906, 6657, 17015, 2002, 2]
// Exports: showTakeoverModal

// Module 18685 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import Constants from "Constants" /* 10899 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 10906 */;
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
    obj2.pushLazy(asyncRequire(17015, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
};
