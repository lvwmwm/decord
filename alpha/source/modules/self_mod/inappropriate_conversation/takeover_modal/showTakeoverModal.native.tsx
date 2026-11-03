// Module ID: 19581
// Function ID: 19582
// Name: showTakeoverModal
// Dependencies: [11393, 11400, 6864, 17877, 2123, 2]
// Exports: showTakeoverModal

// Module 19581 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import Constants from "Constants" /* 11393 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11400 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2123);
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
    obj2.pushLazy(asyncRequire(17877, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
}
