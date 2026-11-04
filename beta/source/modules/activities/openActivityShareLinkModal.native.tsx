// Module ID: 16326
// Function ID: 16327
// Name: openActivityShareLinkModal
// Dependencies: [13381, 16327, 1994, 6744, 2]
// Exports: closeActivityShareLinkModal, openActivityShareLinkModal

// Module 16326 (openActivityShareLinkModal)
import asyncRequire from "asyncRequire" /* 1994 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 13381 */;
import size from "module_2" /* 2 */;

const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = size.fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");
const ACTIVITY_SHARE_LINK_MODAL_export = "ACTIVITY_SHARE_LINK_MODAL";

export { ACTIVITY_SHARE_LINK_MODAL_export as ACTIVITY_SHARE_LINK_MODAL };
export function openActivityShareLinkModal(arg0) {
  let applicationId;
  let channelId;
  let customId;
  let linkId;
  let message;
  let onShare;
  ({ applicationId, customId, linkId, channelId, message, onShare } = arg0);
  const tmp = showSearchableDestinationListModalDefault;
  tmp(asyncRequire(16327, dependencyMap.paths), { applicationId, customId, linkId, channelId, message, onShare }, ACTIVITY_SHARE_LINK_MODAL);
}
export function closeActivityShareLinkModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
}
