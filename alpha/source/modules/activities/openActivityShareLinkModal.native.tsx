// Module ID: 16280
// Function ID: 16281
// Name: openActivityShareLinkModal
// Dependencies: [13331, 16281, 1995, 6738, 2]
// Exports: closeActivityShareLinkModal, openActivityShareLinkModal

// Module 16280 (openActivityShareLinkModal)
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import showSearchableDestinationListModalDefault from "showSearchableDestinationListModal" /* 13331 */;
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
  tmp(asyncRequire(16281, dependencyMap.paths), { applicationId, customId, linkId, channelId, message, onShare }, ACTIVITY_SHARE_LINK_MODAL);
}
export function closeActivityShareLinkModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
}
