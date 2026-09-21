// Module ID: 17756
// Function ID: 17757
// Name: showTakeoverModal
// Dependencies: [10355, 10363, 4961, 16025, 1984, 2]
// Exports: showTakeoverModal

// Module 17756 (showTakeoverModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import Constants from "Constants" /* 10355 */;
import size from "module_2" /* 2 */;

const TAKEOVER_MODAL_KEY = Constants.TAKEOVER_MODAL_KEY;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  ({ warningId, warningType, senderId, channelId } = arg0);
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    const obj3 = { warningId, warningType, senderId, channelId };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16025, dependencyMap.paths), obj3, TAKEOVER_MODAL_KEY);
  }
};
