// Module ID: 19463
// Function ID: 19464
// Name: showTakeoverModal
// Dependencies: [11782, 11790, 6429, 17159, 2119, 2]
// Exports: showTakeoverModal

// Module 19463 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import Constants from "Constants" /* 11782 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11790 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2119);
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
    obj2.pushLazy(asyncRequire(17159, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
}
