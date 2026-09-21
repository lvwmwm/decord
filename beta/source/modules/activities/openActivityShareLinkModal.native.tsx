// Module ID: 14769
// Function ID: 14770
// Name: openActivityShareLinkModal
// Dependencies: [4625, 4961, 14770, 1984, 2]
// Exports: closeActivityShareLinkModal, openActivityShareLinkModal

// Module 14769 (openActivityShareLinkModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ChatInputUtils from "ChatInputUtils" /* 4625 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import size from "module_2" /* 2 */;

const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = size.fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  ({ applicationId, customId, linkId, message, onShare } = arg0);
  ChatInputUtils.dismissKeyboard();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14770, dependencyMap.paths), { applicationId, customId, linkId, message, onShare }, ACTIVITY_SHARE_LINK_MODAL, { presentation: "modal" });
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  ModalActionCreatorsDefault.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};
