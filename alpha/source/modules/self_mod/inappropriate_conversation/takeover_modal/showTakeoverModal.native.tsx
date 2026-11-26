// Module ID: 19679
// Function ID: 19680
// Name: showTakeoverModal
// Dependencies: [11819, 11512, 6130, 17358, 2120, 2]
// Exports: showTakeoverModal

// Module 19679 (showTakeoverModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11512 */;
import Constants from "Constants" /* 11819 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2120);
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
    obj2.pushLazy(asyncRequire(17358, tmp2.paths), obj3, TAKEOVER_MODAL_KEY);
  }
}
