// Module ID: 19617
// Function ID: 19618
// Name: showTakeoverModal
// Dependencies: [11771, 11465, 6099, 17307, 2119, 2]
// Exports: showTakeoverModal

// Module 19617 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11465 */;
import Constants from "Constants" /* 11771 */;
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
    obj2.pushLazy(asyncRequire(17307, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
}
