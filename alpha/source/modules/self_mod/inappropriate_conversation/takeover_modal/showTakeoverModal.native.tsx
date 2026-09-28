// Module ID: 17115
// Function ID: 17116
// Name: showTakeoverModal
// Dependencies: [10905, 10431, 5039, 15323, 1981, 2]
// Exports: showTakeoverModal

// Module 17115 (showTakeoverModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import Constants from "Constants" /* 10905 */;
import size from "module_2" /* 2 */;

const TAKEOVER_MODAL_KEY = Constants.TAKEOVER_MODAL_KEY;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  ({ warningId, warningType, senderId, channelId } = arg0);
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    const obj3 = { warningId, warningType, senderId, channelId };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15323, dependencyMap.paths), obj3, TAKEOVER_MODAL_KEY);
  }
};
