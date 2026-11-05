// Module ID: 16586
// Function ID: 16587
// Name: openActivityShareLinkModal
// Dependencies: [13613, 16587, 2123, 6882, 2]
// Exports: closeActivityShareLinkModal, openActivityShareLinkModal

// Module 16586 (openActivityShareLinkModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 13613 */;
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
  tmp(asyncRequire(16587, dependencyMap.paths), { applicationId, customId, linkId, channelId, message, onShare }, ACTIVITY_SHARE_LINK_MODAL);
}
export function closeActivityShareLinkModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
}
