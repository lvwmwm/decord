// Module ID: 17767
// Function ID: 17768
// Name: showTakeoverModal
// Dependencies: [10394, 10402, 4993, 16035, 1984, 2]
// Exports: showTakeoverModal

// Module 17767 (showTakeoverModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import Constants from "Constants" /* 10394 */;
import size from "module_2" /* 2 */;

const TAKEOVER_MODAL_KEY = Constants.TAKEOVER_MODAL_KEY;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  ({ warningId, warningType, senderId, channelId } = arg0);
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    const obj3 = { warningId, warningType, senderId, channelId };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16035, dependencyMap.paths), obj3, TAKEOVER_MODAL_KEY);
  }
};
