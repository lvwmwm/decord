// Module ID: 19822
// Function ID: 19823
// Name: showTakeoverModal
// Dependencies: [11396, 11403, 6799, 18057, 2118, 2]
// Exports: showTakeoverModal

// Module 19822 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import Constants from "Constants" /* 11396 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11403 */;
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
    obj2.pushLazy(asyncRequire(18057, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
}
