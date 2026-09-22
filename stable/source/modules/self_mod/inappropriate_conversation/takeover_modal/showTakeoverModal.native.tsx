// Module ID: 17446
// Function ID: 17447
// Name: showTakeoverModal
// Dependencies: [11500, 11104, 4839, 15813, 1896, 2]
// Exports: showTakeoverModal

// Module 17446 (showTakeoverModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import Constants from "Constants" /* 11500 */;
import size from "module_2" /* 2 */;

const TAKEOVER_MODAL_KEY = Constants.TAKEOVER_MODAL_KEY;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  ({ warningId, warningType, senderId, channelId } = arg0);
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    const obj3 = { warningId, warningType, senderId, channelId };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15813, dependencyMap.paths), obj3, TAKEOVER_MODAL_KEY);
  }
};
