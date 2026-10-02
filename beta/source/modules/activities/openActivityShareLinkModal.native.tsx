// Module ID: 14049
// Function ID: 14050
// Name: openActivityShareLinkModal
// Dependencies: [4703, 5040, 14050, 1987, 2]
// Exports: closeActivityShareLinkModal, openActivityShareLinkModal

// Module 14049 (openActivityShareLinkModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ChatInputUtils from "ChatInputUtils" /* 4703 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import size from "module_2" /* 2 */;

const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = size.fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");
const ACTIVITY_SHARE_LINK_MODAL_export = "ACTIVITY_SHARE_LINK_MODAL";

export { ACTIVITY_SHARE_LINK_MODAL_export as ACTIVITY_SHARE_LINK_MODAL };
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  let applicationId;
  let customId;
  let linkId;
  let message;
  let onShare;
  ({ applicationId, customId, linkId, message, onShare } = arg0);
  const obj = ChatInputUtils;
  obj.dismissKeyboard();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { applicationId, customId, linkId, message, onShare };
  obj2.pushLazy(asyncRequire(14050, dependencyMap.paths), obj3, ACTIVITY_SHARE_LINK_MODAL, { presentation: "modal" });
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};
