// Module ID: 15694
// Function ID: 15695
// Name: openActivityShareLinkModal
// Dependencies: [12841, 15695, 2002, 6657, 2]
// Exports: closeActivityShareLinkModal, openActivityShareLinkModal

// Module 15694 (openActivityShareLinkModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 12841 */;
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
  const tmp = showSearchableDestinationListModalDefault;
  tmp(asyncRequire(15695, dependencyMap.paths), { applicationId, customId, linkId, message, onShare }, ACTIVITY_SHARE_LINK_MODAL);
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};
