// Module ID: 20038
// Function ID: 20039
// Name: showTakeoverModal
// Dependencies: [11957, 11965, 6785, 18250, 2118, 2]
// Exports: showTakeoverModal

// Module 20038 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import Constants from "Constants" /* 11957 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11965 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2118);
const TAKEOVER_MODAL_KEY = Constants.TAKEOVER_MODAL_KEY;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export function showTakeoverModal(arg0) {
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
    obj2.pushLazy(asyncRequire(18250, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
}
