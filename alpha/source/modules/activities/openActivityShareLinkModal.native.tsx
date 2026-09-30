// Module ID: 14248
// Function ID: 14249
// Name: openActivityShareLinkModal
// Dependencies: [4731, 5069, 14249, 1981, 2]
// Exports: closeActivityShareLinkModal, openActivityShareLinkModal

// Module 14248 (openActivityShareLinkModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ChatInputUtils from "ChatInputUtils" /* 4731 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import size from "module_2" /* 2 */;

const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = size.fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  ({ applicationId, customId, linkId, message, onShare } = arg0);
  ChatInputUtils.dismissKeyboard();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14249, dependencyMap.paths), { applicationId, customId, linkId, message, onShare }, ACTIVITY_SHARE_LINK_MODAL, { presentation: "modal" });
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  ModalActionCreatorsDefault.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};
