// Module ID: 17758
// Function ID: 17759
// Name: showTakeoverModal
// Dependencies: [11655, 11263, 4991, 16039, 1980, 2]
// Exports: showTakeoverModal

// Module 17758 (showTakeoverModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import Constants from "Constants" /* 11655 */;
import size from "module_2" /* 2 */;

const TAKEOVER_MODAL_KEY = Constants.TAKEOVER_MODAL_KEY;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  ({ warningId, warningType, senderId, channelId } = arg0);
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    const obj3 = { warningId, warningType, senderId, channelId };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16039, dependencyMap.paths), obj3, TAKEOVER_MODAL_KEY);
  }
};
